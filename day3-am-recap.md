---
layout: default
title: "Day 3 AM Recap: The Command Line and the Claude Code CLI"
---

<p class="page-prompt">$ day-3 --am · session recap</p>

## Day 3 AM Recap — The Command Line and the Claude Code CLI

<p class="page-lead" markdown="1">A hands-on morning that took the room from zero terminal knowledge to a working <strong>Claude Code CLI</strong> install. We learned the command line by <em>being</em> the agent — playing through a browser-based detective game that teaches file-system navigation — then moved into real terminals to create a project folder, install and authenticate the tools Claude needs (Claude Code itself and the GitHub CLI), and watch Claude initialize and push a repository on its own. The session closed with a first look at running models entirely on your own machine with Ollama.</p>

A recurring caveat all morning: because the models are probabilistic, **"everyone will not see the same thing I'm seeing."** Exact wording, file lists, and the order Claude does things will differ from machine to machine — that's expected, not a bug.

### Why the terminal first

Claude Code's interface is modeled on a terminal: you type, hit return, and read what comes back. So before touching Claude, we built the underlying literacy. The framing that organized the whole exercise: **"In this terminal exercise, we *are* Claude Code."** We're an agent dropped onto an unfamiliar system, looking around, and accomplishing a task with the exact same tools Claude uses.

The opening analogy set the tone: *"Imagine yourself, you're a hacker… you're now entering into a computer, you don't know anything about this computer. You're basically waking up, you have amnesia… This isn't our computer, this is someone else's computer. And this is also true for Claude Code"* — which is why the first thing an agent does is explore its environment by looking around.

### Demo 1 — Learning the command line by playing a game

We revisited the **terminal detective game** Anastasia generated the day before with Fable (a noir, *Carmen Sandiego*–style story rendered as a browser terminal, linked from the bottom of the Day 2 materials and on GitHub). It's self-guided, so latecomers were told they could play through it at their own pace — *"all the stuff before was background knowledge… we haven't done a bunch of work you have to reproduce."* The game became the vehicle for every core command:

