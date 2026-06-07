---
layout: default
title: "Deploying to GitHub Pages with Claude Code for Web"
---

<p class="page-prompt">$ day-1 --pm · demo 3</p>

## Deploying to GitHub Pages with Claude Code for Web

<p class="page-lead" markdown="1">Take a project out of the chat window and onto the open web. You will use Claude Code for Web to build your site as real files in a Git repository, then publish it for free with GitHub Pages.</p>

<details class="accordion-section" open>
<summary>
  <span class="prompt-text">$ demo --account</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Make sure you have a **GitHub account**. If you use a `.edu` email, you can claim [GitHub Education](https://education.github.com) benefits (free GitHub Pro), which is worth doing but not required for this demo.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --repo</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Create a **new repository** with a descriptive name—something like `sci-fi-recommender` or `book-recommendation-system`—and initialize it with a README file.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --build</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Open **Claude Code for Web** from the Claude sidebar and authorize the GitHub connection. Then build the site one file at a time, which makes iteration far easier:

1. Ask for the **JSON data file** first.
2. Then the **HTML**.
3. Then the **JavaScript**.
4. Then the **CSS**.

Requesting the files separately keeps each change reviewable instead of regenerating everything at once.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --deploy</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Accept Claude's **pull request** to merge the files into your repository. Then:

- Go to the repository's **Settings → Pages**.
- Set the source to **Deploy from a branch**, using the **main** branch at the **root** (`/`).
- Wait for the build, then open your live URL and test it.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --reflect</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Share your deployed GitHub Pages URL and reflect:

- How does working with **real files and version control** change the workflow compared to a single chat Artifact?
- What did **committing through a pull request** let you see or undo that an inline edit would not?
- When is the move from a quick Artifact to a deployed, version-controlled site worth the extra steps?

</div>
</details>

<p class="page-back" markdown="1"><span class="prompt-text">$ source</span> — adapted from [Week Eleven: Deploying to GitHub Pages](https://anastasiasalter.net/HumanitiesAI/weekeleven.html), *Humanities &amp; AI*. <span class="prompt-text">$ cd ..</span> — <a href="{{ '/' | relative_url }}">back to the course packet</a></p>
