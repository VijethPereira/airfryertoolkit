# Air Fryer Toolkit — Design System
> Cookbook calm, tool-grade answers. Warm cream, serif headlines, one terracotta accent, and the result on a dark panel.

**Theme:** light, with a dark mode (`html.dark`)
**Direction:** "A · Editorial" (chosen 2026-11-10; mockup on the claude.ai canvas *Air Fryer Toolkit Redesign*, artboard `Main.dc.html`)
**Replaces:** the "Getanchor" style reference (4px cards, pill buttons, Archivo-only headlines)

The site should read like a well-set cookbook page that happens to contain a precise instrument. The canvas is a warm cream, never pure white. Headlines are a soft serif at regular weight; everything you read or tap is Archivo. Colour is rationed: almost every pixel is cream, beige or ink, and terracotta `#ee884f` appears only on the primary action, the result label and one full-width band per page. The converter's **result** is the darkest, strongest object on the screen: a dark ink panel with a large serif number. That's the product, so it gets the visual weight.

This file describes airfryertoolkit only. It borrows structure from editorial product sites, not anyone's brand: no other company's colours, fonts, logos or marks go into this site.

---

## 1. Non-negotiables (site rules that outrank everything below)

- **One chromatic accent: terracotta `#ee884f`.** Never blue or violet (those are the sister sites, quickmeasuretool and snapimagetools). No second accent.
- **No emoji anywhere.** Geometric inline SVG marks only.
- **Live output.** No Calculate button on any tool.
- **Ads in dead zones only**, after the result, never over or above a tool. Unfilled ad slots collapse (`ins.adsbygoogle[data-ad-status="unfilled"]`).
- **Contrast:** body text ≥ 4.5:1, large text (≥ 24px) ≥ 3:1, input borders and focus rings ≥ 3:1. Every pair in this file has been checked (Section 3.4).
- **Tap targets ≥ 44px**, tested at 375px and 412–430px.
- **No email gates, interstitials or popups.**
- Numbers never typed into copy (see `competitor-analysis.md` Section 6). Design never changes that.

---

## 2. Typography

### 2.1 Families

