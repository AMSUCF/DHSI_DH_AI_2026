# Jekyll CLI Theme Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a custom Jekyll theme with a command-line aesthetic, Claude Terminal palette, ASCII block invader mascot, light/dark modes, and prompt-style accordion sections — deployable on GitHub Pages.

**Architecture:** A minimal custom Jekyll site with one layout, three includes (mascot, header, footer), five SCSS partials (variables, base, layout, accordion, theme), one JS file (theme toggle + accordion animation), and a single `index.md` restructured from the course packet markdown with `<details>`/`<summary>` blocks.

**Tech Stack:** Jekyll (GitHub Pages native), SCSS, vanilla JavaScript, kramdown Markdown

---

## File Map

| File | Responsibility |
|------|---------------|
| `_config.yml` | Jekyll configuration, site metadata, build settings |
| `.gitignore` | Exclude `_site`, `.jekyll-cache`, `.superpowers` |
| `_sass/_variables.scss` | CSS custom properties for light/dark Claude Terminal palette |
| `_sass/_base.scss` | Monospace typography, reset, links, code blocks, blockquotes |
| `_sass/_layout.scss` | Header flex layout, footer, content container, responsive breakpoints |
| `_sass/_accordion.scss` | Prompt-style `<details>`/`<summary>`, leader dots, pipe border, indicators |
| `_sass/_theme.scss` | `[data-theme]` selector switching, `prefers-color-scheme` media query |
| `assets/css/main.scss` | Jekyll SCSS entry point — front matter + `@import` all partials |
| `assets/js/main.js` | Theme toggle (localStorage + prefers-color-scheme), accordion animation |
| `_includes/mascot.html` | ASCII block invader `<pre>` with colored eyes/body |
| `_includes/header.html` | Mascot + title/metadata + theme toggle |
| `_includes/footer.html` | Terminal-styled credits with links |
| `_layouts/default.html` | HTML shell: head (meta, favicon, CSS), body (header, content, footer, JS) |
| `index.md` | Course packet restructured with front matter + `<details>`/`<summary>` sections |

---

## Chunk 1: Foundation (Config, SCSS, JS)

### Task 1: Jekyll Configuration and .gitignore

**Files:**
- Create: `_config.yml`
- Create: `.gitignore`

- [ ] **Step 1: Create `_config.yml`**

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
  - dhsi-2026-course-packet.md  # Source file stays in repo but excluded from build
```

- [ ] **Step 2: Create `.gitignore`**

```
_site/
.jekyll-cache/
.jekyll-metadata
.superpowers/
.sass-cache/
```

- [ ] **Step 3: Commit**

```bash
git add _config.yml .gitignore
git commit -m "feat: add Jekyll config and gitignore"
```

---

### Task 2: SCSS Variables (Color System)

**Files:**
- Create: `_sass/_variables.scss`

- [ ] **Step 1: Create `_sass/_variables.scss`**

Define CSS custom properties for both themes on `:root` (dark default) and `[data-theme="light"]`.

```scss
:root {
  --bg: #191724;
  --text: #c3dafe;
  --prompt: #d4a574;
  --output: #7ec8e3;
  --accent: #c8b6ff;
  --muted: rgba(195, 218, 254, 0.15);
  --code-bg: #1e1b2e;
  --font-mono: 'Courier New', Courier, monospace;
}

[data-theme="light"] {
  --bg: #f8f9fa;
  --text: #2d3748;
  --prompt: #b8734a;
  --output: #2b6cb0;
  --accent: #6b46c1;
  --muted: rgba(45, 55, 72, 0.15);
  --code-bg: #edf2f7;
}
```

- [ ] **Step 2: Commit**

```bash
git add _sass/_variables.scss
git commit -m "feat: add SCSS variables with Claude Terminal color palette"
```

---

### Task 3: Theme Switching SCSS

**Files:**
- Create: `_sass/_theme.scss`

- [ ] **Step 1: Create `_sass/_theme.scss`**

Handle `prefers-color-scheme` media query for first-visit defaults. When no `data-theme` is set and OS prefers light, apply light tokens.

```scss
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --bg: #f8f9fa;
    --text: #2d3748;
    --prompt: #b8734a;
    --output: #2b6cb0;
    --accent: #6b46c1;
    --muted: rgba(45, 55, 72, 0.15);
    --code-bg: #edf2f7;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add _sass/_theme.scss
