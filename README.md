# Scentkeep website

A static product and documentation website for the Scentkeep desktop fragrance journal. Open `index.html` directly, or serve this folder with `python3 -m http.server 8000`. No build step or production JavaScript dependencies are required.

## Serendie MCP

This project configures `https://serendie.design/mcp` in:

- `.codex/config.toml` for Codex.
- `.mcp.json` for Claude Code project sessions.

Restart the coding-agent session after adding the configuration. Codex loads project configuration only in a trusted project; this checkout has been marked trusted in the local user configuration. On another machine, trust this project when opening it, then run `codex mcp get serendie-mcp --json` from this folder.

Run `python3 scripts/check-mcp.py` (Python 3.11+ and curl) to verify both project files, the protocol handshake, and the tool catalogue. No API key is required. The MCP is an authoring tool and is not called by the public website.

Official setup: https://serendie.design/en/ai/mcp-server/

## Design system

The website follows the [Sakuga VFX gallery](https://sakuga-vfx.vercel.app/gallery/) at the owner's request: white/lilac surfaces, violet ink, rounded outlined controls, lavender offset shadows, and spring squash/overshoot with drawn effects. `tokens.css` contains the semantic tokens and self-hosted Nunito font. `DESIGN.md` and `.impeccable/design.json` document the shipped system. The earlier Serendie snapshot remains an authoring reference; it is not imported by the redesigned website.

- `styles.css` and `base.css`: shared navigation, components and homepage.
- `guide.css`: all eleven documentation pages.
- `script.js`: mobile navigation, keyboard screenshot tabs, guide search and prompt copying.
- `motion.js`: native control animation and reduced-motion handling.
- `assets/vendor/sakuga/`: local MIT-licensed Sakuga effects engine, reused from the app; no external runtime requests.
- `assets/fonts/`: self-hosted Nunito Latin subset and OFL license.
- `guides/`: installation, collection, fragrance records, Parfumo, notes, appearance, backups, WebDAV, sync and product images.

Search filters guide titles, summaries and topic keywords. `/` focuses search; Escape clears it. Screenshot tabs support arrow keys, Home and End. With JavaScript disabled, all guide cards and screenshot panels remain available. Reduced-motion mode disables the animated effects. Native links, buttons, inputs and disclosure elements retain their keyboard behavior.

## App screenshots

The four active captures (`collection-hero.png`, `fragrance-detail.png`, `notes.png`, `backup.png`) were refreshed on 2026-11-25 from the running sibling Scentkeep app frontend. The session uses isolated sample responses at the IPC boundary: existing fragrance metadata/artwork, example ratings and accords, no personal profile, prices, journal content or integration credentials. The UI itself is the actual Svelte application, not a recreated mockup. Website captions identify sample records. Each raster embeds its origin. The older `*-1.png` images are unused legacy captures.

## Validation

Checked all twelve pages in headless Chrome at desktop and phone widths, including 320px; local links and fragment targets; images; keyboard tabs and mobile menu; search and its empty state; prompt copying success and fallback; and content availability without JavaScript. Axe WCAG A/AA checks reported no violations on the twelve pages at the tested mobile viewport. `node --check script.js`, the MCP check and `git diff --check` pass.

The redesign is prepared locally. Hosting and publication remain separate. Product facts and publication notes are in `CONTENT_AUDIT.md` and `WEBSITE_HANDOFF.md`.