| Role | Family | Weights | Token |
|---|---|---|---|
| Display (h1–h3, the result number, card titles) | **Fraunces** (Google Fonts, variable, `opsz` 9–144) | 400, 500 | `--font-display` |
| Everything else: body, labels, nav, buttons, inputs, tables | **Archivo** (Google Fonts) | 400, 500, 600 | `--font-sans` |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap" rel="stylesheet">
```

Fallbacks: `Fraunces, Georgia, 'Times New Roman', serif` and `Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`. Keep `font-feature-settings: 'ss01' on` on Archivo.

### 2.2 Rules

- Display is **Fraunces 400**, never bold (500 only for the result number on small screens if 400 looks thin). Negative tracking on every display size.
- **One italic terracotta-dark phrase per page at most** (the hero), set in Fraunces italic `#9e4a1a`. Never italic elsewhere.
- Archivo 600 for labels, nav and buttons; 500 for input values; 400 for paragraphs. No 700+.
- Eyebrows and section labels: Archivo 600, 12px, uppercase, `0.12em` tracking, muted colour.
- Never set paragraphs in Fraunces. Never set inputs, tables or numbers inside tables in Fraunces (they need Archivo's tabular figures).
- All languages (en/es/pt/fr/de) use the same families; both cover Latin Extended.

### 2.3 Scale

| Token | Family | Size | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `--text-display` | Fraunces 400 | `clamp(42px, 6vw, 68px)` | 1.02 | -0.025em | Hero h1 |
| `--text-heading` | Fraunces 400 | 40px (32px < 768px) | 1.1 | -0.02em | Section h2 |
| `--text-heading-sm` | Fraunces 400 | 26px | 1.15 | -0.01em | Card titles, h3 |
| `--text-result` | Fraunces 400 | 56px (44px < 768px) | 1.0 | -0.02em | The converter's answer |
| `--text-lead` | Archivo 400 | 19px | 1.5 | 0 | Hero sub, intro paragraphs |
| `--text-subheading` | Archivo 600 | 18px | 1.4 | -0.01em | List-row titles, table heads |
| `--text-body` | Archivo 400 | 16px | 1.55 | 0 | Default body (was 15px) |
| `--text-small` | Archivo 400 | 15px | 1.5 | 0 | Card descriptions, footnotes |
| `--text-label` | Archivo 600 | 13px | 1.4 | 0 | Form labels |
| `--text-eyebrow` | Archivo 600 | 12px | 1.4 | 0.12em, uppercase | Eyebrows, section labels, "Air fry at" |

---

## 3. Colour

### 3.1 Light (default)

| Name | Value | Token | Role |
|---|---|---|---|
| Ink | `#1e1e1e` | `--color-ink` | Headings, primary text, dark panels, footer, flagship card |
| Body | `#3d3833` | `--color-body` | Lead paragraphs, card descriptions on beige |
| Muted | `#5c5650` | `--color-muted` | Secondary text, eyebrows, helper text, units (°F, min). **Replaces `#767676`, which failed (3.8:1).** |
| Canvas | `#f5efe9` | `--color-canvas` | Page background |
| Band | `#efe6dd` | `--color-band` | Thin full-width strips (Common conversions rail, table header rows) |
| Card | `#ebe2d9` | `--color-card` | Feature cards on canvas |
| Paper | `#ffffff` | `--color-paper` | The converter card, brand cards, inputs' container |
| Field | `#fbf8f5` | `--color-field` | Input fill inside a white card |
| Segment | `#f2ebe4` | `--color-segment` | Segmented-control track (Basket / Oven-style) |
| Hairline | `#e3d7cd` | `--color-hairline` | Dividers, card borders, header rule (decorative, not a control boundary) |
| Rule | `#d9ccc0` | `--color-rule` | List-row dividers, secondary button outline |
| Input border | `#8f8173` | `--color-input-border` | Text inputs and selects (3.8:1 on white, meets 1.4.11) |
| Terracotta | `#ee884f` | `--color-accent` | Primary button fill, "Air fry at" label on dark, the frozen band, focus ring |
| Terracotta hover | `#e57d42` | `--color-accent-hover` | Primary button hover |
| Terracotta text | `#9e4a1a` | `--color-accent-text` | Text links and the hero italic phrase on light surfaces (bright terracotta is too light for text) |
| Panel sub | `#c9bfb6` | `--color-on-dark-muted` | Secondary text on ink panels and the footer |
| On dark | `#f5efe9` | `--color-on-dark` | Primary text on ink |

### 3.2 Dark (`html.dark`)

| Token | Value | Note |
|---|---|---|
| `--color-canvas` | `#1b1614` | unchanged from today |
| `--color-band` | `#211b18` | |
| `--color-card` | `#252120` | |
| `--color-paper` | `#252120` | converter card |
| `--color-field` | `#1f1a17` | |
| `--color-segment` | `#2e2a27` | |
| `--color-ink` (text) | `#f0e9e5` | |
| `--color-body` | `#ddd4cd` | |
| `--color-muted` | `#a89f99` | 6.9:1 on canvas (was `#9c9390`) |
| `--color-hairline` | `#373230` | |
| `--color-rule` | `#3f3935` | |
| `--color-input-border` | `#7a6d64` | 3.2:1 on card |
| `--color-accent` | `#ee884f` | |
| `--color-accent-hover` | `#f49960` | |
| `--color-accent-text` | `#f0a06f` | links on dark, 8.5:1 |
| Result panel | `#2e2723` | in dark mode the panel is one step *lighter* than the page so it still reads as the object |
| Footer | `#131110` | |

### 3.3 Where terracotta is allowed (and nowhere else)

1. Primary button fill (text on it is **ink**, never white: white is 2.5:1).
2. The "Air fry at" eyebrow on the dark result panel.
3. One full-width **callout band** per page (on the homepage: Frozen food mode).
4. The logo mark.
5. Focus rings (`0 0 0 3px rgba(238,136,79,0.45)` plus a 1px ink outline on light).
6. The "Flagship" eyebrow on the dark flagship card.

Links use `--color-accent-text` (`#9e4a1a`), not bright terracotta.

### 3.4 Checked contrast pairs

| Pair | Ratio |
|---|---|
| Ink on canvas | 14.6 |
| Body on canvas | 10.2 |
| Muted on canvas / band / card | 6.3 / 5.9 / 5.7 |
| Link `#9e4a1a` on canvas / white | 5.3 / 6.1 |
| Ink on terracotta (buttons, band) | 6.6 |
| Terracotta on ink (result label) | 6.6 |
| Panel sub on ink | 9.2 |
| Input border on white / field | 3.8 / 3.6 |
| Dark: text / muted / link on canvas | 14.9 / 6.9 / 8.5 |

---

## 4. Shape, spacing, elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 7px | Segment buttons inside the track |
| `--radius-md` | 8px | Buttons, inputs, selects, language chip (**no pills any more**) |
| `--radius-lg` | 12px | Feature cards, brand cards, the result panel |
| `--radius-xl` | 16px | The converter card, the callout band |
| `--radius-full` | 9999px | Status dots only |

- Base unit 4px. Card padding 24–28px; converter card 28px; callout band 56px × 48px (32px × 24px under 768px).
- Section rhythm: **88px** between major sections (56px under 768px). Within a section, 28px between heading row and content.
- Container: `--site-max-width: 1200px` content width with 24px gutters (the header and footer may stay 1280px).
- Elevation is **colour-block first**: cream → beige → white → ink. Shadows only on the converter card: `0 1px 2px rgba(30,30,30,0.04)`. No glows, no gradients (the old peach gradient is retired).

---

## 5. Components

### Header
Canvas background, 1px hairline bottom border, not sticky. Logo mark (28px) + "airfryertoolkit" in Archivo 600 17px. Nav links Archivo 500 15px ink; the current page underlined 2px terracotta-text offset 6px. Language chip: 1px rule border, 8px radius, muted text. Collapses at 900px (existing behaviour).

### Buttons
- **Primary:** terracotta fill, ink text, Archivo 600 15px, 8px radius, 13px × 22px, min-height 44px. Hover `--color-accent-hover`. One per view.
- **Secondary:** transparent, ink text, 1px `#cdbfb2` border, same size.
- **Dark:** ink fill, on-dark text. Used inside the terracotta band ("Go") and where a second strong action sits next to a primary.
- **Text link:** `--color-accent-text`, underline on hover.

### Converter card (every tool page and the homepage hero)
White paper, 1px hairline, 16px radius, 28px padding, 18px gap.
- **Inputs:** label above (Archivo 600 13px, body colour), field 48px tall, `--color-field` fill, 1px `--color-input-border`, 8px radius; value Archivo 500 20px; unit suffix (°F, min) muted 15px inside the field on the right.
- **Segmented control** (Basket / Oven-style, °F / °C): `--color-segment` track, 4px padding, 10px radius; active segment white, Archivo 600, 1px shadow `0 1px 2px rgba(30,30,30,0.08)`; inactive transparent, muted, Archivo 500. Real `<button aria-pressed>`.
- **Result panel** (`<output>`): ink fill, 12px radius, 22px × 24px padding. Eyebrow "Air fry at" in terracotta. The answer in Fraunces 56px on-dark, time in Archivo 600 22px beside it, then one line of panel-sub text (°C · gas mark · shake/flip). It updates live; it is the only dark object inside a light card.
- Clamp warnings (model ceiling) sit under the panel as a beige note with a 6px terracotta dot, never as a red alert.

### Common-conversions rail
Full-width band strip with hairline top and bottom. Eyebrow left, then inline links: muted oven value → ink 600 air-fryer value. Wraps on mobile.

### Feature cards (tool grid)
`--color-card` beige, 12px radius, 28px padding, min-height 200px, no border. Title Fraunces 24–26px, description Archivo 15px body colour. Grid `repeat(auto-fit, minmax(240px, 1fr))`, 16px gap.
- **Flagship card:** ink fill, on-dark text, terracotta "Flagship" eyebrow. Exactly one per grid.

### List rows (secondary links: reverse tools, related links)
No card. 1px rule top border on the group, 1px rule bottom per row, 24px vertical padding. Title Archivo 600 18px ink, description 15px muted. Use these where cards would make the page busy.

### Callout band
Full-width-in-container terracotta block, 16px radius, 56px × 48px padding, ink text. Fraunces heading 32–44px, Archivo 18px paragraph, and a form or dark button on the right. **One per page.** On tool pages it holds the next logical step (e.g. "Frozen? Use frozen mode").

### Brand cards
White paper, 1px hairline, 12px radius, 24px padding. Brand name Archivo 600 20px, spec line muted.

### Tables (chart, per-food tables, model max-temp)
Archivo only. Header row `--color-band`, Archivo 600 13px uppercase-free. Rows 1px hairline dividers, 12px × 16px cells, numbers right-aligned with `font-variant-numeric: tabular-nums`. Wide tables scroll inside an `overflow-x: auto` box. The clamped-row marker is a terracotta dot plus text, never colour alone.

### FAQ (`Faq.astro`, `<details>`)
1px rule dividers, question Archivo 600 18px, marker `+` drawn in CSS in muted colour, rotating to `×` when open (terracotta only on the open marker). Answer Archivo 16px body colour, 12px top gap. Prints expanded.

### Breadcrumbs
Archivo 13px muted, `›` separators, current page ink.

### Footer
Ink background (`#131110` in dark mode), panel-sub text, 56px padding. Logo + one line of positioning ("Free oven to air fryer conversions. No account, no email, no popups."), then link row in on-dark. Sister-site links stay plain text, no colour treatment.

### Icons and marks
Inline stroke SVG, 1.75px stroke, ink or muted, `aria-hidden="true"` when decorative. The logo mark stays as is (terracotta square, ink arrow).

---

## 6. Layout patterns

- **Homepage:** header → hero (6/6: copy left, converter card right; stacks under 900px, copy first) → common-conversions rail → Convert grid (flagship dark + 3 beige) → Reverse & reference list rows → terracotta Frozen band → brand cards → guide copy → FAQ → dark footer.
- **Tool page:** breadcrumb → Fraunces h1 + one-line direct answer → converter card full width (max 760px) → per-food table → copy column (max 68ch) → FAQ → related list rows → one callout band → footer.
- **Preset / temperature / °C landing pages:** same as tool page; the direct-answer line sits directly under the h1 in Archivo 19px with the key numbers in ink 600.
- Body copy column max **68ch**. Never centre paragraphs.
- Surface sequence down a page alternates: canvas → band strip → canvas with beige cards → terracotta band → canvas → ink footer. Never two terracotta or two ink bands in a row.

---

## 7. Pinterest pins (1000 × 1500, `Pinterest Pin.dc.html` template)

Same system: canvas `#f5efe9`, Fraunces 400 headline (~88px, -0.03em), Archivo for everything else, white converter card with the **dark result panel**, terracotta only on the CTA chip and the result eyebrow. Ink footer strip with the domain. One pin per new page; numbers from the engine.

---

## 8. Do / Don't

**Do**
- Make the result panel the strongest object on every tool page.
- Use Fraunces 400 with negative tracking for every display line; Archivo for everything you read or tap.
- Ration terracotta to the six places in 3.3.
- Use beige cards on canvas and white only for the converter and brand cards.
- Keep 88px between sections and 68ch for copy.

**Don't**
- Don't bring back pill buttons or 4px cards.
- Don't bold Fraunces or set paragraphs, inputs or table numbers in it.
- Don't put white text on terracotta.
- Don't use `#767676`; use `#5c5650`.
- Don't add gradients, glows, photos or illustrations of food.
- Don't copy any other company's colours, typefaces or marks into the site.

---

## 9. Tokens (drop-in for `src/styles/global.css`)

Keep the existing `--site-*` names so components change as little as possible; new tokens are added alongside.

```css
@theme {
  --color-ink: #1e1e1e;
  --color-body: #3d3833;
  --color-muted: #5c5650;
  --color-canvas: #f5efe9;
  --color-band: #efe6dd;
  --color-card: #ebe2d9;
  --color-paper: #ffffff;
  --color-field: #fbf8f5;
  --color-segment: #f2ebe4;
  --color-hairline: #e3d7cd;
  --color-rule: #d9ccc0;
  --color-input-border: #8f8173;
  --color-terracotta: #ee884f;
  --color-terracotta-hover: #e57d42;
  --color-terracotta-text: #9e4a1a;

  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-archivo: 'Archivo', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  --radius-sm: 7px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

:root {
  --site-max-width: 1280px;
  --site-content-width: 1200px;
  --site-bg: #f5efe9;
  --site-bg-deep: #efe6dd;
  --site-bg-card: #ffffff;
  --site-bg-feature: #ebe2d9;
  --site-bg-field: #fbf8f5;
  --site-bg-hover: #f2ebe4;
  --site-text: #1e1e1e;
  --site-text-body: #3d3833;
  --site-text-muted: #5c5650;
  --site-border: #e3d7cd;
  --site-rule: #d9ccc0;
  --site-input-border: #8f8173;
  --site-accent: #ee884f;
  --site-accent-hover: #e57d42;
  --site-accent-text: #9e4a1a;
  --site-panel: #1e1e1e;
  --site-on-panel: #f5efe9;
  --site-on-panel-muted: #c9bfb6;
  --site-footer: #1e1e1e;
  --site-nav-bg: #f5efe9;
  --site-section-gap: 88px;
}

html.dark {
  --site-bg: #1b1614;
  --site-bg-deep: #211b18;
  --site-bg-card: #252120;
  --site-bg-feature: #252120;
  --site-bg-field: #1f1a17;
  --site-bg-hover: #2e2a27;
  --site-text: #f0e9e5;
  --site-text-body: #ddd4cd;
  --site-text-muted: #a89f99;
  --site-border: #373230;
  --site-rule: #3f3935;
  --site-input-border: #7a6d64;
  --site-accent: #ee884f;
  --site-accent-hover: #f49960;
  --site-accent-text: #f0a06f;
  --site-panel: #2e2723;
  --site-on-panel: #f5efe9;
  --site-on-panel-muted: #c9bfb6;
  --site-footer: #131110;
  --site-nav-bg: #1b1614;
}

@media (max-width: 767px) {
  :root { --site-section-gap: 56px; }
}
```

---

## 10. Migration from the Getanchor reference

| Before | After |
|---|---|
| Archivo 600 headlines | Fraunces 400 headlines, Archivo for the rest |
| Body 15px | Body 16px, lead 19px |
| Pill buttons (4800px) | 8px radius buttons |
| 4px cards | 12px cards, 16px converter card and band |
| `#767676` secondary text | `#5c5650` (passes) |
| Canvas `#f0e9e5` / deep `#e3d7cd` | Canvas `#f5efe9`, band `#efe6dd`, beige cards `#ebe2d9` |
| Result shown on white | Result on an ink panel with a Fraunces number |
| Peach hero gradient | Retired; no gradients |
| Links ink, hover grey | Links `#9e4a1a`, underline on hover |

Order of work: tokens and fonts → header/footer → converter card + result panel (shared widget) → cards, list rows, band → tables and FAQ → every page type in all 5 locales → Pinterest pin template. Visual changes only: no copy, URL, engine or structured-data changes.
