---
title: AI Apply Tool
cardTitle: AI Apply Tool
summary: Personal CrewAI project. Five agents turn a resume and a job posting into a tailored resume, cover letter and interview guide.
attribution: Personal project. Sole author.
order: 5
tags: [AI agents, Personal project]
repo: https://github.com/Bobolsky/Multi-Agent-AI-Apply-Tool
cardImage: /work/ai-apply-agents.svg
cardImageAlt: "Diagram: a job URL and a resume go through five CrewAI agents to produce a tailored resume, a cover letter and an interview guide"
---

A CrewAI multi-agent app that, given a resume and a job description, drafts a tailored resume, cover letter, and interview guide, with a preview and edit UI. Public Python repository (February 2025). A small applied-AI application rather than a computer-vision case study.

## The problem

Every job application asks for the same material, rewritten for a specific role: a resume that matches the posting, a cover letter, and preparation for the interview. The aim was to draft all three from two inputs, using only real information from the candidate’s resume.

## How it works

You upload a resume and paste the URL of a job description. Five agents, orchestrated with CrewAI, split the work; the results appear in a tabbed interface where each document can be previewed live, edited and downloaded.

<figure class="figure">
<div class="figure-frame"><img src="/work/ai-apply-agents.svg" alt="Diagram: the job description URL goes to the Job Description Architect and the resume goes to the Profiler Agent; their job requirements and structured profile feed the Resume Strategist, Cover Letter Specialist and Interview Preparation agents, which produce a tailored resume, a cover letter and an interview guide." width="800" height="500" loading="lazy" decoding="async"></div>
<figcaption>Two agents read the inputs; three agents write the outputs. Original diagram. <a href="/work/ai-apply-agents.svg">Open full size</a></figcaption>
</figure>

### The five agents

1. **Job Description Architect** — extracts the skills, experience and qualifications the job asks for.
2. **Profiler Agent** — builds a structured profile from the resume.
3. **Resume Strategist** — writes a one-page, ATS-friendly resume in Markdown, with no placeholders or fake information: only real data from the profile.
4. **Cover Letter Specialist** — writes a cover letter tailored to the role, again with no placeholders and only real information.
5. **Interview Preparation Agent** — prepares a technical interview guide: topics, likely questions and talking points.

## Tech

- Python
- CrewAI multi-agent orchestration (`pip install crewai[tools]`)
- Markdown output for the generated documents
- Tabbed UI with live preview, editing and download

## Roadmap (planned, not built)

The README lists ideas for later: PDF output, document templates, and job-board API integrations. None of these are implemented yet.

## Role

Sole author. Personal project, published as a [public repository](https://github.com/Bobolsky/Multi-Agent-AI-Apply-Tool).
