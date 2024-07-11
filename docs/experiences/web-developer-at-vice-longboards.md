---
sidebar_position: 11
title: "Web Developer for Vice Longboards"
tags: ["HTML", "JAVASCRIPT", "JQUERY", "CSS"]
---

import Experience from '@site/src/components/experience';

import ViceLongboardCover from '@site/static/img/ViceLongboards.webp';
import ViceLongboardCoverSmall from '@site/static/img/ViceLongboards-small.webp';

<Experience title={frontMatter.title} />

<img
    alt="ViceLongboard website cover"
    src={ViceLongboardCover}
    width="958"
    heigth="563"
    srcSet={ViceLongboardCover+" 958w,"+ViceLongboardCoverSmall+" 480w"}
    sizes="(max-width: 512px) 480px, 958px"
    loading="lazy"
/>