- **`pwd`** (print working directory) — where am I? (Noted that it "doesn't give us much" here, since the prompt already shows the directory.)
- **The prompt and the `$` sign** — the text before your input is "the prompt"; the dollar sign is "the universal designation for *you should provide some input*," which is exactly why the course website's headings start with `$`.
- **`ls`** (list) — look around the room. *"This whole building is a file system. Directories are rooms. Files are papers lying around in them."*
- **`cat <file>`** — read a file. We unpacked the `<...>` convention: angle brackets are a placeholder you replace with a real name, not something you type literally.
- **`cd <directory>`** and **`cd ..`** — move into a room, or climb back up to the parent (`..` = the directory above you). The whole room did `cd br` + **Tab** together to enter the briefing room.
- **Tab completion** and the **up arrow** — *"the two things that separate those who are fumbling around at the terminal from those who can feel a little more comfortable."* Tab autocompletes long names (double-Tab lists matches); the up arrow replays prior commands so a typo isn't scary — you just hit up and fix it.
- **`clear`** and **Ctrl-C** — clear the screen clutter (you can't undo it, but up-arrow recovers prior commands); Ctrl-C gives you a fresh, clean line.
- **Hidden files and `ls -a`** — names starting with `.` are invisible to plain `ls`; the `-a` flag ("all") reveals them. This introduced **arguments/flags** — *"a value that you pass into something to help specify its behavior"* (an argument being "not something you do in the humanities with your friends"). We then looked at a real home directory full of dotfiles (`.aws`, `.cache`, …) — hidden config you shouldn't casually break — and the OS toggles to show them (Mac: ⌘-Shift-.; Windows: Folder Options → View).
- **File extensions are "conventions, not destiny"** — `.txt` doesn't guarantee text; the extension is just part of the name.

Half the fun was watching a *student-built* game hold up to scrutiny: it had real tab completion, save-state that survives a refresh, a notebook that logs clues, and fast-travel between cities — *"Curse you, tutorialized game that's actually doing a good job."* John was genuinely delighted to find its few bugs (a `clear`-screen layout glitch, a responsive-design hiccup) — *"thank you, imperfection"* — and noted the whole thing *"is better than a lot of games that my students have done in their first classes, and it's really disturbing."*

### Demo 2 — Into the real terminal: a project folder

With the concepts in hand, everyone opened a real terminal (**Git Bash** on Windows, **Terminal** on Mac) and built a workspace by hand:

- **`mkdir DHSI`** then **`cd DHSI`** — lots of one-on-one coaching on the command-then-space-then-argument structure. This is *"the most important foundation behind navigating with the command line, because once you run Claude, it does almost everything else — but you need to understand what Claude does."*
- Side-quests as needed: installing **Homebrew** and `brew install git` on Mac (the password you type doesn't echo to the screen — that's normal), re-running the Git for Windows installer for anyone missing Git Bash, and resizing/theming the terminal so it's comfortable to read.

### Demo 3 — Installing and launching Claude Code (and the PATH lesson)

The longest stretch was getting **`claude`** to actually run — which doubled as a real lesson in how a shell finds programs.

- **`claude --help`** introduced the standard way to read a CLI tool's documentation, and surfaced two flags worth knowing: **`--add-dir`** (tied to sandboxing — by default Claude won't reach outside its starting directory without permission) and **`--dangerously-skip-permissions`** (the "YOLO" flag, *"recommend only for sandboxes with no internet access"* — Anthropic "disavow all damage").
- If the shell can't find `claude`, the CLI either isn't installed or isn't on your **PATH** — and Anthropic's own flow nudges you toward the desktop app / web version, so you have to deliberately follow the docs to install the CLI. (Reminder: **Claude Code requires a Claude Pro subscription.**)
- The core technical fix, taught as its own concept: on Windows, `claude` lived in `…\.local\bin`, which wasn't on PATH. We opened **Edit the system environment variables → Environment Variables**, distinguished **System vs. User** variables, and explained **PATH** as *"probably the most important environment variable"* — the list of folders the shell searches for an executable. Add the folder, OK out, **restart the terminal**, and `claude` is found. (A common gotcha: a user's real home was their **OneDrive** folder, not `C:\Users\<name>`.)
- A reusable classroom technique emerged when several people were stuck: the **"split the room" debugging method** — poll by show of hands, then solve one representative case per platform (Windows, Mac) rather than going person to person. *"This is why I pause. I don't want to lose people in this journey together."*

Once installed: accept the **"trust this folder"** prompt, and you're in. Claude Code shows your working directory at the top and takes input like a terminal would. The first power-user move: the **`!` (shell) escape hatch** — type `!` and your line runs as a straight terminal command instead of going to Claude, returning the raw result. *"We have gotten to the promised land. From here on out, it's a lot easier."*

### Demo 4 — Claude Code CLI "101": working efficiently

After the break we moved past "type something and hit enter" toward habits that build confidence and save tokens:

- **`/help`** — the full, keyboard-navigable help interface (CLIs are keyboard-centric "because you don't send mouse commands over the wire").
- **`/clear`** — restarts the session with no context. Crucially *different* from the terminal's clear: the previous session isn't destroyed, it's saved to disk and can be resumed.
- **CLI sessions live on your own disk** as transcripts — unlike Claude Code Web, where the session is managed for you. That's what makes the next two commands possible.
- **`/resume`** (and **`claude -c`** to continue) — pick a prior session in the same directory and pick up exactly where you left off; the whole command history replays into context. So you can exit confidently with **`/exit`** or **Ctrl-C Ctrl-C** and come back later.
- **Ctrl-S (Stash)** — *"super, super helpful."* Typed a long, careful prompt but realized you need to switch models or run a shell command first? Stash it, do the other thing, and the prompt comes back.
- **`/model`** — the default **Opus 4.8** "will burn through all my tokens"; for simple, well-defined work (setting up a repo, scaffolding files — "not planning a research project") drop to **Sonnet 4.6** or **Haiku**.
- **Permissions and tool calls** — since we're *not* in skip-permissions mode, Claude asks before acting and shows what it's about to do. A **Bash tool call** includes both the exact shell command *and* a plain-language explanation of why; "Yes, and don't ask again" stops repeat prompts for the same action. (When you deny something it needs, it gets stuck — *"I feel like you're kind of gaslighting me."*) You can also **queue** a follow-up prompt while it works, and hit **Esc** to interrupt, or **Esc twice to rewind** the transcript to an earlier point — better than correcting a mistake after the fact, because junk left in the transcript "distracts the agent."

