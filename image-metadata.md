---
layout: default
title: "Image Metadata with Claude Code"
---

<p class="page-prompt">$ day-2 --am · demo</p>

## Image Metadata with Claude Code

<p class="page-lead" markdown="1">A complete CLI workflow run from the terminal: hand Claude Code a folder of unlabeled images and let it identify each one, write descriptive alt text, rename the files to match their contents, and assemble the results into a shareable slideshow. For more starting points, see the collection of <a href="https://anastasiasalter.net/DistantCodingUMKC/">sample exercises with Claude Code</a>.</p>

<details class="accordion-section" open>
<summary>
  <span class="prompt-text">$ demo --select-images</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

**Select a set of images** in need of metadata. Use images you have rights to—personal photographs, public domain images, or Creative Commons materials.

For this example, eight butterfly photographs from garden walks and hikes in Florida were uploaded as generic screenshots (e.g. `Screenshot 2026-03-12 122511.png`)—exactly the kind of undescribed, unhelpfully named files that pile up on a hard drive.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --new-repo</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Create a new GitHub repository using **GitHub Desktop**, then navigate to the repository folder and add the images.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --launch-claude</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

Use **GitHub Desktop** to open the repository in your terminal or command line (**Repository → Open in Terminal**), then run:

```
claude
```

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --describe-rename</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

**Request identification, alt text, and renaming.** The prompt for this step was:

> these images need to be analyzed. Create a file with detailed descriptive alt text for each image, and rename the image files to match the butterfly in each

Claude Code reads each image, identifies the butterfly, writes the alt text to a file, and renames the screenshots to descriptive filenames.

</div>
</details>

<details class="accordion-section">
<summary>
  <span class="prompt-text">$ demo --slideshow</span>
  <span class="leader"></span>
  <span class="indicator"><span class="plus">[+]</span><span class="minus">[-]</span></span>
</summary>
<div class="accordion-content" markdown="1">

**Build a slideshow** from the processed images and metadata:

> build a reveal.js slideshow with a Florida native plant inspired aesthetic featuring each of the butterflies, with the identification in the caption and the alt text beneath it

Sample output: [anastasiasalter.net/DistantCodingUMKC/images/](https://anastasiasalter.net/DistantCodingUMKC/images/index.html)

</div>
</details>

<p class="page-back" markdown="1"><span class="prompt-text">$ source</span> — more <a href="https://anastasiasalter.net/DistantCodingUMKC/">sample exercises with Claude Code</a>. <span class="prompt-text">$ cd ..</span> — <a href="{{ '/' | relative_url }}">back to the course packet</a></p>
