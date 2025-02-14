---
title: Do you really need the complete stack?
description: Humans are prone to action, but the most efficient code is the code you won't write.
authors: brunopc
tags: [Wordpress, PHP, Jekyll, Javascript, React, SSG, Docusaurus]
image: "./thumbnail-default.webp"
enableComments: true
---

<img loading="eager" alt="Useful of useless?" src={require('./thumbnail-default.webp').default} srcSet={require('./thumbnail-small.webp').default+" 480w,"+require('./thumbnail-medium.webp').default+" 566w,"+require('./thumbnail-large.webp').default+" 633w,"+require('./thumbnail-default.webp').default+" 778w,"+require('./thumbnail-xlarge.webp').default+" 964w"} sizes="(max-width: 512px) 480px,(max-width: 598px) 566px,(max-width: 665px) 633px,(max-width: 810px) 778px,(max-width: 996px) 964px,(max-width: 1024px) 566px,(max-width: 1368px) 633px,778px" width="964" height="618" />

While thinking about this blog, my initial plan was to use [Wordpress](https://wordpress.com/). After all, I was familiar with the platform, having worked with PHP in the past. People generally dislike unnecessary changes, and I'm no alien. However, upon reflecting on my past experiences with WordPress, I realized it had its drawbacks. It wasn't free since I had to purchase a web hosting plan and manage the hosting myself. Additionally, there were frequent updates and security vulnerabilities to patch. Although it seemed wonderful initially, over time, the operational burdens increased significantly. Eventually, I stopped blogging because it became costly in terms of both money and energy.

<!-- truncate -->

After this reflection, I began searching for alternatives. Was there a better solution out there? That's when I came across [Jekyll](https://jekyllrb.com/) and decided to experiment with it. It appeared to be a great idea: no databases, no updates to worry about, just plain text content. The ability to post for free on GitHub Pages, with the option of a custom domain and without mandatory ads, was very appealing. It was simple, easy, and extremely stable. The very idea of just having to write plain-text Markdown files felt like using my new 1Zpresso k-Max grinder after years of using a cheap grinder from Amazon. It just worked, and marvelously well.

The idea of static site generators (SSGs) was so impressive that other SSGs started emerging. One such SSG was Docusaurus, based on the popular front-end framework React. Since I was more familiar with JavaScript/React than Ruby, I felt that React, as an HTML front-end framework on its own, integrated perfectly as an SSG. Moreover, the fact that Docusaurus was backed up by Meta gave me confidence that it would be supported for a long time. I decided to give Docusaurus a try. 

## CTCO - Cut the crap out

As humans, we can be peculiar at times. We try to solve one problem after another, but often, in doing so, we create more problems. Back then, I didn't need a database. Yes, it may have been "better" and "more technologically advanced" to use a DB instead of plain text HTML. However, in using a backend to manage the database, I needed a hosting plan. That hosting plan cost me money, which meant I had to work to pay for it. Essentially, I was working to buy myself more work. I did learn a lot, but I could have achieved more of what I really wanted at that time: establishing an online presence.

Having gained some experience in the industry now, I can say that [people tend to think that more is better](https://en.wikipedia.org/wiki/Action_bias). And it's not exclusive to software builders and managers. Asset manager Ben Carlson nailed it in his book [A Wealth of Common Sense](http://www.amazon.ca/gp/product/1119024927/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=1119024927&linkCode=as2&tag=canacoucpota-20). Dan Bortolotti explains it well in his Canadian Couch Potato blog, in the post [*Why Simple Is Still a Hard Sell*](https://canadiancouchpotato.com/2016/01/25/why-simple-is-still-a-hard-sell/):

> Ben Carlson […] reveals that he’s made the same discovery: investors resist simplicity. Yet Carlson believes it’s the right solution for most of us. “I’ve spent my entire career working in portfolio management,” he writes. “This experience has taught me that less is always more when making investment decisions. Simplicity trumps complexity. Conventional gives you much better odds than exotic.”

> A lot of complexity is just BS. “Complexity tends to be the default option that gets used to persuade investors to buy unnecessary investment products,” Carlson writes, “while the vast majority of people really just need to understand more conventional options to succeed.” When fund companies, media gurus and advisors peddle clever-sounding strategies, they’re creating “an illusion of intelligence and control.”

I want to point out the fact that Software Engineering is still very immature. According to the [Standish Group Chaos Report 2020](https://vitalitychicago.com/blog/agile-projects-are-more-successful-traditional-projects/), only 42% of agile projects and 13% of Waterfall projects were successful. In summary, the chances of a software project success (based on time, budget, targets, goals, value, and user satisfaction) are still less than half, even when using agile methodologies. And the more you simplify your solution, the lower the chances of complications.

What is your real goal? Do you want an illusion of control, or resolving the problem?

Personally, I choose the latter.