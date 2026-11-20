# Scentkeep content audit

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
