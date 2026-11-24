# Scentkeep content audit

## Feature coverage review — 2026-11-24

Verified the sibling app checkout at commit `87f4a2ba667561380e2dd973d64cfb3556b7f02e` against the peeled `v0.2.9` tag: no differences. The GitHub releases API confirmed v0.2.9 as the latest published release on 2026-11-24. This supersedes the release-version references in the historical audit below.

Added coverage for:

- Parfumo fragrance search and URL import, preview/application/save steps, linked imagery, imported note metadata and source attribution (`src/lib/screens/EditorScreen.svelte`).
- Eleven named palettes, dark mode, system-default appearance and local preference persistence (`src/lib/screens/SettingsScreen.svelte`). Appearance is separate from CSV/WebDAV data. Also documented the local profile name and linked picture editor (`src/lib/screens/AppDialogs.svelte` and `src/routes/+page.svelte`).
- Note usage counts, shared rename/delete behavior, category editing, image management and note-library pagination (`src/lib/screens/NotesScreen.svelte` and `src/routes/+page.svelte`).
- Main accords estimated from note categories, up to seven results, relative normalization against the strongest accord, contributing-note tooltips and missing-category guidance (`src/lib/AccordBars.svelte` and `src-tauri/src/accords.rs`).
- Backup failure Retry and the pending-backup close warning (`src/routes/+page.svelte` and `src/lib/screens/AppDialogs.svelte`).
- Collection-name search, All/Owned filter semantics, 12-record pagination, card edit/delete actions, the three-step editor, bottle counts, prices and favourites (`src/lib/screens/CollectionScreen.svelte`, `EditorScreen.svelte`, `DetailsScreen.svelte`).

Confirmed that CSV still exports 21 fragrance columns and four note columns (`src-tauri/src/csv_io.rs`). Excel files are still rejected by the importer even though the picker lists workbook extensions (`src/routes/+page.svelte`). Existing CSV, WebDAV, sync and installation guidance remains relevant.

New guides are linked from the homepage search and every guide sidebar. Existing development screenshots are retained with their disclosure; no release-matched screenshot claims were added. Review used released source; it did not exercise live Parfumo login, provider-specific WebDAV, or all platform installers.

## Historical audit — 2026-11-18

Reviewed 2026-11-18 for the request labeled ASD-SET100. No definition of that label was found locally; this records a factual documentation audit, not certification against an unknown checklist.

## Evidence

The GitHub releases API reported [v0.2.4](https://github.com/reaperhound/scentkeep/releases/tag/v0.2.4) as the latest release, published 2026-11-17. Tagged source commit: `3052f8af528d02283e4740188309ff2791618e48`.

- [CSV implementation](https://github.com/reaperhound/scentkeep/blob/v0.2.4/src-tauri/src/csv_io.rs): 21 fragrance export columns and four note columns; legacy imports supported; ordinary import skips duplicates; WebDAV sync overwrites matching records and retains local-only records.
- [Backup implementation](https://github.com/reaperhound/scentkeep/blob/v0.2.4/src-tauri/src/backup.rs): background queue, retry, keyring credentials, HTTPS WebDAV and requirement for both remote CSV files.
- [Released UI](https://github.com/reaperhound/scentkeep/blob/v0.2.4/src/routes/+page.svelte): shelves, ratings, accords, note metadata, sync control on the collection page, and release-year validation in the form.
- [Record validation](https://github.com/reaperhound/scentkeep/blob/v0.2.4/src-tauri/src/lib.rs): name and brand required; release year must be 1800–2100.
- Release assets verified: Windows EXE/MSI, universal macOS DMG, x86_64 Arch/RPM and amd64 DEB/AppImage, plus updater metadata/signatures. Installer platform signing and updater signatures are separate concepts.

## Corrections

- Corrected the claim that release year is optional.
- Added CSV format details, legacy support, duplicate behavior, and instructions to restore both files into a fresh collection.
- Explained that backup files are refreshed copies rather than dated history.
- Documented remote-overwrites-local sync behavior, absent deletion propagation, rename duplication, and exporting existing data before sync.
- Removed the image prompt's dependency on an unavailable 9PM Rebel reference. Added a self-contained sizing rule, external editing context, and the Image URL workflow. The suggested image size is not an application requirement.
- Corrected stale release-status guidance in the handoff. WebDAV and accords are already in the release despite stale local README/release notes.
- Labeled development-interface captures so they do not promise an exact released layout.

## Remaining publication work

Replace or approve development screenshots against the downloadable app, confirm rights for sample imagery, and set canonical/social metadata after the public domain is chosen. This audit checked source and release assets; it did not exercise provider-specific WebDAV or Parfumo sign-in, install packages on each OS, or establish image rights. No source-app files were edited.
