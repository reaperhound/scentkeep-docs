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

`assets/serendie-tokens.css` is a checked-in snapshot of system dimensions and Kurikawa colours retrieved using the MCP `get-design-tokens` tool on 2026-11-24. `tokens.css` maps these to the site's semantic tokens and defines the additional editorial typography and paper colours. Token CSS can be used independently of the React component library; this website keeps its native HTML architecture.

- `styles.css` and `base.css`: shared layout and homepage.
- `guide.css`: all eight documentation pages.
- `script.js`: mobile navigation, keyboard product tabs, guide search and prompt copying.
- `guides/`: installation, collection, fragrance records, Parfumo, CSV backups, WebDAV, sync and product images.

Search filters guide titles, summaries and topic keywords. It is not a full-text article index. The `/` key focuses search and Escape clears it. Product tabs support arrow keys, Home and End. With JavaScript disabled, every guide and product panel remains available. Typography uses Google Fonts with local fallbacks.

## Validation

Checked all nine pages in headless Chrome at desktop and phone widths, including 320px; local links and fragment targets; images; keyboard tabs and mobile menu; search and its empty state; prompt copying success and fallback; and content availability without JavaScript. Axe WCAG A/AA checks reported no violations on the nine pages at the tested mobile viewport. `node --check script.js`, the MCP check and `git diff --check` pass.

Existing screenshots show a development interface. See `CONTENT_AUDIT.md` and `WEBSITE_HANDOFF.md` for product facts and publication requirements. The redesign is prepared locally; hosting and publication remain separate.
