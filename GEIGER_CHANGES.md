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
| `packages/email/template-components/template-admin-user-created.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/template-components/template-branding-logo.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/template-components/template-confirmation-email.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/template-components/template-document-image.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/template-components/template-document-self-signed.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/template-components/template-footer.tsx` | 2026-11-21 | Footer names Geiger Sign and links geiger.studio; removed Documenso's company address. |
| `packages/email/templates/account-disabled.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/admin-user-created.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/confirm-team-email.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/document-cancel.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/document-completed.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/document-invite.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/document-recipient-signed.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/document-reminder.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/forgot-password.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/organisation-account-link-confirmation.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/organisation-invite.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/organisation-join.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/organisation-leave.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/recipient-expired.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/recipient-removed-by-admin.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/reset-password.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/team-delete.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `packages/email/templates/team-email-removed.tsx` | 2026-11-21 | Product name, links and contact addresses read Geiger Sign. |
| `apps/remix/app/components/general/branding-logo.tsx` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/app/components/general/branding-logo-icon.tsx` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/android-chrome-192x192.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/android-chrome-512x512.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/apple-touch-icon.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/favicon.ico` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/favicon-16x16.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/favicon-32x32.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/opengraph-image.jpg` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `apps/remix/public/site.webmanifest` | 2026-11-21 | App name Geiger Sign. |
| `apps/remix/public/static/logo.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/android-chrome-192x192.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/android-chrome-512x512.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/apple-touch-icon.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/favicon.ico` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/favicon-16x16.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/favicon-32x32.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/logo.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/assets/static/logo.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `packages/email/static/logo.png` | 2026-11-21 | Geiger Sign logo, icons and share image. |
| `scripts/geiger/assets/icon.svg` | 2026-11-21 | Geiger Sign artwork source. |
| `scripts/geiger/assets/mark.svg` | 2026-11-21 | Geiger Sign artwork source. |
| `scripts/geiger/assets/og.svg` | 2026-11-21 | Geiger Sign artwork source. |
| `scripts/geiger/assets/wordmark.svg` | 2026-11-21 | Geiger Sign artwork source. |
| `scripts/geiger/make-assets.mjs` | 2026-11-21 | Generates the Geiger Sign icons and logos from the SVG sources. |
| `packages/ui/styles/geiger-theme.css` | 2026-11-21 | Geiger palette values for the theme variables. |
| `apps/remix/app/app.css` | 2026-11-21 | Imports the Geiger theme after the upstream theme. |
| `packages/tailwind-config/index.cjs` | 2026-11-21 | `documenso-*` colour scale mapped to Geiger neutrals. |
| `apps/remix/app/components/dialogs/team-member-create-dialog.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/components/embed/embed-document-completed.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/components/forms/signup.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/components/general/document-signing/document-signing-disclosure.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/components/general/settings-upsell/email-domains-upsell.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_authenticated+/t.$teamUrl+/documents.$id._index.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_authenticated+/t.$teamUrl+/documents.$id.legacy_editor.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_authenticated+/t.$teamUrl+/documents.$id.logs.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_authenticated+/t.$teamUrl+/templates.$id._index.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_authenticated+/t.$teamUrl+/templates.$id.legacy_editor.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_recipient+/report.$token.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_recipient+/sign.$token+/_index.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_recipient+/sign.$token+/complete.tsx` | 2026-11-21 | Readable accent text in dark mode. |
| `apps/remix/app/routes/_unauthenticated+/signin.tsx` | 2026-11-21 | Readable accent text in dark mode. |
