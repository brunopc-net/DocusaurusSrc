---
sidebar_position: 1
title: "This blog"
tags: ["React", "GitHub Actions", "VISUAL STUDIO CODE"]
---

## A markup based static website

Before my old web résumé, I was managing a self hosted Wordpress blog. The updates, plugins, security flaws, incompatibilities and slowness of the platform made it very time consuming.

I was planning a [blog/eboard running on Jekyll](https://github.com/brunopc-net/Jekyll-blog), and then I found Docusaurus. I was sold by:
1. The fact it is React based - availability of all react plugins
1. The better customizability (integration with JSX/MDX)
1. The fact that it was backed up by Facebook
1. The [great developement momemtum](https://docusaurus.io/blog/tags/release)

It was also the perfect opportunity to practice my new react skills after following [my React course](/docs/certifications/openclassroom_start_with_react/).

## Json Resume

This is a much deserved improvement over [my previous web résumé](https://github.com/brunopc-net/Eboard)

With the addition of [JSON Resume](https://jsonresume.org/), I was able to set a unique source of truth for my curriculum. All data for my blog [experiences](/docs/category/experiences/), [education](/docs/category/education/), [certifications](/docs/category/certifications/), [skills](/docs/about/#skills) and [my online résumé](https://registry.jsonresume.org/brunopc-net) are taken from that unique JSON file, wich is much faster and easy to manage.

To automate things, I set up a Github action script that update my Json Resume Gist when there's a change in my Docusaurus blog resume. That way, every time an update is done to my blog content, it's being automatically updated on my online resume as well.



