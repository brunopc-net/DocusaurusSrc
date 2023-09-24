---
sidebar_position: 10
title: "Web Developer for Vice Longboards"
tags: ["HTML", "JAVASCRIPT", "JQUERY", "CSS"]
---

import Experience from '@site/src/components/experience';
import Img from '@site/static/img/ViceLongboards-cover.webp';
import ImgSmall from '@site/static/img/ViceLongboards-cover-478.webp';

<Experience title={frontMatter.title} />

<img 
    src={Img}
    alt={frontMatter.title+" cover"}
    loading="lazy"
    srcset={ImgSmall+" 478w, "+Img+" 958w"}
    sizes="(max-width: 510px) 478px"
/>