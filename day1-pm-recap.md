---
layout: default
title: "Day 1 PM Recap: From Artifacts to Claude Code Web and GitHub Pages"
---

<p class="page-prompt">$ day-1 --pm · session recap</p>

## Day 1 PM Recap — From Artifacts to Claude Code Web and GitHub Pages

<p class="page-lead" markdown="1">A follow-along, demo-driven session on using Claude's web tools — Projects, Artifacts, and Claude Code on the web — plus GitHub and GitHub Pages, as a teaching path for first- and second-year DH classes. The framing throughout: web tools require no installs, keep students in one interface, and the skills transfer to the local power tools introduced later in the week.</p>

A persistent theme across the afternoon: results vary between users even with identical prompts and documents, because LLMs are probabilistic and Claude draws on each user's saved **memory** to interpret short prompts. The shorter the prompt, the more the model infers.

### Setup and core settings

- **Thinking / reasoning.** On by default (under the model's *effort* setting and global Settings). The model works through a problem step by step before answering — helpful for logic and multi-step work, but it can second-guess straightforward answers. Programming benefits, so keep it on. (A participant's poor output was later traced to thinking being off — hence the recurring lesson: *"Whenever you're frustrated with it, check the settings."*)
- **Model and effort.** Anastasia ran Claude Opus 4.8 on high effort with thinking. Output quality and depth depend heavily on these settings.
- **Token awareness.** Day one chose *convenience over efficiency* — but most of the "smaller model / thinking off" levers are really about minimizing token consumption per problem.

### Demo 1 — Distant reading of sci-fi texts (Claude Projects)

A **Project** called *Distant Read of Sci-Fi Texts* introduced agentic analysis.

- **Corpus.** A handful of short interwar pulp / *Weird Tales*-era texts from **Project Gutenberg** (Lovecraft, Robert E. Howard's Conan, etc.), chosen for their racism and misogyny so the corpus would surface real interpretive problems. Used **plain `.txt`**, not EPUB (Gutenberg pushes EPUB — use *Save As*). Files went into **Project knowledge**, where they persist and are available to every chat in the project. Five short texts used ~16% of capacity; PDFs/DOCX eat capacity faster, so `.txt` and short stories are preferred. Project Gutenberg frowns on AI scraping — for scale, use existing curated datasets.
- **The naive prompt.** The only input was *"conduct a distant read of this set of stories."* This showed how much the agent now fills in — a prompt that "would not have worked back in the day."
- **What "agentic" means.** John defined it as *multiple turns taken by the AI without human intervention* (running code, calling tools) — the break from first-generation chatbots. The model identified the texts, checked which **Python libraries** were available in its sandbox, wrote a distant-reading script (stripping Gutenberg boilerplate, choosing stop words, computing metrics, naming themes like *cosmic/alien* and *mind/insanity*), ran it, and returned results with inline visualizations. Crucially, this Python runs **on Anthropic's servers** — students don't install NumPy or NLTK locally.
- **Validation and code literacy.** Even computational analysis carries Claude's training data and biases; reading the script reveals its choices (stop words, theme groupings). The relevant literacy is *reading* code, not writing it — the more you can read, the more you can validate and adjust. A former multi-week master's-level Python task is now largely automated.
- **Sentiment sub-demo.** Asked for sentiment analysis with an interactive visualization, the model defaulted to the **VADER** lexicon. Teaching point: results reflect the *choice of library*, not Claude's judgment, and inherit VADER's limits (satire, humor, cultural context). Claude is acting purely as an *interface* writing the same boilerplate you'd otherwise write.
- **Second chat — concordance.** In a separate chat *within the same project* (still able to reach the files and saved script), Anastasia asked about the racialized and gendered language. The model planned a Python pipeline outputting JSON for an HTML **concordance**, distinguished slurs from ambiguous descriptors, and categorized the results. The artifact was both **added to the project** and **published** to a shareable Anthropic-hosted URL.
- **Why split work across chats.** Long chats may compress or lose early context, and an unwanted definition can't be extracted once adopted — better to start fresh from saved scripts/data. Sessions persist by default until deleted (John framed the difficulty of exporting elsewhere as deliberate **lock-in**).
- **Wrappers vs. harnesses.** Tools like BoodleBox, Copilot, or Perplexity give *access to models* but not a real agentic **harness**. Each frontier model is trained for its own provider's tools (Claude → Claude Code), so a model used outside its native harness is less capable. The harness is the file access, web search, restricted bash, and project memory around the model.
- **Copyright and ethics.** Uploading copyrighted texts to a frontier model is the most legally fraught path; later in the week they'll build a tool that runs a *local* model so sensitive texts never leave the machine. Library database terms rarely permit AI analysis — consult librarians. The **Data-Sitters Club** was recommended for thoughtful treatments of fair use and distant reading. On the Anthropic settlement: the issue was acquiring books *illegally*, not training per se; analysis is plausibly transformative, though there's no settled case law.
- **Privacy setting to change.** Under **Settings → Privacy**, turn off *"Help improve our AI models"* so chats and coding sessions aren't used for training. Caveats: policies change, already-submitted data is fair game, safety **classifiers** can still flag content, and guarantees can evaporate in bankruptcy/acquisition. **Pedagogical rule:** never put a *student's* work into these tools — that's the student's choice — and make sure students know the opt-out exists, early.

### Demo 2 — A recommendation system with Artifacts (distant coding)

A new project, *BuzzFeed Sci-Fi Novel Recommendation System*, went deeper on **artifacts** (which default to "Anthropic web design studio" aesthetics unless steered).

- **Step 1 — Generate the dataset via research.** Prompt: *research and create a list of 100 popular science fiction novels, prioritizing diversity.* This showed **agentic web research** — the model ran targeted searches (Hugo/Nebula 2024–2025, *Locus*, Book Riot, Wikipedia) and produced a grounded Markdown list, avoiding the hallucination risk of answering from training data alone.
- **Personalization / memory.** Output divergence between users traced almost entirely to **memory**. It's just editable text — fill out **work context** (field, role, that you're an academic), state aesthetic preferences (e.g., reject the default Anthropic look; ask for retro web, pixel-art, retro-futurist), paste a personal statement to start from, and reference datasets you reuse. Editing memory produces noticeably better output over a week.
- **Mini-lessons.** **Markdown** is a lighter HTML — structured formatting with minimal overhead, efficient for token-based models. **Tokens** are the model's fuel (often sub-words, not whole words); the "how many R's in strawberry" failure came from sub-word tokenization, since fixed in Opus 4.8.
- **Step 2 — A "regular" artifact.** Added the Markdown list to the project, then prompted for a **retro, BuzzFeed-style recommendation quiz** drawing on the curated list — the "Cosmic Sci-Fi Matchatron 3000." This separates the two halves of a project: refine the *dataset* (full curatorial control to surface under-represented authors), then iterate on the *interface*. A strong group exercise: have students rewrite the AI-generated list themselves to see the gap between passionate human curation and "flattened" AI output.
- **Step 3 — An "AI-powered" artifact.** A version that **wraps Claude itself** — sending interface input to Claude and returning recommendations from training data rather than the curated list. It consumes the *end user's* tokens, reflects training-data **biases** (over-recommending Andy Weir), and is excellent for teaching Safiya Noble's critique of algorithmic systems and healthy suspicion of ed-tech startups that are "Claude with a fancy interface."
- **Token management.** Thinking roughly doubles token use. Two limits exist: a rolling **session limit** (e.g., a 5-hour window, checkable under **Settings → Usage**) and a **weekly limit** — spread work out. Don't use Opus 4.8 for everything; **Sonnet** handles well-defined tasks with higher limits, so a useful pattern is Opus writes the plan, Sonnet implements. Reduce consumption by pre-planning, supplying your own assets, and preferring plain text over PDFs/images. Non-zero **temperature** varies output run to run and actually improves results — you can run a task several times and keep the best, at multiplied token cost.

