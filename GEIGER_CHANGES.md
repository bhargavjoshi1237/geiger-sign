# Geiger Sign — changes from Documenso

Geiger Sign is a modified version of [Documenso](https://github.com/documenso/documenso) Community Edition,
distributed under the GNU Affero General Public License v3.0 (see `LICENSE`). Documenso is a trademark of
Documenso, Inc.; Geiger Sign is not affiliated with or endorsed by Documenso, Inc.

- **Upstream base:** `v2.21.1`
- **Source of the running service:** linked from every page ("Source code").
- **Not modified:** `packages/ee` (Documenso Commercial License) — not modified and not enabled.

Every file below differs from the upstream base. Dates are when the change was made.

| File | Date | Change |
|---|---|---|
| `GEIGER_CHANGES.md` | 2026-11-21 | This list of modifications (AGPL-3.0 §5a). |
| `README.md` | 2026-11-21 | Geiger Sign header above the upstream README. |
| `scripts/geiger/check-branding.mjs` | 2026-11-21 | Branding and licence-compliance check. |
| `apps/remix/app/utils/meta.ts` | 2026-11-21 | Page titles and meta tags name Geiger Sign; noindex. |
| `apps/remix/app/routes/_recipient+/_layout.tsx` | 2026-11-21 | Signer tab title "Sign Document - Geiger Sign". |
| `apps/remix/app/routes/_recipient+/sign.$token+/_index.tsx` | 2026-11-21 | Removed the "Check out Documenso" upsell for signed-out signers. |
| `apps/remix/app/components/general/document-signing/document-signing-page-view-v2.tsx` | 2026-11-21 | "Powered by" badge links to geiger.studio. |
| `packages/lib/constants/email.ts` | 2026-11-21 | Default sender name/address are Geiger Sign. |
| `packages/lib/constants/app.ts` | 2026-11-21 | Default PDF signing reason "Signed with Geiger Sign". |
