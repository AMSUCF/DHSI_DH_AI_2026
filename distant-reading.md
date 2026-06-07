---
layout: default
title: "Distant Reading with Claude Projects"
---

<p class="page-prompt">$ day-1 --am · artifacts demo</p>

## Distant Reading with Claude Projects

<p class="page-lead" markdown="1">A hands-on Artifacts demo for the Monday morning session. You will move a small corpus through a distant-reading pipeline inside a single Claude Project, generate and iterate on visualization Artifacts, and then read those machine outputs critically against what close reading would surface.</p>

<details class="accordion-section" open>
<summary>
  <span class="prompt-text">$ demo --corpus</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Using the corpus you brought—or, if you could not attend, a three-to-ten-text set drawn from [Project Gutenberg](https://www.gutenberg.org/), HathiTrust public-domain holdings, or your own files:

- **Create a fresh Project** in Claude.
- **Upload all texts** to the Project's knowledge.

Keep the set small enough to reason about, but large enough to compare across.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --sequence</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Run the analytical sequence one step at a time, keeping each result in the conversation so later steps can build on it:

1. **Stopword filter** — strip function words so content words surface.
2. **Bag-of-words** — raw term counts across the corpus.
3. **Key phrases** — multi-word expressions, not just single tokens.
4. **Character or theme network** — what (or who) connects to what (or whom).
5. **Comparative read** — how the texts diverge and converge across the set.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --artifacts</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Ask Claude to generate **Artifacts** that visualize the findings. We will produce **at least five different artifacts** and iterate on the prompts and choices in between:

- Word clouds
- Frequency charts
- Network diagrams
- Comparative tables
- Thematic timelines

**Iterate.** Change the stopword list, regroup categories, re-scope the comparison, and watch how each visualization shifts in response.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --critique</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

- **Critique what you see.** What does the visualization foreground, and what does it bury?
- **Compare to close reading.** What would you have noticed reading these texts yourself that the distant view misses?
- **Document at least one place Claude got it wrong** — a miscounted term, a hallucinated relationship, a flattened theme, or a misattributed quote.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --reading</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

**Suggested reading:**

- Underwood, Ted. ["A Genealogy of Distant Reading."](https://dhq.digitalhumanities.org/vol/11/2/000317/000317.html) *Digital Humanities Quarterly* 11.2 (2017).

**Sample assignment:**

- Salter, Anastasia. ["Week Four: Reading Across Texts."](https://anastasiasalter.net/HumanitiesAI/weekfour.html) *Humanities &amp; AI.*

</div>
</details>

<p class="page-back"><span class="prompt-text">$ cd ..</span> &mdash; <a href="{{ '/' | relative_url }}">back to the course packet</a></p>
