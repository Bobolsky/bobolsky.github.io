---
title: Pepper mall assistant
cardTitle: Pepper mall assistant
summary: University project, sole author. Pepper as a guardian and interactive assistant in a shopping mall, built on ROS, RASA and Whisper.
attribution: University cognitive-robotics project, University of Salerno. Sole author.
order: 4
tags: [Robotics, University project]
repo: https://github.com/Bobolsky/Pepper_Guardian_Mall
cardImage: /work/pepper-wikimedia.jpg
cardImageAlt: "A SoftBank Pepper humanoid robot in a shop (Wikimedia Commons photo, not from this project)"
cardImageFallback: /work/pepper-flow.svg
cardImageCredit: "Pepper robot photo by Tokumeigakarinoaoshima, Wikimedia Commons, CC0 1.0"
cardImageCreditHref: https://commons.wikimedia.org/wiki/File:SoftBank_pepper.JPG
credits:
  - src: /work/pepper-wikimedia.jpg
    title: SoftBank Pepper robot (photo, 18 July 2014)
    author: Tokumeigakarinoaoshima
    license: CC0 1.0, public domain dedication
    licenseHref: https://creativecommons.org/publicdomain/zero/1.0/
    source: Wikimedia Commons
    href: https://commons.wikimedia.org/wiki/File:SoftBank_pepper.JPG
  - src: /work/pepper-ros.jpg
    title: ROS architecture diagram
    author: Andrea Zinno
    license: From the public project repository (file "ROS Architecture.jpg"), resized for the web
    source: github.com/Bobolsky/Pepper_Guardian_Mall
    href: https://github.com/Bobolsky/Pepper_Guardian_Mall
---

An AI-assisted robotic assistant for a shopping-mall setting, with Pepper at the centre. The public repo describes person and face detection, a RASA chatbot, ROS, and Whisper speech-to-text, and can be run with Pepper on or off.

<figure class="figure figure-photo">
<div class="figure-frame"><img src="/work/pepper-wikimedia.jpg" alt="A white SoftBank Pepper humanoid robot with a chest tablet, standing on a tiled shop floor." width="1200" height="1600" loading="lazy" decoding="async"></div>
<figcaption>SoftBank’s Pepper, the humanoid robot the project is built around. Stock photo, not taken during this project.<span class="credit">Photo: Tokumeigakarinoaoshima, <a href="https://commons.wikimedia.org/wiki/File:SoftBank_pepper.JPG">Wikimedia Commons</a>, CC0 1.0.</span></figcaption>
</figure>

## The problem

In a shopping mall, Pepper acts as a **guardian and interactive assistant**: it notices when someone arrives, greets them, and holds a conversation — answering questions about what it can do, counting the people it sees, and helping to find a person.

## Approach

<figure class="figure">
<div class="figure-frame"><img src="/work/pepper-flow.svg" alt="Diagram: camera, then people and face detection on ROS topics, then a behaviour manager that reads visitor attributes from a database, connected to speech and dialogue (Whisper, RASA) and to Pepper actions (text-to-speech, animation, tablet, wake and rest)." width="800" height="500" loading="lazy" decoding="async"></div>
<figcaption>High-level flow: perception feeds a behaviour manager, which drives dialogue and Pepper’s actions. Original diagram. <a href="/work/pepper-flow.svg">Open full size</a></figcaption>
</figure>

- **Perception.** Person and face detection run on the camera feed and publish their results on ROS topics.
- **Visitor attributes.** Attributes such as gender, clothing colour and accessories are not computed on the robot: Pepper reads them from a database filled by video analytics, and uses them when talking to visitors.
- **Behaviour manager.** A central node coordinates the others through ROS services; its behaviour depends on the face-detection topic.
- **Speech and dialogue.** Whisper turns speech into text; a RASA chatbot handles intents and slots and produces the reply.
- **Pepper’s actions.** Separate nodes handle text-to-speech, animation, the chest tablet, and waking up or resting.
- **With or without the robot.** The system can be launched with Pepper on, or off — in which case it uses a PC camera and microphone.

<figure class="figure figure-light">
<div class="figure-frame"><img src="/work/pepper-ros.jpg" alt="ROS architecture diagram: an image publisher, people detector and face detector publish on topics; a behaviour manager subscribes to them and calls services for animation, tablet, text-to-speech, wake/rest, voice detection, audio speech recognition with Whisper, and dialogue with an external chatbot." width="1800" height="712" loading="lazy" decoding="async"></div>
<figcaption>ROS architecture: nodes, topics and services around the behaviour manager.<span class="credit">From the public <a href="https://github.com/Bobolsky/Pepper_Guardian_Mall">project repository</a> (“ROS Architecture.jpg”), resized. <a href="/work/pepper-ros.jpg">Open full size</a></span></figcaption>
</figure>

### Demo flow

The repository README walks through a demo, step by step:

1. The scene starts empty.
2. A person is detected, and Pepper greets them.
3. The visitor asks Pepper what it can do, and Pepper answers.
4. A **count-people** dialogue: Pepper reports how many people it sees.
5. A **find-person** dialogue, driven by RASA intents and slots, with the option to stop or reset.
6. Pepper says goodbye.

The README also links a demo video; see the [repository](https://github.com/Bobolsky/Pepper_Guardian_Mall).

## Tech

- SoftBank Pepper robot
- ROS (topics and services, behaviour manager)
- Person and face detection
- Whisper speech-to-text
- RASA chatbot (intents and slots)
- Text-to-speech, animation, tablet and wake/rest services

## Role

Sole author. University cognitive-robotics project at the University of Salerno.
