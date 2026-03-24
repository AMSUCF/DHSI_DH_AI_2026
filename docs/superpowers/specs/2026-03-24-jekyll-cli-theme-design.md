# DHSI 2026 Jekyll CLI Theme — Design Spec

## Overview

A custom Jekyll theme for the DHSI 2026 workshop site ("DH Programming Pedagogy in the Age of AI") deployed on GitHub Pages. The theme features a command-line-inspired interface with light/dark modes, a Claude Terminal color palette, an ASCII block invader mascot, and prompt-style collapsible sections. The full course packet markdown is rendered as a single-page site.

## Decisions

| Decision | Choice |
|----------|--------|
| Site structure | Single page with collapsible/accordion sections |
| Technology | Jekyll, GitHub Pages native build (no local testing) |
| Content scope | Full course packet |
| Color palette | Claude Terminal — amber prompts, blue output, purple accents |
| Mascot style | ASCII block invader using Unicode block characters (▄▀█) |
| Accordion style | Prompt-style (`$ day-1 --am`) with terminal output expansion |
| Theme approach | Custom from scratch — no gem theme, no remote_theme |

## File Structure

```
DHSI_DH_AI_2026/
├── _config.yml
├── _layouts/
│   └── default.html
├── _includes/
│   ├── mascot.html
│   ├── header.html
│   └── footer.html
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _accordion.scss
│   └── _theme.scss
├── assets/
│   ├── css/
│   │   └── main.scss
│   └── js/
│       └── main.js
├── index.md
└── .gitignore
```

## Color System

### Dark Mode (default)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#191724` | Page background |
| `--text` | `#c3dafe` | Body text |
| `--prompt` | `#d4a574` | Command prompts, amber accent |
| `--output` | `#7ec8e3` | Headings, links, blue accent |
| `--accent` | `#c8b6ff` | Highlights, purple accent |
| `--muted` | `rgba(195, 218, 254, 0.15)` | Borders, dividers |
| `--code-bg` | `#1e1b2e` | Code block background |

### Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#f8f9fa` | Page background |
| `--text` | `#2d3748` | Body text |
| `--prompt` | `#b8734a` | Command prompts, amber accent |
| `--output` | `#2b6cb0` | Headings, links, blue accent |
| `--accent` | `#6b46c1` | Highlights, purple accent |
| `--muted` | `rgba(45, 55, 72, 0.15)` | Borders, dividers |
| `--code-bg` | `#edf2f7` | Code block background |

### Toggle Behavior

- A `[light]` / `[dark]` text button in the header styled like a CLI flag
- Persists to `localStorage`
- Implemented via `data-theme` attribute on `<html>` with CSS custom properties
- Precedence: `localStorage` → `prefers-color-scheme` → dark fallback

## Accordion Sections

Built on native `<details>`/`<summary>` for accessibility and no-JS fallback.

### Collapsed

```
$ course --description ·······························  [+]
```

### Expanded

```
$ course --description                                  [-]
│
│  This workshop guides humanities scholars through
│  the emerging landscape of agentic coding...
│
```

### Section Mapping

| Prompt | Content |
|--------|---------|
| `$ course --description` | Course Description |
| `$ course --prerequisites` | Prerequisites |
| `$ course --readings` | Pre-Workshop Readings |
| `$ day-1 --am` | Session 1: Positioning and Prototyping with Artifacts |
| `$ day-1 --pm` | Session 2: Claude Code Web |
| `$ day-2 --am` | Session 3: CLI Setup and First Principles |
| `$ day-2 --pm` | Session 4: Red/Green TDD and Agentic Patterns |
| `$ day-3 --am` | Session 5: The Model Context Protocol |
| `$ day-4 --am` | Session 6: The Superpowers Workflow |
| `$ day-4 --pm` | Session 7: Building and Sharing Skills |
| `$ day-5 --am` | Session 8: Building Your Tool |
| `$ day-5 --pm` | Session 9: Presentations and Futures |
| `$ course --resources` | Resources |

### Styling

- `<summary>` styled as monospace prompt line in amber, with dotted leader fill and `[+]`/`[-]` indicator
- Expanded content has a left border pipe (`│`) in muted color to mimic terminal output
- Smooth height animation via JS in `main.js` (native `<details>` doesn't animate with CSS alone; no-JS fallback still opens/closes correctly)
- Readings render as indented lists with blue link styling
- Exercises use `>` blockquote style (like a terminal comment)

## Header

```
  ▄██████▄
██◉██████◉██    DHSI 2026
████████████    DH Programming Pedagogy in the Age of AI
██▄▀▀▀▀▄███    ─────────────────────────────────────────
▀██████████▀    Anastasia Salter & John T. Murray
  ▀▄▄▄▄▄▀      June 8–12, Montréal
 ▄▀ ▄▄▄▄ ▀▄
 ▀  ▀  ▀  ▀                              [dark] │ [light]
```

- Mascot left, title/metadata right, theme toggle top-right
- Mobile: mascot stacks above title, scaled to ~60%
- Mascot eyes (`◉`) in blue accent; body in purple accent
- Thin horizontal rule below in muted border color

## Footer

```
──────────────────────────────────────────
$ echo $CREDITS
  Anastasia Salter & John T. Murray
  DHSI 2026 · Montréal
  Built with Jekyll · Deployed on GitHub Pages
```

- Terminal output styled
- Links:
  - "Anastasia Salter" → https://anastasiasalter.net
  - "John T. Murray" → https://jtm.io/
  - Repo link → https://github.com/amsucf/DHSI_DH_AI_2026
  - "distantcoding.ai" → https://distantcoding.ai

## Jekyll Configuration

```yaml
title: "DHSI 2026: DH Programming Pedagogy in the Age of AI"
description: "Course packet for DH Programming Pedagogy in the Age of AI"
baseurl: "/DHSI_DH_AI_2026"
markdown: kramdown
sass:
  style: compressed
exclude:
  - Gemfile
  - Gemfile.lock
  - README.md
  - .superpowers
  - docs/
  - dhsi-2026-course-packet.md
```

- No plugins beyond GitHub Pages defaults
- No gem theme, no `remote_theme`
- `url`/`baseurl` configured for GitHub Pages deployment

## Content Approach

- Source: `dhsi-2026-course-packet.md` (repo root) → restructured as `index.md`
- `index.md` uses `default` layout via front matter
- Markdown content restructured with `<details>`/`<summary>` blocks
- Standard markdown (lists, links, blockquotes) renders inside details via kramdown
- All original links preserved

## Responsive Design

- Max content width: ~48rem
- Mobile breakpoint: 768px
- Mobile: mascot scales down, stacks above title
- Accordion prompt leaders truncate on small screens
- Font size steps down slightly on mobile, stays monospace throughout

## Favicon

- 32x32 inline SVG of the block invader in purple/blue on transparent background
- Embedded in the layout `<head>` — no external file
