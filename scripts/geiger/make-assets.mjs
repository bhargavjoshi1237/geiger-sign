#!/usr/bin/env node
// Renders Geiger Sign favicons, touch icons, email logos and the OG image from scripts/geiger/assets/*.svg.
// Usage: node scripts/geiger/make-assets.mjs <dir whose node_modules has sharp@0.34.4 and png-to-ico@2.1.8>
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const depsDir = process.argv[2];
if (!depsDir) throw new Error('Pass the directory that has sharp and png-to-ico installed.');

const require = createRequire(join(depsDir, 'package.json'));
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

const svg = (name) => readFileSync(join('scripts/geiger/assets', name));
const write = (path, buffer) => {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, buffer);
  console.log(`wrote ${path}`);
};
const png = (name, size) => sharp(svg(name), { density: 384 }).resize(size, size).png().toBuffer();

const ICON_SIZES = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

const iconFiles = {};
for (const [file, size] of Object.entries(ICON_SIZES)) iconFiles[file] = await png('icon.svg', size);
const favicon = await pngToIco([await png('icon.svg', 16), await png('icon.svg', 32), await png('icon.svg', 48)]);

const wordmark = await sharp(svg('wordmark.svg'), { density: 192 }).resize({ height: 96 }).png().toBuffer();
const og = await sharp(svg('og.svg')).jpeg({ quality: 90 }).toBuffer();

for (const dir of ['apps/remix/public', 'packages/assets']) {
  for (const [file, buffer] of Object.entries(iconFiles)) write(join(dir, file), buffer);
  write(join(dir, 'favicon.ico'), favicon);
  write(join(dir, 'static/logo.png'), wordmark);
}
write('packages/assets/logo.png', wordmark);
write('packages/email/static/logo.png', wordmark);
write('apps/remix/public/opengraph-image.jpg', og);
