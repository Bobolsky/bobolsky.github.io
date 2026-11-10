---
title: Physics-informed synthetic data for fleet energy management
cardTitle: Physics-informed synthetic data
summary: Generative pipeline for unseen winter fleet scenarios, used to plan EV charging for AVL and Austrian Post. Work done at Multiverse Computing.
attribution: Work done at Multiverse Computing (Machine Learning Engineer, February 2026–ongoing, Barcelona), for a fleet energy-management project.
order: 2
tags: [Synthetic data, Generative models, Energy]
cardImage: /work/synthetic-data-pipeline.svg
cardImageAlt: "Diagram: real summer data, then a physics-informed generative model, then synthetic winter scenarios, then charging strategy evaluation"
links:
  - label: Case study
    href: https://multiversecomputing.com/success-story/planning-winter-ev-charging-for-a-6-000-vehicle-fleet-with-synthetic-data
    text: Planning Winter EV Charging for a 6,000-Vehicle Fleet with Synthetic Data (Multiverse Computing)
---

I built a physics-informed generative pipeline using CENTS and Diffusion-TS to extrapolate real summer fleet data into previously unseen winter operating conditions.

<div class="callout">
<p><strong>Public case study:</strong> Multiverse Computing has published this project as <em>Planning Winter EV Charging for a 6,000-Vehicle Fleet with Synthetic Data</em> — how AVL used synthetic fleet operational data to plan winter charging for a 6,000-vehicle electric delivery fleet before the first cold season arrived.</p>
<p class="muted">Client: AVL + Austrian Post · Industry: Energy · Use case: EV fleet charging and depot energy optimization · Model used: Diffusion-TS</p>
<a class="btn btn-primary" href="https://multiversecomputing.com/success-story/planning-winter-ev-charging-for-a-6-000-vehicle-fleet-with-synthetic-data" rel="noopener" target="_blank">Read the full case study<span class="visually-hidden"> (opens in a new tab)</span></a>
</div>

## The problem

Austrian Post delivers mail nationwide on an electric fleet. Electric vehicles lose efficiency in the cold: they draw more power and charge more slowly, which puts extra strain on the electricity grid. The systems the fleet had tested had only been validated against summer data.

The only measured data came from summer:

- state-of-charge and odometer readings from the electric vans, across several summer months;
- on-site weather data;
- on-site solar production data.

No winter operational data existed yet, so a charging strategy could not be validated before the cold season. Waiting for a full winter of real measurements would have delayed the pilot by an entire season. And the physics that matter most for depot planning — higher consumption and slower charging — only appear in data the fleet had never recorded.

## Approach

Multiverse Computing built SynthiaFleet to close that gap, generating the winter operational data needed to schedule charging, split demand between solar and grid supply, and keep the depot from overloading at peak hours.

On this project, I built a physics-informed generative pipeline using CENTS and Diffusion-TS. It takes the real summer measurements and extrapolates them into winter operating conditions the fleet had not yet seen, so that a charging strategy can be tested before the cold season instead of after it.

<figure class="figure">
<div class="figure-frame"><img src="/work/synthetic-data-pipeline.svg" alt="Diagram of four steps: real summer data (state of charge, odometer, weather, solar production), a physics-informed generative model (CENTS, Diffusion-TS), synthetic winter scenarios, and charging strategy evaluation (scheduling, solar versus grid, depot load at peak hours)." width="800" height="500" loading="lazy" decoding="async"></div>
<figcaption>From summer measurements to synthetic winter scenarios, which are then used to evaluate a charging strategy. Original diagram, high-level view. <a href="/work/synthetic-data-pipeline.svg">Open full size</a></figcaption>
</figure>

## Tech

- Generative models for time series: Diffusion-TS and CENTS
- Physics-informed generation, to extrapolate beyond the conditions seen in the real data
- Inputs: state of charge, odometer, on-site weather and solar production
- Downstream use: charging schedules, solar versus grid supply, depot load at peak hours

## Role

Machine Learning Engineer at Multiverse Computing (February 2026–ongoing, Barcelona). I built the physics-informed generative pipeline described above. For the full story of the project, see the [public case study](https://multiversecomputing.com/success-story/planning-winter-ev-charging-for-a-6-000-vehicle-fleet-with-synthetic-data).
