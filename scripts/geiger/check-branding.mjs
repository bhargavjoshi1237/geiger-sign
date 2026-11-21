#!/usr/bin/env node
// Geiger Sign guard: fails when a signer/email surface still names Documenso, the AGPL source link
// is missing, or GEIGER_CHANGES.md doesn't list every file changed from the upstream tag.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const UPSTREAM_TAG = 'v2.21.1';

const SURFACES = [
  'apps/remix/app/routes/_recipient+',
  'apps/remix/app/utils/meta.ts',
  'apps/remix/app/components/general/document-signing',
  'apps/remix/app/components/general/envelope-signing',
  'apps/remix/public/site.webmanifest',
  'packages/email/templates',
  'packages/email/template-components',
  'packages/lib/constants/email.ts',
  'packages/lib/jobs/definitions/emails/send-account-disabled-email.handler.ts',
  'packages/lib/jobs/definitions/emails/send-admin-user-created-email.handler.ts',
  'packages/lib/server-only/organisation/create-organisation-member-invites.ts',
  'packages/lib/server-only/team/create-team-email-verification.ts',
  'packages/lib/server-only/team/delete-team.ts',
];

const BRAND = /\bDocumenso\b|documenso\.com|documen\.so/;
const SKIP_LINE = /@documenso\/|^\s*(\/\/|\*|\/\*)/;

const SOURCE_LINK_FILES = [
  'apps/remix/app/routes/_recipient+/_layout.tsx',
  'apps/remix/app/routes/_authenticated+/_layout.tsx',
];

const walk = (path) => (statSync(path).isDirectory() ? readdirSync(path).flatMap((name) => walk(join(path, name))) : [path]);
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).split('\n').filter(Boolean);

const problems = [];

for (const file of SURFACES.flatMap(walk)) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, index) => {
      if (BRAND.test(line) && !SKIP_LINE.test(line)) problems.push(`${file}:${index + 1}: ${line.trim()}`);
    });
}

for (const file of SOURCE_LINK_FILES) {
  if (!readFileSync(file, 'utf8').includes('<GeigerSourceLink')) problems.push(`${file}: missing <GeigerSourceLink />`);
}

const changeLog = existsSync('GEIGER_CHANGES.md') ? readFileSync('GEIGER_CHANGES.md', 'utf8') : '';
const changed = new Set([...git('diff', '--name-only', UPSTREAM_TAG), ...git('ls-files', '--others', '--exclude-standard')]);

for (const file of changed) {
  if (!changeLog.includes(`\`${file}\``)) problems.push(`GEIGER_CHANGES.md: not listed: ${file}`);
}

if (problems.length > 0) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} branding problem(s).`);
  process.exit(1);
}

console.log('Geiger Sign branding check passed.');
