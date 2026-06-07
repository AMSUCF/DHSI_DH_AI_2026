---
layout: default
title: "Distant Coding: A Recommendation System with Artifacts"
---

<p class="page-prompt">$ day-1 --pm · demo 1</p>

## Distant Coding: A Recommendation System with Artifacts

<p class="page-lead" markdown="1">Build a working, interactive system entirely through natural-language prompts—no hand-written code. You will create a structured dataset, turn it into a small recommender, and publish it as a shareable Artifact, iterating by prompt at each stage.</p>

<details class="accordion-section" open>
<summary>
  <span class="prompt-text">$ demo --dataset</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Ask Claude to generate a dataset of about **100 works** with **title, author, year, and genre**—for example, science fiction across subgenres (Afrofuturism, Cyberpunk, Steampunk, and so on).

Adapt this to your own field: swap in a different medium or category system that matters to your research or teaching.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --json</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Have Claude convert the list into structured **JSON**. Read the plain-text output first and verify it before converting—catching mistakes here is much easier than debugging them later.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --interface</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Build the rating interface as an Artifact. A prompt to start from:

> Create an HTML page with embedded script and style that takes the JSON data, selects 10 books at random, and displays them with radio buttons for users to rate them from 1 to 5.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --recommend</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Add the recommendation logic: from the user's ratings, **display the top three genres**, then **recommend unrated works** that match those preferences.

Then apply a **visual style**—theme the page to fit the material (retro science-fiction colors and design, or whatever suits your dataset).

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --critique</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Share your published Artifact and look at it critically:

- **What expertise did each stage require?** Where did your judgment shape the result?
- **What assumptions or errors appear in your dataset?** What did Claude get wrong, omit, or over-represent?
- **How does even a simple recommender encode bias?** A system that ranks and suggests is already making value judgments—whose?

</div>
</details>

<p class="page-back" markdown="1"><span class="prompt-text">$ source</span> — adapted from [Week Nine: Distant Coding](https://anastasiasalter.net/HumanitiesAI/weeknine.html), *Humanities &amp; AI*. <span class="prompt-text">$ cd ..</span> — <a href="{{ '/' | relative_url }}">back to the course packet</a></p>
