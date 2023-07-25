"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[6765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3841:(e,t,a)=>{a.d(t,{l:()=>n});const n=(e,t)=>{const a=new Date(e),n=new Date(t);var r;return r=12*(n.getFullYear()-a.getFullYear()),r-=a.getMonth(),r+=n.getMonth(),++r<=0?0:r}},3273:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(3841);const o=a(5469).ZT;function i(e){return"mandate|freelance".includes(e.type)}function s(e){return new Date(e).toISOString().split("T")[0].substring(0,7)}function l(e){let{experience:t}=e;return"freelance"===t.type?null:t.employer?t.employerUrl?n.createElement("td",null,n.createElement("a",{href:t.employerUrl},t.employer)):n.createElement("td",null,t.employer):t.url?n.createElement("td",null,n.createElement("a",{href:t.url},t.name)):n.createElement("td",null,t.name)}function c(e){let{experience:t}=e;return i(t)&&(t.url?n.createElement("td",null,n.createElement("a",{href:t.url},t.name)):n.createElement("td",null,t.name))}function p(e){let{experience:t}=e;const a=s(t.startDate)+" to "+s(t.endDate),o=(0,r.l)(t.startDate,t.endDate);return n.createElement("table",{style:{marginTop:20}},n.createElement("thead",null,n.createElement("tr",null,"freelance"!==t.type&&n.createElement("th",null,"Employer"),i(t)&&n.createElement("th",null,"Client"),n.createElement("th",null,"Position"),n.createElement("th",null,"Period"),n.createElement("th",null,"Total experience"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement(l,{experience:t}),n.createElement(c,{experience:t}),n.createElement("td",null,t.position),n.createElement("td",null,a),n.createElement("td",null,o," ",o>1?"months":"month"))))}function m(e){let{experience:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Summary"),n.createElement("p",null,t.summary),n.createElement("h2",null,"Highlights"),n.createElement("ul",null,t.highlights.map((e=>n.createElement("li",{key:e},e)))),t.cover&&n.createElement("img",{src:t.cover,alt:`${t.name} cover`}))}const u=function(e){let{title:t,cover:a}=e;const r=o.filter((e=>{const a=t.split(" for ")[0],n=t.split(" for ")[1];return e.position===a&&e.name===n}))[0];return n.createElement("div",null,n.createElement("h2",null,function(e){switch(e){case"permanent":return"Permanent position";case"mandate":return"Consulting mandate";case"internship":return"Internship";case"freelance":return"Freelance mandate"}return""}(r.type)),n.createElement(p,{experience:r}),n.createElement(m,{experience:r}),a&&n.createElement("img",{src:a,alt:t+" cover"}))}},1771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(3273);const i={sidebar_position:7,title:"Application Support Analyst for Soci\xe9t\xe9 G\xe9n\xe9rale",tags:["JAVA","GROOVY","SQL SERVER","LINUX","ORACLE","BASH","AUTOSYS","KAFKA","ANGULAR"]},s=void 0,l={unversionedId:"experiences/application-support-analyst-at-societe-generale",id:"experiences/application-support-analyst-at-societe-generale",title:"Application Support Analyst for Soci\xe9t\xe9 G\xe9n\xe9rale",description:"",source:"@site/docs/experiences/application-support-analyst-at-societe-generale.md",sourceDirName:"experiences",slug:"/experiences/application-support-analyst-at-societe-generale",permalink:"/docs/experiences/application-support-analyst-at-societe-generale",draft:!1,tags:[{label:"JAVA",permalink:"/docs/tags/java"},{label:"GROOVY",permalink:"/docs/tags/groovy"},{label:"SQL SERVER",permalink:"/docs/tags/sql-server"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"ORACLE",permalink:"/docs/tags/oracle"},{label:"BASH",permalink:"/docs/tags/bash"},{label:"AUTOSYS",permalink:"/docs/tags/autosys"},{label:"KAFKA",permalink:"/docs/tags/kafka"},{label:"ANGULAR",permalink:"/docs/tags/angular"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Application Support Analyst for Soci\xe9t\xe9 G\xe9n\xe9rale",tags:["JAVA","GROOVY","SQL SERVER","LINUX","ORACLE","BASH","AUTOSYS","KAFKA","ANGULAR"]},sidebar:"tutorialSidebar",previous:{title:"DevOps Developer for Soci\xe9t\xe9 G\xe9n\xe9rale",permalink:"/docs/experiences/devops_developer_at_societe_generale"},next:{title:"Developer for Constellio",permalink:"/docs/experiences/developer-at-constellio"}},c={},p=[],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:i.title,mdxType:"Experience"}))}d.isMDXComponent=!0},5469:e=>{e.exports=JSON.parse('{"OT":{"name":"Bruno Pettersen-Coulombe","shortname":"Bruno PC","label":"Full stack developer, B. Eng","image":"https://avatars.githubusercontent.com/u/6451835?v=4","email":"work@brunopc.net","website":"https://brunopc.net","summary":"My multi-faceted professional experience and my fast learning made me a profesionnal with great adaptability. World record holder, author, coach: I\'m a scientific mind in an athlete body. Addicted to caffeine and challenges.","location":{"city":"Montreal","countryCode":"CA"},"profiles":[{"network":"github","username":"brunopc-net","url":"https://github.com/brunopc-net"},{"network":"linkedin","username":"brunopc","url":"https://www.linkedin.com/in/brunopc/"},{"network":"twitter","username":"brunopc_net","url":"https://twitter.com/brunopc_net/"}]},"ZT":[{"name":"National Bank of Canada","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","url":"https://www.nbc.ca/","position":"SDET Analyst","startDate":"2023-04","endDate":"2023-06","summary":"This mandate consisted of analyzing the efficiency of the team and proposing solutions to improve the speed of work. In particular, the potential gains of test automation was studied.","highlights":["Tested new AWS microservices to ensure compliance with legacy system","Interviewd developers and testers to fully understand their tasks, challenges and slowdowns","Analyzed bottlenecks, project context and automation costs","Delivered a factual analysis on test automation relevance"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"SDET Technical Lead","startDate":"2022-08","endDate":"2023-03","summary":"Building a new testing framework from scratch for the Swift payment infrastructure.","highlights":["Reduced the number of lines of code by 85% compared to legacy framework","Separated the test framework into several JAR deployed in Nexus: an API client for the main application (APS) and a payment injector to push payments in APS via Kafka Queues","Refactored the code using Unirest, Lombok, Jackson, Prowide Software libraries (Prowide core and Prowide ISO 2022), object inheritance, dependency injection, and Gherkin","Implemented Fail-fast principle and detailled logs","Trained 30 people within the SDET team via 7 presentations on the new test architecture"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"SDET Developer","startDate":"2022-03","endDate":"2022-07","summary":"Test automation for the Bankmate service, a Swift MT to MX(XML) format converter.","highlights":["Developed about 30 different tests to validate the behavior of Bankmate","Revised existing Bankmate test code to eliminate code duplication","Rewrited Bankmate legacy tests using Gherkin structure","Assisted my colleagues on the technical side"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"QA Developer","startDate":"2020-10","endDate":"2022-02","summary":"Test automation for the ICOP application and microservices","highlights":["Upgraded the test velocity from 1 manual test/hour to 400 tests/hour","Developed ~120 automated tests for the ICOP application using the Selenium library","Developed ~60 automated tests for ICOP microservices (ISRPB/IIAPB/CAOPB) via Rest Assured","Set up 4 Jenkins pipelines for the execution of the automated tests","Documented pipeline execution, code structure and maintenance guidance","Trained new employees on National Bank\'s Test Automation Framework"]},{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/","type":"permanent","position":"DevOps Developer","startDate":"2019-01","endDate":"2020-09","summary":"Having worked on the production support as a Application support Analyst and automated a lot of things there, I was recruted as a DevOps Developer as a full time intern employee.","highlights":["Refactored the Eztops to GMI accounting service, with monitoring and automated alerts","Deployed and configured of an ELK-based monitoring solution for 2,000 Autosys processes","Developed Powershell scripts to communicate between APIs (Elasticsearch and Autosys)","Managed deployments","Writed dynamic documentation scripts (Do-nothing scripts) to improve bug investigation time"]},{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/","type":"mandate","employer":"CGI","employerUrl":"https://www.cgi.com/","position":"Application Support Analyst","startDate":"2016-08","endDate":"2018-12","summary":"My first mandate after graduation to support several global finance applications. Lots of low-hanging fruits so having a development background, I took the opportunity to improve things.","highlights":["Reduced code/repos for financial reports production from 20 to 1 by developing a configurable, automated report producer using Groovy and Autosys scheduler","Configured and deployed a software and pod monitoring solution based on ELK","Planned the migration from the OnPrem Newtops to the Cloud based, modernized Eztops","Automated manual daily monitoring checks and alerts (by email)","Developed bash scripts to automate fixes for recurring operations failure","Supported production operations"]},{"name":"Constellio","position":"Developer","type":"internship","url":"https://www.constellio.com/","startDate":"2014-09","endDate":"2015-04","summary":"Constellio was a small business (growned and sold since) with a clientele that was mainly governmental. I built out a modular JavaScript web client for their flagship product.","highlights":["Deployed on the Government du Qu\xe9bec website, sucessfully handling 100,000 requests/day","Developed unit and integration tests for their product, using Mockito and JUnit"]},{"name":"Equisoft","type":"internship","position":"Junior Developer","url":"https://www.equisoft.com/","startDate":"2013-01","endDate":"2013-05","summary":"Implemented Entity framework on their subscription management software.","highlights":["First experience as a professional software developer"]},{"name":"Solutions Technologies","type":"freelance","position":"Web Developer","url":"https://www.stinfo.ca/","startDate":"2014-04","endDate":"2014-05","summary":"Following a loss of code following a virus, Solutions Technologies contacted me to restore their tailor-made and configurable e-commerce shopping cart module for their various customers.","highlights":["Developed the backend of a modular e-commerce shopping cart based on Magento"]},{"name":"Vice Longboards","type":"freelance","position":"Web Developer","startDate":"2013-08","endDate":"2013-12","summary":"The small longboard manufacturing company asked me to create their portfolio website","highlights":["Applied learnings from GTI350-Design and evaluation of graphic user interfaces"]},{"name":"FJB Casting","url":"https://fjbcasting.ca/","type":"freelance","position":"Web Developer","startDate":"2011-09","endDate":"2011-10","summary":"FJB casting needed a module for uploading and cropping photos of models for her bank of extras. The extras could then manage their images themselves on the Figuration Julie Breton website, a task that was cumbersome for the owner of the company.","highlights":["Integration of a cropping module and image upload in PHP/Javascript"]},{"name":"Heritage Software Inc.","type":"freelance","position":"Web Developer","startDate":"2011-05","endDate":"2011-05","summary":"Heritage Software needed a drag-and-drop file upload module for their website.","highlights":["Integrated a file upload module in PHP/Javascript"]},{"name":"Les 2 Photographes","url":"https://www.les2photographes.com/","type":"freelance","position":"Web Developer","startDate":"2009-02","endDate":"2009-05","summary":"A graphic designer approached me after having accepted a mandate beyond his competence. The goal being to deliver a transactional photographs website. I was proud to have been able to deliver the mandate on time despite the end of the school semester and very tight schedule.","highlights":["Built a recursive algorithm to display available images on the website","Automated the production of image snippets with watermarks to display available images","Secured the full size images so that they were inaccessible to the public","Automated the payment via PayPal API","Automated email sending with attached full size images once payment was made"]},{"name":"CADS Informatique","url":"https://cadsinformatique.com/","type":"internship","position":"Web Developer","startDate":"2010-01","endDate":"2010-05","summary":"First professional mandate (intership) which was an opportunity for me to gain experience in a direct relationship with various clients. I gained experience with both front-end and back-end.","highlights":["Redesigned a citizen news website based on Wordpress","Built a custom CMS","Designed a website for an elderly residence"]}],"f3":[{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/","area":"Entrepreneurship","studyType":"Minor","startDate":"2014-01","endDate":"2016-08","courses":["ENT201 - Business financial management","ENT202 - Introduction to entrepreneurship","ENT601 - Marketing and sales","ENT602 - Company management"]},{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/","area":"Software Engineering","studyType":"Bachelor","startDate":"2010-09","endDate":"2016-08","courses":["LOG120 - Software Design","LOG210 - Object-Oriented Design","LOG240 - Conception et \xe9valuation des interfaces utilisateurs","LOG320 - Data structures and Algorithms","LOG330 - Software Quality Assurance","LOG410 - Needs analysis and specifications","LOG430 - Software Architechture","LOG515 - project management","LOG530 - Software re-engineering","LOG635 - Artificial Intelligence Algorithms","LOG645 - Parrallel Computing","LOG660 - High performance Databases","LOG735 - Distributed Systems","LOG791 - Special projects","LOG792 - Graduation project in software engineering","GTI350 - Design and evaluation of graphic user interfaces (GUI)","GTI610 - Telecommunication networks","GTI619 - System Security","CHM131 - Chemistry and materials","ING150 - Static and Dynamic Physics","ING160 - Thermodynamics and Fluid mechanics","PHY332 - Electricity and Magnetism","PHY335 - Physics of electromagnetic waves","MAT145 - Differential and integral calculus","MAT210 - Logic and discrete mathematics","MAT265 - Differential equations","MAT350 - Probability and statistics","MAT472 - Linear algebra and space geometry","COM110 - Communication methods","GIA400 - Project profitability analysis","TIN501 - Environment, technology and society"]},{"institution":"C\xe9gep Andr\xe9-Laurendeau","url":"https://claurendeau.qc.ca/","endDate":"2010-05","startDate":"2007-08","area":"Computer Science","studyType":"DEC","courses":["201-420-AL - Mathematics and Computer Science","420-102-AL - Algorithms and programming I","420-111-AL - Computers and technical support","420-121-AL - Internet and multimedia","420-201-AL - Algorithms and programming II","420-211-AL - Operating systems","420-221-AL - Web Apps I","420-301-AL - Object Oriented Design and Programming I","420-311-AL - Network architecture","420-321-AL - Web Apps II","420-331-AL - Systems modeling and UML","201-421-AL - Statistics","420-401-AL - Object Oriented Design and Programming II","420-411-AL - Internet Services and Security","420-431-AL - Implementation of databases","401-420-AL - Enterprise Computer Systems","420-501-AL - Programming user interfaces","420-502-AL - Quality Assurance and Maintenance","420-521-AL - Multi-Tier Application Project","420-531-AL - Integrated Database Tools I","420-631-AL - Integrated Database Tools II"]}],"nb":[{"name":"Backend","level":"Senior","keywords":["API REST","API SOAP","Java","Spring Boot","Javascript","Node.js","Express","Python","PHP"]},{"name":"Frontend","level":"Intermediate","keywords":["React","JQuery","HTML"]},{"name":"DevOps","level":"Intermediate","keywords":["Deployment optimisation","CI/CD","Jenkins","Docker","ELK Stack"]},{"name":"Databases","level":"Intermediate","keywords":["Redis","NoSQL","SQL Server","Oracle","PostgreSQL","MariaDB/MySQL"]},{"name":"Scripting","level":"Intermediate","keywords":["Bash","Groovy","Powershell"]},{"name":"SDET/QA","level":"Senior","keywords":["Gherkin","Rest Assured","Selenium","HtmlUnit","Mockito","Spock","JUnit","PHPUnit","Xray"]},{"name":"Tools","keywords":["IntelliJ","PyCharm","WebStorm","Visual Studio Code","Visual Studio","Eclipse","Git","Bitbucket","Jira","Maven","Gradle","Nexus","Swagger"]}]}')}}]);