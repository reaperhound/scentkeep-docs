# Scentkeep website handoff

## Assignment

Build a public marketing website for **Scentkeep**, the desktop fragrance journal in this repository. The page's main job is to send visitors to the [latest GitHub release](https://github.com/reaperhound/scentkeep/releases/latest) to download the app. The audience is fragrance collectors who want to catalogue bottles, remember what they liked, and keep control of their records.

Use [OpenWhispr](https://openwhispr.com/) as **structural inspiration**: a plain product promise, an unmistakable download action, a real product visual in the first screen, feature demonstrations, practical trust information, and a repeated download close. Create Scentkeep's own design and copy. Do not copy OpenWhispr's wording, graphics, logo, claims, layout dimensions, or colour palette.

**Working assumption:** the website is a separate public site; this SvelteKit route is the desktop app. Do not replace `src/routes/+page.svelte` with a landing page. Decide the site's repository and hosting with the owner before publishing, but the design and implementation can proceed independently.

## Product truth

Source of truth: [README.md](../scentkeep/README.md), [release notes](../scentkeep/RELEASE_NOTES.md), the application UI in [src/routes/+page.svelte](../scentkeep/src/routes/+page.svelte), and [current design tokens](../scentkeep/src/routes/tokens.css). Check the latest release before publishing copy.

| Safe to describe from the README and app | Qualify or verify before promoting |
| --- | --- |
| Desktop fragrance collection with brand, collection, year, perfumer, description, ratings, and top, heart, and base notes | WebDAV backup and its sync flow are in draft release notes; confirm they are in the linked release |
| Collection, wishlist, and empties shelves; search and browse | Accord visualization appears in current code; confirm its release status and capture it before making it a headline feature |
| Local collection storage; local CSV backup folder; fragrance and note CSV import/export | Do not claim end to end encryption, cloud sync, mobile support, or automatic identification |
| Optional Parfumo connection for note search; manual note entry still works | Parfumo connection can be blocked by Cloudflare verification; do not promise that it always works |
| Windows, macOS, and Linux downloads listed in the README | Windows and macOS installers may show an unsigned app warning; keep install guidance accurate |

Do not invent counts, testimonials, ratings, perfume brand endorsements, security certifications, or prices. If the current release differs from the repo, describe the release users can actually download.

## Design direction

**Concept: a personal scent archive.** The page should feel like an editorial perfume catalogue translated into a useful desktop product: warm paper, dark ink, quiet rules, carefully cropped bottle photography if rights are clear, and large, legible app captures. The existing app uses Sentient for display type, Hanken Grotesk for body type, and warm paper with a restrained cool accent; use its tokens as a starting point so the site and app feel related. Build a focused visual system with all colours and fonts declared as tokens.

The memorable first-screen image is the **real Scentkeep collection**, with several non-personal sample fragrances visible. Keep UI text legible. Display the capture directly in the composition, without a fake browser or device frame. A small close crop of a fragrance detail or its note pyramid may overlap only if it remains clear and truthful. At 1280 × 800, the headline, one-sentence explanation, primary button, and meaningful portion of the product capture must all be visible.

Suggested hero copy, subject to product review:

> **Your scents, kept close.**  
> A private desktop journal for the fragrances you own and remember.

Primary action: **Download Scentkeep** → latest release. Secondary text link: **See the collection** → first demonstration section. Under the action, name Windows, macOS, and Linux in plain text; do not suggest a platform-specific installer can be selected until the site actually implements that selection.

## Page outline

Aim for one idea per screen, roughly 6–7 sections including the hero and footer. Keep copy brief and let real product captures explain the app.

1. **Navigation and hero.** Scentkeep wordmark or approved logo; links to Collection, Details, Backups, and GitHub; persistent Download action. Headline, sentence, actions, platform line, and large collection capture.
2. **The collection.** Show a real collection grid, then a close crop of search or shelf filtering. Message: keep owned fragrances, wishlists, and empties in one place. Use the application's actual names and controls.
3. **Every fragrance has a story.** Show a fragrance detail screen large enough to read the name, brand, note layers, and rating. Copy should focus on the useful record, not vague lifestyle claims.
4. **Notes, your way.** Show the top/heart/base note entry flow or the perfume note catalogue. Explain that users can maintain notes manually and optionally search notes through a connected Parfumo account. If the integration complicates the story, keep the page focused on manual note records.
5. **Keep the collection in your hands.** A restrained, text-led section for local storage, CSV export/import, and automatic local CSV backups. Explain the backup folder in honest language. Add WebDAV only after confirming it is in the linked release.
6. **Download and install.** Repeat the download action, list supported desktop systems and link to the release's actual artifacts or install instructions. State the unsigned installer note where needed. No pricing block unless a real paid offer exists.
7. **Footer.** GitHub repository, releases, README or docs, license if verified, and a concise product description. No fabricated company address or legal links.

## Asset and content work

- Capture the **running desktop app**, with realistic sample entries created for this purpose and no personal names, URLs, file paths, account data, or tokens. Required: collection grid for the hero (at least 1600 × 1000), fragrance detail (at least 1400 × 900), note editor or note catalogue (at least 1400 × 900), and optionally settings/backup status (at least 1400 × 900). Inspect every capture at final display size.
- Use bottle images only where rights and attribution allow. Sample names and artwork must read as sample content, never as a brand endorsement. The app capture is the primary visual; photography is optional and should serve a specific section.
- Use an approved Scentkeep logo if available. The repository has `static/app.svg` and packaged icons, but inspect them and their usage before treating one as the final public mark.
- Keep screenshots replaceable as named assets (`collection-hero`, `fragrance-detail`, `notes`, `backup`) with descriptive alt text. Do not draw a pretend app interface when the real app can be captured.

## Build expectations

- Build a responsive, accessible public page for desktop and mobile. Use semantic landmarks, meaningful heading order, keyboard-visible focus, sufficient contrast, and reduced-motion support. Content must remain visible without JavaScript.
- Declare colour and font tokens in one place. Avoid `transition: all`, animating layout dimensions, decorative status dots, emoji icons, invented social proof, and nested card grids. Keep the content container capped and centred.
- Set a useful page title, description, social preview image based on an approved app capture, and canonical URL once the domain is known. Do not ship placeholder metadata or a fictional domain.
- Download links must land on a real release or artifact. If there is no live release for a platform, say so rather than presenting a broken button.
- Preserve OpenWhispr only as a reference in project documentation; the public Scentkeep page must stand on its own.

## Acceptance check

The page passes when a new visitor can tell within the first screen what Scentkeep does, see the real app, and reach a valid download; the feature sections match the downloadable release; the page reads cleanly at phone and desktop widths; and every image, claim, and link has been checked. Run the Hallmark `sloplint.mjs --render` sweep if Hallmark is available in the build environment, resolve every `FAIL`, and record any intentional `REFLEX` waiver in the implementation.

## Open decisions for the owner

Before publication, confirm the website's destination repository/domain, approve the final logo and screenshots, and confirm whether the current GitHub release includes WebDAV backup and accord visualization. None of these choices prevents preparing the page and assets.