git commit -m "feat: add prefers-color-scheme media query for theme"
```

---

### Task 4: Base SCSS (Typography and Reset)

**Files:**
- Create: `_sass/_base.scss`

- [ ] **Step 1: Create `_sass/_base.scss`**

Monospace typography everywhere, link styles in output blue, code blocks, blockquotes styled as terminal comments, horizontal rules.

```scss
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

body {
  font-family: var(--font-mono);
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a {
  color: var(--output);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

code {
  background-color: var(--code-bg);
  padding: 0.15em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

pre {
  background-color: var(--code-bg);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  line-height: 1.4;

  code {
    background: none;
    padding: 0;
  }
}

blockquote {
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
  color: var(--accent);
  font-style: italic;
  margin: 1rem 0;
}

hr {
  border: none;
  border-top: 1px solid var(--muted);
  margin: 2rem 0;
}

h1, h2, h3, h4 {
  color: var(--output);
  margin: 1.5rem 0 0.75rem;
}

ul, ol {
  padding-left: 1.5rem;
  margin: 0.75rem 0;
}

li {
  margin: 0.35rem 0;
}

strong {
  color: var(--prompt);
}

p {
  margin: 0.75rem 0;
}
```

- [ ] **Step 2: Commit**

```bash
git add _sass/_base.scss
git commit -m "feat: add base SCSS with monospace typography and reset"
```

---

### Task 5: Layout SCSS (Header, Footer, Content Container)

**Files:**
- Create: `_sass/_layout.scss`

- [ ] **Step 1: Create `_sass/_layout.scss`**

Content container with max-width, header flex layout (mascot left, title right), footer styling, mobile stacking.

```scss
.site-container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.site-header {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.mascot {
  flex-shrink: 0;
  line-height: 1.15;
  font-size: 0.85rem;

  @media (max-width: 768px) {
    font-size: 0.55rem;
  }
}

.site-title-block {
  flex: 1;

  .site-title {
    color: var(--output);
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
  }

  .site-subtitle {
    color: var(--text);
    font-size: 0.9rem;
    margin: 0;
  }

  .site-rule {
    color: var(--muted);
    margin: 0.25rem 0;
    opacity: 0.6;
  }

  .site-meta {
    color: var(--accent);
    font-size: 0.85rem;
    margin: 0;
  }
}

.theme-toggle {
  position: absolute;
  top: 0;
  right: 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: none;
  border: none;
  color: var(--prompt);
  cursor: pointer;
  padding: 0.25rem 0.5rem;

  &:hover {
    color: var(--output);
  }

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 1rem;
  }
}

.site-content {
  margin: 2rem 0;
}

.site-footer {
  border-top: 1px solid var(--muted);
  padding-top: 1.5rem;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: var(--text);
  opacity: 0.8;

  .footer-prompt {
    color: var(--prompt);
    margin-bottom: 0.5rem;
  }

  .footer-content {
    padding-left: 1rem;

    a {
      color: var(--output);
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add _sass/_layout.scss
git commit -m "feat: add layout SCSS with responsive header, footer, container"
```

---

### Task 6: Accordion SCSS

**Files:**
- Create: `_sass/_accordion.scss`

- [ ] **Step 1: Create `_sass/_accordion.scss`**

Style `<details>`/`<summary>` as prompt-style sections with leader dots and `[+]`/`[-]` indicators. Expanded content gets a left pipe border.

```scss
.accordion-section {
  margin: 0.5rem 0;

  summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: var(--font-mono);
    color: var(--prompt);
    padding: 0.5rem 0;
    list-style: none;
    user-select: none;

    &::-webkit-details-marker {
      display: none;
    }

    .prompt-text {
      white-space: nowrap;
    }

    .leader {
      flex: 1;
      overflow: hidden;
      margin: 0 0.5rem;
      color: var(--muted);

      &::after {
        content: ' · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·';
      }
    }

    .indicator {
      white-space: nowrap;
      color: var(--text);
      opacity: 0.5;
    }
  }

  &[open] > summary .indicator {
    .plus { display: none; }
    .minus { display: inline; }
  }

  &:not([open]) > summary .indicator {
    .plus { display: inline; }
    .minus { display: none; }
  }

  .accordion-content {
    border-left: 2px solid var(--muted);
    margin-left: 0.75rem;
    padding: 0.75rem 0 0.75rem 1.25rem;
    overflow: hidden;

    h4 {
      color: var(--output);
      font-size: 0.95rem;
      margin: 1rem 0 0.5rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .session-title {
    display: block;
    color: var(--output);
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--muted);
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add _sass/_accordion.scss
git commit -m "feat: add accordion SCSS with prompt-style details/summary"
```

---

### Task 7: SCSS Entry Point

**Files:**
- Create: `assets/css/main.scss`

- [ ] **Step 1: Create `assets/css/main.scss`**

Jekyll requires front matter dashes for SCSS processing. Import all partials.

```scss
---
---

@import "variables";
@import "theme";
@import "base";
@import "layout";
@import "accordion";
```

- [ ] **Step 2: Commit**

```bash
git add assets/css/main.scss
git commit -m "feat: add SCSS entry point importing all partials"
```

---

### Task 8: JavaScript (Theme Toggle + Accordion Animation)

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: Create `assets/js/main.js`**

Theme toggle: read `localStorage`, fall back to `prefers-color-scheme`, fall back to dark. Toggle button switches `data-theme` on `<html>` and updates `localStorage`.

Accordion animation: listen for `toggle` events on `<details>` elements and animate height with `requestAnimationFrame`.

```javascript
// Theme toggle
(function() {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  function getPreferred() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '[light]' : '[dark]';
    }
  }

  applyTheme(getPreferred());

  if (toggle) {
    toggle.addEventListener('click', function() {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();

// Accordion animation
// Handles both open and close with smooth transitions.
// No-JS fallback: <details> still opens/closes natively without animation.
(function() {
  document.querySelectorAll('.accordion-section').forEach(function(details) {
    var content = details.querySelector('.accordion-content');
    if (!content) return;
    var isAnimating = false;

    // Clean up fixed maxHeight after open animation completes
    content.addEventListener('transitionend', function(e) {
      if (e.propertyName === 'max-height' && details.open) {
        content.style.maxHeight = 'none';
        isAnimating = false;
      }
    });

    // Intercept click on summary to animate close
    details.querySelector('summary').addEventListener('click', function(e) {
      if (isAnimating) return;

      if (details.open) {
        // Animate close: set current height explicitly, then collapse to 0
        e.preventDefault();
        isAnimating = true;
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.transition = 'none';
        requestAnimationFrame(function() {
          content.style.transition = 'max-height 0.3s ease, opacity 0.2s ease';
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
        });
        setTimeout(function() {
          details.open = false;
          isAnimating = false;
        }, 300);
      }
    });

    // Animate open
    details.addEventListener('toggle', function() {
      if (details.open && !isAnimating) {
        isAnimating = true;
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        content.style.transition = 'none';
        requestAnimationFrame(function() {
          content.style.transition = 'max-height 0.3s ease, opacity 0.2s ease';
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
        });
      }
    });
  });
})();
```

- [ ] **Step 2: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: add JS for theme toggle and accordion animation"
```

---

## Chunk 2: Templates (Includes + Layout)

### Task 9: Mascot Include

**Files:**
- Create: `_includes/mascot.html`

- [ ] **Step 1: Create `_includes/mascot.html`**

ASCII block invader with colored eyes (blue) and body (purple) using `<span>` elements with inline CSS custom property references.

```html
<pre class="mascot" aria-hidden="true"><span style="color:var(--accent)">  ▄██████▄
██</span><span style="color:var(--output)">◉</span><span style="color:var(--accent)">██████</span><span style="color:var(--output)">◉</span><span style="color:var(--accent)">██
████████████
██▄▀▀▀▀▄███
▀██████████▀
  ▀▄▄▄▄▄▀
 ▄▀ ▄▄▄▄ ▀▄
 ▀  ▀  ▀  ▀</span></pre>
```

- [ ] **Step 2: Commit**

```bash
git add _includes/mascot.html
git commit -m "feat: add ASCII block invader mascot include"
```

---

### Task 10: Header Include

**Files:**
- Create: `_includes/header.html`

- [ ] **Step 1: Create `_includes/header.html`**

Flex layout: mascot left, title block right, theme toggle top-right.

```html
<header class="site-header">
  {% include mascot.html %}
  <div class="site-title-block">
    <p class="site-title">DHSI 2026</p>
    <p class="site-subtitle">DH Programming Pedagogy in the Age of AI</p>
    <p class="site-rule">─────────────────────────────────────────</p>
    <p class="site-meta">Anastasia Salter &amp; John T. Murray</p>
    <p class="site-meta">June 8–12, Montréal</p>
  </div>
  <button class="theme-toggle" id="theme-toggle" aria-label="Toggle light/dark theme">[light]</button>
</header>
```

- [ ] **Step 2: Commit**

```bash
git add _includes/header.html
git commit -m "feat: add header include with mascot and theme toggle"
```

---

### Task 11: Footer Include

**Files:**
- Create: `_includes/footer.html`

- [ ] **Step 1: Create `_includes/footer.html`**

Terminal-styled credits with links to instructor sites, repo, and distantcoding.ai.

```html
<footer class="site-footer">
  <p class="footer-prompt">$ echo $CREDITS</p>
  <div class="footer-content">
    <p><a href="https://anastasiasalter.net">Anastasia Salter</a> &amp; <a href="https://jtm.io/">John T. Murray</a></p>
    <p>DHSI 2026 · Montréal</p>
    <p>Built with Jekyll · Deployed on <a href="https://github.com/amsucf/DHSI_DH_AI_2026">GitHub Pages</a></p>
    <p><a href="https://distantcoding.ai">distantcoding.ai</a></p>
  </div>
</footer>
```

- [ ] **Step 2: Commit**

```bash
git add _includes/footer.html
git commit -m "feat: add footer include with terminal-styled credits"
```

---

### Task 12: Default Layout

**Files:**
- Create: `_layouts/default.html`

- [ ] **Step 1: Create `_layouts/default.html`**

Full HTML shell with inline SVG favicon (block invader), CSS link, header/footer includes, content area, JS.

The inline SVG favicon is a simplified 32x32 rendition of the block invader shape in purple (`#c8b6ff`) with blue eyes (`#7ec8e3`).

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ site.title }}</title>
  <meta name="description" content="{{ site.description }}">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='8' y='2' width='16' height='4' fill='%23c8b6ff'/><rect x='4' y='6' width='24' height='4' fill='%23c8b6ff'/><rect x='6' y='6' width='4' height='4' fill='%237ec8e3'/><rect x='22' y='6' width='4' height='4' fill='%237ec8e3'/><rect x='4' y='10' width='24' height='4' fill='%23c8b6ff'/><rect x='4' y='14' width='24' height='4' fill='%23c8b6ff'/><rect x='6' y='18' width='20' height='4' fill='%23c8b6ff'/><rect x='10' y='22' width='4' height='4' fill='%23c8b6ff'/><rect x='18' y='22' width='4' height='4' fill='%23c8b6ff'/><rect x='8' y='26' width='4' height='4' fill='%23c8b6ff'/><rect x='20' y='26' width='4' height='4' fill='%23c8b6ff'/></svg>">
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
</head>
<body>
  <div class="site-container">
    {% include header.html %}
    <main class="site-content">
      {{ content }}
    </main>
    {% include footer.html %}
  </div>
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add _layouts/default.html
git commit -m "feat: add default layout with inline SVG favicon"
```

---

## Chunk 3: Content (index.md)

### Task 13: Restructure Course Packet as index.md

**Files:**
- Create: `index.md`
- Reference: `dhsi-2026-course-packet.md` (source content)

- [ ] **Step 1: Create `index.md` with front matter and accordion structure**

Transform the course packet into `index.md` using `<details class="accordion-section">` wrapping each section. The content inside each `<details>` block uses the `<div class="accordion-content">` wrapper. Session titles use `<span class="session-title">`.

Front matter:

```yaml
---
layout: default
---
```

Each section follows this pattern:

```html
<details class="accordion-section">
<summary>
  <span class="prompt-text">$ course --description</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

This workshop guides humanities scholars through...

</div>
</details>
```

All 13 sections from the spec's Section Mapping table get this treatment. The markdown content (readings lists, topic lists, exercises, resource links) is preserved verbatim inside `markdown="1"` divs so kramdown renders it.

The "Wednesday PM: Free" note from the source is not a separate accordion section — include it as a brief line at the end of the Day 3 AM (`$ day-3 --am`) accordion content.

**Complete section list with prompt strings and source headings:**

| # | Prompt | Source Heading | Has session-title? |
|---|--------|---------------|-------------------|
| 1 | `$ course --description` | Course Description | No |
| 2 | `$ course --prerequisites` | Prerequisites | No |
| 3 | `$ course --readings` | Pre-Workshop Readings | No |
| 4 | `$ day-1 --am` | Session 1 (AM): Positioning and Prototyping with Artifacts | Yes: "Session 1: Positioning and Prototyping with Artifacts" |
| 5 | `$ day-1 --pm` | Session 2 (PM): Claude Code Web — Beyond the Chat Window | Yes: "Session 2: Claude Code Web — Beyond the Chat Window" |
| 6 | `$ day-2 --am` | Session 3 (AM): Claude Code CLI — Setup and First Principles | Yes: "Session 3: Claude Code CLI — Setup and First Principles" |
| 7 | `$ day-2 --pm` | Session 4 (PM): Red/Green TDD and Agentic Patterns | Yes: "Session 4: Red/Green TDD and Agentic Patterns" |
| 8 | `$ day-3 --am` | Session 5 (AM): The Model Context Protocol (+ "Wednesday PM: Free" note) | Yes: "Session 5: The Model Context Protocol" |
| 9 | `$ day-4 --am` | Session 6 (AM): The Superpowers Workflow | Yes: "Session 6: The Superpowers Workflow" |
| 10 | `$ day-4 --pm` | Session 7 (PM): Building and Sharing Skills | Yes: "Session 7: Building and Sharing Skills" |
| 11 | `$ day-5 --am` | Session 8 (AM): Building Your Tool | Yes: "Session 8: Building Your Tool" |
| 12 | `$ day-5 --pm` | Session 9 (PM — short session): Presentations and Futures | Yes: "Session 9: Presentations and Futures" |
| 13 | `$ course --resources` | Resources (all 4 subsections: Agentic Engineering, Hugging Face, DH Pedagogy, Practitioner Blogs) | No |

Session sections include a `<span class="session-title">` after the content div opens:

```html
<div class="accordion-content" markdown="1">
<span class="session-title">Session 1: Positioning and Prototyping with Artifacts</span>

**Readings:**
...
```

**Note:** The source file `dhsi-2026-course-packet.md` remains in the repo but is excluded from the Jekyll build via `_config.yml`. Only `index.md` is rendered.

- [ ] **Step 2: Verify the original `dhsi-2026-course-packet.md` content is fully represented**

Cross-check each section of the source markdown against the accordion sections in `index.md`. Every reading, topic, exercise, and resource link must be present.

- [ ] **Step 3: Commit**

```bash
git add index.md
git commit -m "feat: add index.md with full course packet in accordion sections"
```

---

### Task 14: Final Verification and Cleanup

**Files:**
- Verify: all files from file map exist
- Modify: `.gitignore` if needed

- [ ] **Step 1: Verify all files are present**

Run: `find . -not -path './.git/*' -not -path './.superpowers/*' -not -path './docs/*' -type f | sort`

Expected files (`.gitattributes` and `dhsi-2026-course-packet.md` preexist from initial commit; the source markdown is excluded from Jekyll build but stays in repo):
```
./.gitignore
./.gitattributes
./dhsi-2026-course-packet.md
./_config.yml
./_includes/footer.html
./_includes/header.html
./_includes/mascot.html
./_layouts/default.html
./_sass/_accordion.scss
./_sass/_base.scss
./_sass/_layout.scss
./_sass/_theme.scss
./_sass/_variables.scss
./assets/css/main.scss
./assets/js/main.js
./index.md
```

- [ ] **Step 2: Push to GitHub to trigger Pages build**

```bash
git push origin main
```

- [ ] **Step 3: Verify GitHub Pages deployment**

Check the GitHub repository Settings → Pages to confirm the site is building. Pages builds typically take 1-2 minutes. Visit `https://amsucf.github.io/DHSI_DH_AI_2026/` and verify:
- Page loads with dark theme by default
- ASCII mascot visible in header with purple body and blue eyes
- Theme toggle switches between `[light]` and `[dark]`
- All 13 accordion sections expand/collapse with prompt-style headers
- Footer shows instructor links, repo link, and distantcoding.ai
- Mobile: mascot stacks above title at narrow widths