### Demo 5 — Letting Claude use GitHub: the `gh` CLI

To let Claude create repositories and pull requests on your behalf from the terminal, we installed the **GitHub CLI (`gh`)** — the CLI analog of the Personal Access Token used in Claude Code Web (linked under **Day 3 AM** in the syllabus):

- **Install:** `brew install gh` on Mac (Homebrew "handles binaries and paths"); the Windows installer otherwise.
- **`gh auth login`** — a step-by-step browser flow: choose **github.com** → **HTTPS** → authenticate Git with your credentials → **login with a web browser** → paste the **one-time 8-digit device code** → authorize. **`gh auth status`** checks whether you're already logged in.

The troubleshooting here *was* the lesson, and the same handful of mistakes recurred: running the install **inside Claude Code instead of a fresh terminal** ("Why are you doing all this in Claude Code? You have to do it in a terminal"); **not restarting the terminal after installing**, so the new tool isn't on PATH yet (*"anytime you install a program, you have to restart the terminal"*); expecting `gh` to appear in the apps list (it won't — "it's not a GUI tool"); and exiting the auth flow early. A Git Bash gotcha: **Ctrl-V doesn't paste** — use right-click (it's Ctrl-Insert under the hood).

Then the payoff. In a fresh session: *"Make sure this directory is initialized as a Git repository, and create a GitHub repository for it."* Just saying **"GitHub"** made Claude reach for `gh` on its own — *"it already thought to use `gh`, even though we didn't tell it to."* It ran `gh auth status`, hit a wrong-shell command, **learned from the failure** (*"it learns from its failures just like us"*) and adjusted, offered a starter **README** (you can't have an empty repo), committed, and pushed a live public repository. And because the project now lives in Git, Claude can rewind the entire codebase and recover even a deleted file from an earlier commit — *"this is not Windows where things go to the recycling bin."*

### First look — running a model on your own machine (Ollama)

Returning to a GUI "like a nice warm bath" after the command line, we launched the **Ollama desktop app** to preview the week's local-models thread:

- **Gemma 3 E2B** answered "Who are the prominent figures in digital humanities?" — chosen deliberately as a **breadth-of-knowledge** question with no tools. It ran **completely locally**, showed its thinking, and output Markdown that the app rendered. Per **Simon Willison**, model size largely tracks how much a model "knows" without tools — and asking an LLM an ungrounded factual question like this "is probably the worst possible thing to do with an LLM" (it's out of date and may hallucinate; grounded tools do better). This connected back to the **"Humanity's Last Exam"** tool-vs-no-tool benchmark from the day before.
- The much smaller, coding-focused **Deepcoder 1.5B** didn't even know what digital humanities is — the point being that smaller, specialized models trade general knowledge for focus, so you run **different models for different jobs**.
- A quick **multimodal** test (a monarch butterfly photo through Gemma) didn't perform well — flagged as possibly a versioning issue, to revisit after lunch. For perspective: local models are *"phenomenally better than 3 or 4 years ago"* — the GPT-2 / GPT-Neo era output was near "gobbledygook."

After lunch: more Ollama, and using Claude Code driven by a **local coding model**.

---

**Through-line of the session:** the morning made the agent legible. By doing the file-system work by hand first, then watching Claude run the very same commands — with permissions, tool calls, and a clean rewindable transcript in view — the terminal stops being "magic" and becomes something you can read, direct, and recover from. The literacy that matters is **reading** what the agent does, not memorizing the commands yourself.
