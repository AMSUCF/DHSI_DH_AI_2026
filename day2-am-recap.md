---
layout: default
title: "Day 2 AM Recap: Building and Deploying with Claude Code Web"
---

<p class="page-prompt">$ day-2 --am · session recap</p>

## Day 2 AM Recap — Building and Deploying with Claude Code Web

<p class="page-lead" markdown="1">A follow-along morning spent entirely in <strong>Claude Code for the Web</strong> — building and deploying real GitHub projects from the browser, with no local install — and previewing the CLI "power tool" version for later in the week. We picked up the Day 1 capstone and worked through it together as a group, then ran a second image-based build from scratch.</p>

A live **GitHub outage** shaped the session: for much of the morning Claude Code Web's GitHub connector returned **403 / "no write access"** errors for most participants, traced to an active connector bug likely aggravated by Canadian-IP security restrictions at DHSI. The unplanned fix — a **Personal Access Token** — turned into one of the morning's most useful lessons.

### Setup and core concepts

- **"Claude Code" is several harnesses.** Claude Code Web runs on **Anthropic's cloud hardware** (which sets limits and adds latency); the local CLI version comes later in the week. Connecting requires authorizing a **GitHub connection (OAuth)** — without it Claude Code Web can do nothing. After connecting, you **select the specific repository** so it edits the right one. It reads from `main` but builds on its **own branch** for you to approve.
- **The three modes.** A toggle at the bottom switches between **Plan mode** (Claude won't touch files; it interviews you and drafts a plan to approve), **Accept Edits** (it makes changes but you authorize each one), and **Auto mode** (give a command and let it run unsupervised). The rule: **always start in plan mode** so it doesn't leap to building the wrong thing.
- **Work from empty when you can.** Starting from an empty repo is a deliberate token-saving choice — any document in the repo gets read and processed.

### Demo A — An academic portfolio site from an empty repo

The group rebuilt a "final portfolio project"–style site agentically, from nothing. Prompt: *help plan an academic portfolio website for a digital humanities / game studies scholar* — responsive, with a cute palette, p5.js animation, and an overall playful aesthetic.

- **Adaptive model choice.** Claude cloned the empty repo and dispatched a cheaper **Haiku sub-agent** to explore the structure, with **Opus acting as project manager**. This throws extra compute at the problem (and burns tokens faster), but the sub-agent's command and report are both inspectable.
- **Planning before building.** In plan mode it asked clarifying questions — **tech stack** (it recommended **vanilla HTML/CSS/JS** over React or Astro, which need extra build/deploy work for GitHub Pages), content approach, and deployment target — then wrote the plan as a **Markdown document you can comment on inline** and revise before approving.
- **Hallucination from archival gaps.** The "research my materials" option found real publications but **invented plausible-sounding courses** when a course list wasn't easily findable online. Lesson: the better-structured the information about you on the web (and in your memory bio), the better the result; gaps get filled probabilistically with convincing-but-fake content.
- **The build.** Roughly 30 minutes of compute produced `index.html`, a mobile-first stylesheet, a `data.js` of researched info, a decorative p5.js sketch, a flash-style landing page, a main JS controller, and placeholder SVGs — then ran syntax checks across files.
- **Why this matters pedagogically.** A GitHub-hosted portfolio is free, easy for students to keep updated with Claude (so they actually maintain it), survives any single university affiliation, and demonstrates version-control literacy. Claude Code is undercutting low-code/SaaS: it can reproduce a Squarespace/WordPress/Omeka-style site in under an hour, leaving you owning the code.

### The GitHub outage → Personal Access Token workaround

When most participants hit **403 "no write access"** errors, the instructors walked through a durable fix that also teaches a foundational web concept. The Claude↔GitHub **connector** (an OAuth bridge) was failing to grant push rights; new connections only got **read** access.

1. **GitHub → Settings → Developer Settings → Personal access tokens → Tokens (classic) → Generate new token.** Name it and set an expiration.
2. Grant **two scopes**: **`repo`** (read/write the repository) and **`workflow`** (so it can trigger the GitHub Pages deploy, which runs as a workflow on push to `main`). The token is shown **only once** — copy it immediately and revoke/rotate it if ever exposed.
3. In Claude Code Web, store it as an **environment variable** (e.g., `GITHUB_PERSONAL_ACCESS_TOKEN`) via the chat's **Edit Environment** menu, rather than pasting it into the chat where compaction could lose it or it could leak. Claude then **uses the value by name without printing the secret**.
4. Tell Claude to **use the token in the environment to push to the repository.**

Concepts taught along the way: **OAuth vs. raw tokens**, **token scoping**, `.env` files and the `NAME=value` format, and secret hygiene. After the token, deployment followed the Day 1 steps: **Settings → Pages → Deploy from a branch → select the branch that actually has content**, then the **About gear → Use your GitHub Pages website** for the URL — plus the familiar `index.html`/404 rule and waiting for the brown dot to go green.

### Demo B — A butterfly image slideshow (the "Image Metadata" demo)

To show working **from an existing repo** and with **visual data**, the session built a slideshow from images.

- **Deliberately "wrong" input.** ~8 **screenshots of butterflies** were uploaded — screenshots carry **no metadata at all**, so Claude has to derive everything. In plan mode it listed the files, recognized they were screenshots, and **looked at each image**, leveraging **Opus 4.8 as a multimodal model** that reads images directly. You can double-check its identifications.
- **Frameworks vs. hand-rolled HTML.** Since Demo A used plain HTML, this build used **Reveal.js** — a chance to teach **libraries/frameworks** and how pointing Claude at the right one yields more features than hand-written code. Claude also **renamed the files by species**, applied a quilt/patchwork aesthetic, restructured files into an `images/` folder, wrote CSS, and **served locally to verify**.
- **The pull-request workflow, taught in detail.** Claude pushes to a branch; rather than let it open the PR, do it manually on GitHub: the yellow **"Compare & pull request"** box checks the branch against `main` for **merge conflicts** → **Create pull request** (this only *proposes* the merge) → **Merge pull request** → **Confirm merge**. Branches keep the main project safe until you explicitly merge.
- **Iteration loop.** Concrete follow-ups (made *without* plan mode) added accessible text backgrounds, **hover tooltips** with each butterfly's name, and **looping background music** — for which "MIDI" led Claude to synthesize a tune procedurally with the **Web Audio API** (no audio file to upload, ideal for GitHub Pages). Throughout it ran syntax checks, updated the README, and verified before committing.

### Tooling notes

- **Slash commands.** Typing `/` lists available commands. Most useful: **`/debug`** (paste an error to troubleshoot) and **`/simplify`** (clean up tangled code once it works). Also noted: `/loop`, `/skill-generator`, **`/security-review`**, and `/usage`.
- **Cross-language translation.** Claude is strong at translating between coding languages — e.g., turning a Day 1 **Python** analysis into a **JavaScript** website, or restoring historic **Flash** projects. It knows more languages than anyone in the room and applies patterns across them.
- **From the Code sidebar:** scheduled recurring runs, controlling a desktop Claude Code run **from your phone**, and resuming recent projects with context intact.
- **CV/Word input:** prefer exporting to **Markdown/plain text** (e.g., via **Pandoc**) before feeding it in, to save tokens.

---

**Through-line of the session:** even with a real outage derailing the plan, the morning reinforced the week's pedagogy — **plan before you build, prototype small before scaling, and review every change** (sub-agent commands, plans, diffs, pull requests). The connector bug, the token workaround, and the hallucinated course list all became teachable moments rather than failures.
