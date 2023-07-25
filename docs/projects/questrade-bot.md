---
sidebar_position: 4
tags: [python]
---

import MarkdownLink from '@site/src/components/MarkdownLink';

# QuestradeBot

Bot stock buyer for Questrade. Deprecated.

<MarkdownLink
  to='https://github.com/brunopc-net/QuestradeBot'
  text='Repository'
/><br/><br/>

I wanted a script to automate a task I have to do regularly: to buy the stocks in my portfolio from the added balance I send to it every paycheck.

I use the old [Canadian Couch Potato](https://canadiancouchpotato.com/) portfolio agressive model, so here's what I have to order every two weeks:

- XAW.TO (50%)
- VCN.TO (25%)
- ZAG.TO (25%)

Depending on the price of these ETF from one day to another, the amount of shares to buy will vary.

I stopped this project because [Questrade API discontinued order entry](https://www.reddit.com/r/Questrade/comments/82qjv3/questrade_api_discontinuing_order_entry/), so it is now impossible to automate the buying process - unless relying on a sub-optimal solution like Selenium.

I since use https://passiv.com/ to *almost* automate my stock orders: I just need to click a button to confirm.