### Demo 3 — GitHub and GitHub Pages

Artifacts are trapped in Claude's ecosystem (the publish button carries Claude branding and you can't keep editing). To take ownership and host elsewhere, move work to GitHub — done entirely in the browser, the way you'd introduce it in an intro course.

- **Concepts.** **Version control (Git)** tracks every iteration; this course's own repo lets you browse every version and see exactly what Claude changed. The course site itself lives on **GitHub Pages**, built from Markdown notes. Repositories are **public** by default.
- **Create and deploy.** From `github.com/<username>`, **+ → Create new repository** with a clear name (it becomes part of the URL) — e.g., `SciFiRex`. Download the quiz artifact from Claude as a single bundled `.html`, *Upload an existing file* → **Commit changes** (each commit = a saved version). Enable Pages under **Settings → Pages → Source: Deploy from a branch → main → Save**. If the repo is private without education benefits, Pages is blocked — make it public. Use the **About** gear to surface the live URL.
- **The `index.html` lesson.** The bare Pages URL returns a **404**, because a web server serves a file named **`index.html`** by default — and the Claude artifact has another name, so you must append the filename. The instructors dwelt on this deliberately: many students lack file-system literacy, and understanding root + folders + `index.html` is foundational. GitHub Pages is "a very nice analog for web servers and file systems." Have students make several throwaway repos to build muscle memory for where the settings live.

### Demo 4 — Claude Code on the web

The session closed by introducing **Claude Code**, what Anastasia uses "for pretty much everything." Students start with **Claude Code Web**, which connects to any authorized GitHub repository with *no local install*.

Pointed at the fresh `SciFiRex` repo with *review this repo, build an index.html with the same aesthetic, link the quiz, and link everything up* (plus a **p5.js star-field animation**), Claude Code:

1. **Cloned** the repository.
2. Reviewed all files, including the uploaded quiz page.
3. Created **`index.html`** with matching panels, logo, and buttons plus the animation.
4. Wired up navigation, changing *only* the one section of the quiz file needed for the back-link.
5. **Committed and pushed** to a **branch** (Claude Code avoids committing to `main`).
6. Offered a **pull request** to review the diff before accepting; **merging** brought it onto the main site.

**Why this matters pedagogically:** students get full version history, complete visibility into what the AI does, easy undo, immediate hand-editing, and the ability to work across many files and larger datasets — all without installing anything. Claude Code Web is more limited than the full local power tool coming next, but it's the on-ramp. (A "temporary server limit / too many requests" error is *not* a personal limit — it means Claude is overloaded, with higher-tier plans getting priority.)

---

**Through-line of the session:** doing the work yourself still yields insight into data and method that reading an AI-generated report cannot. The instructors repeatedly modeled *interrogating* the tool's hidden choices — libraries, stop words, definitions, training-data biases — rather than accepting first outputs. That is the core of using these tools critically in a DH classroom.
