---
title: Pedestrian tracking and attribute recognition
cardTitle: Pedestrian tracking and attribute recognition
summary: Master’s thesis, sole author. Detects, tracks and describes pedestrians in video with YOLOX, Deep SORT and a multi-task attention network.
attribution: Master’s thesis. Sole author.
order: 3
tags: [Computer vision, Tracking, Master’s thesis]
repo: https://github.com/Bobolsky/PedVision-YOLOX-DeepSort-MTAN
cardImage: /work/pedvision-pipeline.svg
cardImageAlt: "Diagram: video frame, then YOLOX detection, then Deep SORT tracking, then MTAN attribute recognition"
---

My master’s thesis: a computer-vision system for pedestrian tracking and attribute recognition, using YOLOX for detection, Deep SORT for tracking, and an MTAN for pedestrian attribute recognition. Public Python repository; the full technical description is in the `report.pdf` included in the repo.

## The problem

Given a video and a configuration, the system has to do three things:

- **find** the people in each frame;
- **follow** each person over time, keeping the same identity even when they are briefly hidden;
- **describe** each person: gender, whether they carry a bag or wear a hat, and the colour of their upper and lower clothing.

On top of that, it analyses regions of interest (ROIs) in the scene: which people are present in each region, and their passages through it.

## Approach

<figure class="figure">
<div class="figure-frame"><img src="/work/pedvision-pipeline.svg" alt="Diagram of four steps: video frame, YOLOX detection, Deep SORT tracking, MTAN attribute recognition. Tracks also feed ROI analysis of presence and passages." width="800" height="500" loading="lazy" decoding="async"></div>
<figcaption>The PedVision pipeline: detect, track, then recognise attributes. Original diagram. <a href="/work/pedvision-pipeline.svg">Open full size</a></figcaption>
</figure>

### Detection: YOLOX

YOLOX is an **anchor-free** object detector: instead of matching objects against a fixed set of predefined box shapes, it predicts each box directly from the image features. Here it is used to find the people in every frame. The report selects YOLOX-X, the largest variant, as the detector.

### Tracking: Deep SORT

Deep SORT links detections across frames so each person keeps one identity over time:

- a **Kalman filter** predicts where each tracked person should be in the next frame;
- a small **CNN** turns each detection into an appearance embedding, so people can be told apart by how they look;
- the **Hungarian algorithm** matches new detections to existing tracks using both motion and appearance.

Appearance matching is what helps keep the same ID through short occlusions. The resulting tracks drive the ROI analysis of presence and passages.

### Attributes: Multi-Task Attention Network

Each tracked person is cropped and passed to a **Multi-Task Attention Network (MTAN)**. One shared backbone extracts features; task-specific attention modules then pick out what matters for each attribute, and separate heads predict gender, bag, hat, upper-clothing colour and lower-clothing colour.

<figure class="figure">
<div class="figure-frame"><img src="/work/pedvision-mtan.svg" alt="Block diagram: a person crop goes into a shared ResNet-50 backbone; five attention modules feed heads for gender, bag, hat, upper colour and lower colour." width="800" height="500" loading="lazy" decoding="async"></div>
<figcaption>Abstract view of the attribute network: shared ResNet-50 backbone, per-task attention, one head per attribute. Original diagram, simplified. <a href="/work/pedvision-mtan.svg">Open full size</a></figcaption>
</figure>

The network is trained on the **MIVIA PAR** dataset, which the report cites at 105,244 cropped-person images. Not every image is labelled for every attribute, so the report also uses a vision-language model (ViLT) with visual question answering to fill in missing annotations, which left significantly fewer unannotated labels.

## Tech

- Python
- YOLOX (YOLOX-X) for person detection
- Deep SORT for multi-object tracking (Kalman filter, appearance embeddings, Hungarian matching)
- Multi-Task Attention Network for pedestrian attribute recognition
- MIVIA PAR dataset; ViLT visual question answering for missing labels
- ROI-based analysis of presence and passages

## Role

Sole author. Master’s thesis for the MSc in Computer Engineering — AI & Robotics at the University of Salerno. The code is in the [public repository](https://github.com/Bobolsky/PedVision-YOLOX-DeepSort-MTAN); the README is short and points to `report.pdf`, which has the full method.
