---
title: "Outlive your project bankruptcy"
description: "Like preventing a disease is way better then trying to cure it, preventing Software problems will save your organization a fortune and increase your productivity like no other"
authors: brunopc
enableComments: true
image: "./thumbnail-default.webp"
tags: ["health", "Software quality", "Technical debt", "Automated tests"]
---

I'm currently reading a fantastic book from [Peter Attia](https://twitter.com/PeterAttiaMD): [*Outlive - The Science & Art of Longevity*](https://peterattiamd.com/outlive/). The book emphasizes the fact that traditional medicine - Medicine 2.0 as he calls it - is shaped around the notion of healing at the very end of a disease lifespan, like the crew of the Titanic tried to save the ship at the last minute, even after being warned hours before the incident.

<img loading="eager" alt="Titanic crew realizing the shit" src={require('./thumbnail-default.webp').default} srcSet={require('./thumbnail-small.webp').default+" 480w,"+require('./thumbnail-medium.webp').default+" 566w,"+require('./thumbnail-large.webp').default+" 633w,"+require('./thumbnail-default.webp').default+" 778w,"+require('./thumbnail-xlarge.webp').default+" 964w"} sizes="(max-width: 512px) 480px,(max-width: 598px) 566px,(max-width: 665px) 633px,(max-width: 810px) 778px,(max-width: 996px) 964px,(max-width: 1024px) 566px,(max-width: 1368px) 633px,778px" width="964" height="485" />

<!-- truncate -->

Unfortunately, attempting to eliminate a rampant, evolving disease in its advanced stages significantly reduces the chances of recovery. Moreover, even in cases of complete healing, patients often find themselves in a state of suffering for the remainder of their lives. This is because the body, having deteriorated over decades, lacks the resilience to fully recover.

Peter Attia questions the relevance of healing someone in the late stages of life if it only prolongs a state of pain for several years. What's the purpose of being alive if you can't pursue what you love? Is the achievement of extending life by another five years considered a medical success if it means enduring prolonged suffering confined to a bed during that time?

<div class="centered">

