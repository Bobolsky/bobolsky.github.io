---
title: Segmentation and 6D pose estimation for robotic manipulation
cardTitle: Segmentation and 6D pose estimation
summary: A real-time computer vision pipeline, from RGB camera data to robot grasp, for an industrial manufacturing client. Work done at Multiverse Computing.
attribution: Work done at Multiverse Computing (Machine Learning Engineer, February 2026–ongoing, Barcelona), for an industrial manufacturing client.
order: 1
tags: [Computer vision, 6D pose, Robotic manipulation]
cardImage: /work/6d-pose-pipeline.svg
cardImageAlt: "Diagram: RGB image, then segmentation, then 6D pose estimation, then robot grasp"
links:
  - label: SAM-6D paper
    href: https://arxiv.org/abs/2311.15707
    text: arxiv.org/abs/2311.15707 (CVPR 2024)
  - label: SAM-6D code
    href: https://github.com/JiehongLin/SAM-6D
credits:
  - src: /work/sam6d-overview.jpg
    title: SAM-6D overview figure
    author: Jiehong Lin, Lihua Liu, Dekun Lu, Kui Jia
    license: The upstream repository has no license file; reproduced here, resized, only as a credited reference to the published method. All rights remain with the authors
    source: SAM-6D GitHub repository (pics/overview_sam_6d.png)
    href: https://github.com/JiehongLin/SAM-6D/blob/main/pics/overview_sam_6d.png
---

I developed a real-time computer vision pipeline combining object segmentation and 6D pose estimation from RGB camera data, enabling autonomous robotic manipulation.

## The problem

A robot can only pick up an object reliably if it knows where the object is and how it is oriented. That is what a **6D pose** describes: the object's position in space (three values) and its orientation (three more), relative to the camera.

For an industrial manufacturing client, the task was to get that information from RGB camera data, in real time, so that a robot could manipulate objects on its own.

## Approach

The pipeline works in stages, each feeding the next:

1. **RGB image.** Frames come from an RGB camera.
2. **Segmentation.** The target objects are found and isolated in each frame.
3. **6D pose estimation.** For each segmented object, the pipeline estimates its position and orientation.
4. **Robot grasp.** The pose is handed to the robot, which uses it to grasp and manipulate the object.

<figure class="figure">
<div class="figure-frame"><img src="/work/6d-pose-pipeline.svg" alt="Diagram of four steps: RGB image, segmentation, 6D pose estimation, robot grasp." width="800" height="500" loading="lazy" decoding="async"></div>
<figcaption>High-level view of the pipeline: segmentation first, then 6D pose, then the robot grasp. Original diagram. <a href="/work/6d-pose-pipeline.svg">Open full size</a></figcaption>
</figure>

### In the spirit of SAM-6D

The design follows the idea behind **SAM-6D**, a public method by Jiehong Lin, Lihua Liu, Dekun Lu and Kui Jia, presented at CVPR 2024 ([paper](https://arxiv.org/abs/2311.15707), [code](https://github.com/JiehongLin/SAM-6D)). SAM-6D targets zero-shot 6D pose estimation of novel objects and splits the problem in two:

- an **Instance Segmentation Model**, which starts from Segment Anything to propose object masks and keep the ones that match the target objects;
- a **Pose Estimation Model**, which estimates the 6D pose of each segmented object.

The published method works on RGB-D input (colour plus depth). My work is not SAM-6D, and I am not one of its authors: it is a real-time industrial pipeline in the same spirit — segmentation, then 6D pose estimation, then a robot grasp — built for the client's RGB camera data.

<figure class="figure">
<div class="figure-frame"><img src="/work/sam6d-overview.jpg" alt="Overview figure of the SAM-6D method: RGB image, depth map and object models go into Segment Anything, object matching, coarse point matching and fine point matching, producing segmentations and 6D poses." width="1400" height="1368" loading="lazy" decoding="async"></div>
<figcaption>Reference figure: overview of the public SAM-6D method (Lin et al., CVPR 2024), shown to illustrate the published approach — not results from this project. Note that it uses depth as well as RGB.<span class="credit">Figure: SAM-6D authors, from the <a href="https://github.com/JiehongLin/SAM-6D">SAM-6D repository</a>; paper at <a href="https://arxiv.org/abs/2311.15707">arXiv:2311.15707</a>.</span></figcaption>
</figure>

## Tech

- Object segmentation and 6D pose estimation
- Input: RGB camera data
- Output: object poses for autonomous robotic manipulation
- Runs in real time

## Role

Machine Learning Engineer at Multiverse Computing (February 2026–ongoing, Barcelona). I developed the computer vision pipeline for the client. The client's name, data and results are not public.

## What I learned

This work sits where a public research method meets a real industrial setup: an idea published and evaluated by its authors on their own data, reshaped into a pipeline that has to run in real time on a client's RGB camera feed and produce poses a robot can act on.