[![Outlive - The-Science & Art of Longevity](./Outlive-The-Science&Art-of-Longevity.webp)](https://peterattiamd.com/outlive/)

</div>
 
Traditional medicine has embraced a proactive approach in some of its practices. For instance, it advises people not to smoke at all rather than suggesting they quit smoking only after reaching 50 years of age, which would be rather absurd. However, there is still ample room for improvement by extending this philosophy to other diseases such as diabetes. Dr. Attia, who refers to this as *Medicine 3.0*, advocates for a significantly more proactive approach. In essence, it strives to prevent encountering icebergs altogether before there's a need for a catastrophic course correction.

A lot can be done to help you live longer and, more importantly, live better for as long as possible. Exercise, nutrition, medications, and supplements are all covered in this cutting-edge book, which presents the latest medical evidence on how to stay as youthful and capable as you can. In other words, it explores how we can be the best version of ourselves for as long as possible.

How does this apply to software engineering?

[Successful software projects are still a minority](https://vitalitychicago.com/blog/agile-projects-are-more-successful-traditional-projects/). More than half of the projects hit at least one iceberg.

There's a lot of "icebergs" in the software engineering world. Today, I will talk about two of them:
- [Strategy absence](#strategy-absence)
- [Technical debt](#technical-debt)

## Strategy absence

> Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.
>
> -- [**Sun Tzu**](https://en.wikipedia.org/wiki/Sun_Tzu), author of [The Art of War](https://en.wikipedia.org/wiki/The_Art_of_War)

Software engineering is an optimization problem. You need to balance multiple software variables. Here's a list of the most important software qualities, that need to be considered:
- **Maintainability** - Defined by the easiness of code editing over time
- **Performance** or execution efficiency - Defined as resource usage or execution time
- **Reliability** - Defined as the availability (uptime) of the application
- **Accuracy** - Defined as returning the best result/answer to a request
- **Usability** - Defined as how simple it is for a new user to use the software without any guidance
- **Security** - Defined as its difficulty to hack
- **Compatibility** - Defined as how easy it is to connect it to another software/system

Every use case is different, and it's impossible to have all the best qualities in a product at once. A [Ford GT](https://hips.hearstapps.com/hmg-prod/images/2022-ford-gt-lm-edition-front-in-blue-1664914314.jpg) is not built to be convenient, a Dodge Caravan is not built to be fast. You could have a sports car more comfortable than the others, or have a minivan model faster than other minivans - but you'll never have a car faster than a sports car and more convenient than a minivan at the same time. 

You have to choose. Choosing not to decide will result in reality imposing a mediocre standard all across the board. Therefore, the focus from the development team must align with the business requirements of the product built.

Are we building a payment app? Availability will be the #1 factor, as being out-of-service would have tremendous consequences.

Are we building a video game? Execution performance is critical.

You get the point, these are easy answers. However, for a lot of products, the strategy is a lot more nuanced than this. It will depend on the marketing strategy of the company and the marketing strategy of the product. Do you sell cutting edge technology? I would  prioritize performance. Social status? Look at Apple products: prioritize usability. Peace of mind? Make reliability and security #1 on the list. Durability? Emphasize on maintainability and compatibility.

The development team needs to understand all that, because how you define your product will have impacts on how the software should be built. In a lot of businesses, there's absolutely no communication between the marketing team and the software development team. Without guidance, everyone has a different idea of what qualities should be prioritized. The team will lack cohesion: at best, work done by some developers will be unuseful. At worst, developers will be counterproductive with each other.

It's like health. What does "healthy" means? It depends so much on the context. Even a Coca-Cola can be healthy - for example, if you're giving it to someone having a hypoglycemia crisis.

A good health strategy should be personalized. Like Dr. Attia wrote in his book:
> This is where most people make a wrong turn. They want to take a shortcut, right to the tactics: *this* is what to eat (and not eat), *that* is how you should exercise, *these* are the supplements or medications you need, and so on. [...] Instead, I believe this is exactly where we need to hit pause and take a step back, lest we skip the most important step in the process: the strategy.

Yes, there are good coding practices and conventions, but everything has downsides. "Good practices" are not absolute, they make sense only for a particular context. For example:
- Adding security for a threat that doesn't exist is throwing money out of the window. This could in itself prevent you from adding security for a threat that is very likely to occur.
- Emphasis on "perfect code" for a temporary MVP will delay time to market, for a codebase that will most likely exist for a couple of weeks at worst. If you put too much time into the best practices at this stage, you may delay the time to market and sink the ship.

Does your team has a clear strategy?

## Technical Debt

In most engineering fields, there's execution wear involved. Let's take a car motor: carbon deposits, rust, friction, metal wear will make the mechanical parts less and less efficient, until the motor dies. Because of this, motor maintenance will prolong the lifespan of the car.

Let's say you change spark plugs or replace oil on your car. You are improving its execution (better ignition, better fuel economy, etc.). Moreover, because you put new parts, the lifespan of the motor is extended by your actions. There's less risk involved in replacing the spark plugs or changing the oil then there is to not do it. If you do it regularly, motor can last 200,000+ miles. If you don't do maintenance, it could blow up after 40,000 miles, or worst.

Software engineering is unique in the sense that code doesn't wear out. Computers are digital: therefore, results are either exact or wrong. Code never lies: it will execute exactly how you wrote it. If the code stays the same, the result and the execution cost will be the same from the 1st to the 1,000,000th execution. No need to clean or to replace parts. Contrary to other fields, time will not change the quality of the result.

Every time you edit the code, you have to change the already existent codebase that is, by definition, describing an exact behavior. So every time you're touching it, you pose the risk of completely ruin the end result of the algorithm. That's why developers are often afraid to edit the code. If they have to implement a new feature, they will often do it outside of the existing codebase. The problem with that? Duplicated logic, exponential code growth: the code will complexify more and more as time pass. This is our second iceberg: [technical dept](https://en.wikipedia.org/wiki/Technical_debt).

> Shipping first time code is like going into debt. A little debt speed development so long as it is paid back promptly with a rewrite... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a standstill under the debt load of an unconsolidated implementation.
>
> -- [**Ward Cunningham**](https://en.wikipedia.org/wiki/Ward_Cunningham), co-author of the [Manifesto for Agile Software Development](https://en.wikipedia.org/wiki/Agile_software_development#The_Agile_Manifesto)

The complexity can become so high that it can eventually freeze the entire project, where no one can understand what's going on anymore.

In summary, we can conclude that:
- In most engineering fields wear naturally increase with time
- In software engineering, wear (or technical debt) comes from human 

Multiple solutions can resolve this problem:
- The software team need to understand the importance of "cleaning the house" every time a feature has been done, even if it's not sexy. Shipping the feature in production, more often than not, doesn't mean the work is done. The code also requires a cleanup after that.
- Automated tests act like an insurance. If something breaks, it will be caught and it will be shown where it's breaking. That way, the team will be far more comfortable cleaning the house. Automated tests prevent problems on their own, but have another upside to them: developers will also be more comfortable working with legacy systems, so deeper their expertise will be. That is another reason why automated tests mean faster development time and fewer errors.
- The business department needs to be conscious that putting pressure on the software team multiple times in a row to deliver faster will increase the technical debt. It can be done, but it will be at the expense of future productivity.

Be aware of people that want a promotion as quick as possible. Like a government that borrow money to reduce taxes, they may favor the short-term productivity of the project by sacrificing the future vitality of the project.

## Have a double T-shape developper

These icebergs (strategy absence and technical debt) can easily ruin your project solvency, even to the point it can threaten your organization profitability. They have one thing in common: a lack or understanding between the software team and the business team. I've seen so many organizations with business and software departments not understanding and putting the blame on each other, and frankly, both were right in their recriminations. 

This is where a project manager that knows the inside-and-out of software development AND that has a business expertise is so precious. That person will alloy the business team to communicate in business terms (marketing strategy, upcoming finance delays, etc.) without worrying about managing a software team. After that, this interpret will be able to translate these needs into a complete software strategy, while teaching the business teams on the inevitable software hurdles that will occur along the way (like technical debt).

I emphasize that it has to be one individual. Otherwise, what's the point? Having two people for this role doesn't solve the problem: it would be like hiring a duo of a French teacher that doesn't speak English and English professor that doesn't speak French to translate an English book into French. Good luck with that.

A product owner, a scrum-master or a software project manager should know both worlds inside and out. Unfortunately, this job is sometimes occupied with someone who didn't ever write software at all, or sometimes, that doesn't have any background in marketing.

Sounds familiar?