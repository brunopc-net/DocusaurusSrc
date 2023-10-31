"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[543],{9077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(5893),r=a(1151),o=a(8528);const i={sidebar_position:15,title:"Web Developer for CADS Informatique",tags:["PHP","WORDPRESS","MYSQL","JAVASCRIPT","JQUERY","HTML","CSS"]},s=void 0,l={id:"experiences/web-developer-at-cads-informatique",title:"Web Developer for CADS Informatique",description:"",source:"@site/docs/experiences/web-developer-at-cads-informatique.md",sourceDirName:"experiences",slug:"/experiences/web-developer-at-cads-informatique",permalink:"/fr/docs/experiences/web-developer-at-cads-informatique",draft:!1,unlisted:!1,tags:[{label:"PHP",permalink:"/fr/docs/tags/php"},{label:"WORDPRESS",permalink:"/fr/docs/tags/wordpress"},{label:"MYSQL",permalink:"/fr/docs/tags/mysql"},{label:"JAVASCRIPT",permalink:"/fr/docs/tags/javascript"},{label:"JQUERY",permalink:"/fr/docs/tags/jquery"},{label:"HTML",permalink:"/fr/docs/tags/html"},{label:"CSS",permalink:"/fr/docs/tags/css"}],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Web Developer for CADS Informatique",tags:["PHP","WORDPRESS","MYSQL","JAVASCRIPT","JQUERY","HTML","CSS"]},sidebar:"tutorialSidebar",previous:{title:"Web Developer for Les 2 Photographes",permalink:"/fr/docs/experiences/web-developer-at-les-2-photographes"}},c={},d=[];function p(e){return(0,n.jsx)(o.Z,{title:i.title})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p()}},8528:(e,t,a)=>{a.d(t,{Z:()=>u});a(7294);const n=(e,t)=>{const a=new Date(e),n=new Date(t);var r=1+12*(n.getFullYear()-a.getFullYear())+n.getMonth()-a.getMonth();return r<=0?0:r};var r=a(5893);const o=a(5469).ZT;function i(e){switch(e){case"permanent":return"Permanent position";case"mandate":return"Consulting mandate";case"internship":return"Internship";case"freelance":return"Freelance mandate"}return""}function s(e){return"mandate|freelance".includes(e.type)}function l(e){return new Date(e).toISOString().split("T")[0].substring(0,7)}function c(e){let{experience:t}=e;return"freelance"===t.type?null:t.employer?t.employerUrl?(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:t.employerUrl,children:t.employer})}):(0,r.jsx)("td",{children:t.employer}):t.url?(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:t.url,children:t.name})}):(0,r.jsx)("td",{children:t.name})}function d(e){let{experience:t}=e;return s(t)&&(t.url?(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:t.url,children:t.name})}):(0,r.jsx)("td",{children:t.name}))}function p(e){let{experience:t}=e;const a=l(t.startDate)+" to "+l(t.endDate),o=n(t.startDate,t.endDate);return(0,r.jsxs)("table",{style:{marginTop:20},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:["freelance"!==t.type&&(0,r.jsx)("th",{children:"Employer"}),s(t)&&(0,r.jsx)("th",{children:"Client"}),(0,r.jsx)("th",{children:"Position"}),(0,r.jsx)("th",{children:"Period"}),(0,r.jsx)("th",{children:"Total experience"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(c,{experience:t}),(0,r.jsx)(d,{experience:t}),(0,r.jsx)("td",{children:t.position}),(0,r.jsx)("td",{children:a}),(0,r.jsxs)("td",{children:[o," ",o>1?"months":"month"]})]})})]})}function m(e){let{experience:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Summary"}),(0,r.jsx)("p",{children:t.summary}),(0,r.jsx)("h2",{children:"Highlights"}),(0,r.jsx)("ul",{children:t.highlights.map((e=>(0,r.jsx)("li",{children:e},e)))}),t.cover&&(0,r.jsx)("img",{src:t.cover,alt:`${t.name} cover`})]})}const u=function(e){let{title:t,cover:a}=e;const n=o.filter((e=>{const a=t.split(" for ")[0],n=t.split(" for ")[1];return e.position===a&&e.name===n}))[0];return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:i(n.type)}),(0,r.jsx)(p,{experience:n}),(0,r.jsx)(m,{experience:n})]})}},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(7294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}},5469:e=>{e.exports=JSON.parse('{"ZT":[{"name":"National Bank of Canada","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","url":"https://www.nbc.ca/","position":"SDET Analyst","startDate":"2023-04","endDate":"2023-06","summary":"This mandate consisted of analyzing the efficiency of the team and proposing solutions to improve the speed of work. In particular, the potential gains of test automation was studied.","highlights":["Tested new AWS microservices to ensure compliance with legacy system","Interviewd developers and testers to fully understand their tasks, challenges and slowdowns","Analyzed bottlenecks, project context and automation costs","Delivered a factual analysis on test automation relevance"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"SDET Technical Lead","startDate":"2022-08","endDate":"2023-03","summary":"Building a new testing framework from scratch for the Swift payment infrastructure.","highlights":["Reduced the number of lines of code by 85% compared to legacy framework","Separated the test framework into several JAR deployed in Nexus: an API client for the main application (APS) and a payment injector to push payments in APS via Kafka Queues","Refactored the code using Unirest, Lombok, Jackson, Prowide Software libraries (Prowide core and Prowide ISO 2022), object inheritance, dependency injection, and Gherkin","Implemented Fail-fast principle and detailled logs","Trained 30 people within the SDET team via 7 presentations on the new test architecture"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"SDET Developer","startDate":"2022-03","endDate":"2022-07","summary":"Test automation for the Bankmate service, a Swift MT to MX(XML) format converter.","highlights":["Developed about 30 different tests to validate the behavior of Bankmate","Revised existing Bankmate test code to eliminate code duplication","Rewrited Bankmate legacy tests using Gherkin structure","Assisted my colleagues on the technical side"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"QA Developer","startDate":"2020-10","endDate":"2022-02","summary":"Test automation for the ICOP application and microservices","highlights":["Upgraded the test velocity from 1 manual test/hour to 400 tests/hour","Developed ~120 automated tests for the ICOP application using the Selenium library","Developed ~60 automated tests for ICOP microservices (ISRPB/IIAPB/CAOPB) via Rest Assured","Set up 4 Jenkins pipelines for the execution of the automated tests","Documented pipeline execution, code structure and maintenance guidance","Trained new employees on National Bank\'s Test Automation Framework"]},{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/","type":"permanent","position":"DevOps Developer","startDate":"2019-01","endDate":"2020-09","summary":"Having worked on the production support as a Application support Analyst and automated a lot of things there, I was recruted as a DevOps Developer as a full time intern employee.","highlights":["Refactored the Eztops to GMI accounting service, with monitoring and automated alerts","Deployed and configured of an ELK-based monitoring solution for 2,000 Autosys processes","Developed Powershell scripts to communicate between APIs (Elasticsearch and Autosys)","Managed deployments","Writed dynamic documentation scripts (Do-nothing scripts) to improve bug investigation time"]},{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/","type":"mandate","employer":"CGI","employerUrl":"https://www.cgi.com/","position":"Application Support Analyst","startDate":"2016-08","endDate":"2018-12","summary":"My first mandate after graduation to support several global finance applications. Lots of low-hanging fruits so having a development background, I took the opportunity to improve things.","highlights":["Reduced code/repos for financial reports production from 20 to 1 by developing a configurable, automated report producer using Groovy and Autosys scheduler","Configured and deployed a software and pod monitoring solution based on ELK","Planned the migration from the OnPrem Newtops to the Cloud based, modernized Eztops","Automated manual daily monitoring checks and alerts (by email)","Developed bash scripts to automate fixes for recurring operations failure","Supported production operations"]},{"name":"Constellio","position":"Developer","type":"internship","url":"https://www.constellio.com/","startDate":"2014-09","endDate":"2015-04","summary":"Constellio was a small business (growned and sold since) with a clientele that was mainly governmental. I built out a modular JavaScript web client for their flagship product.","highlights":["Deployed on the Government du Qu\xe9bec website, sucessfully handling 100,000 requests/day","Developed unit and integration tests for their product, using Mockito and JUnit"]},{"name":"Equisoft","type":"internship","position":"Junior Developer","url":"https://www.equisoft.com/","startDate":"2013-01","endDate":"2013-05","summary":"Implemented Entity framework on their subscription management software.","highlights":["First experience as a professional software developer"]},{"name":"Solutions Technologies","type":"freelance","position":"Web Developer","url":"https://www.stinfo.ca/","startDate":"2014-04","endDate":"2014-05","summary":"Following a loss of code following a virus, Solutions Technologies contacted me to restore their tailor-made and configurable e-commerce shopping cart module for their various customers.","highlights":["Developed the backend of a modular e-commerce shopping cart based on Magento"]},{"name":"Vice Longboards","type":"freelance","position":"Web Developer","startDate":"2013-08","endDate":"2013-12","summary":"The small longboard manufacturing company asked me to create their portfolio website","highlights":["Applied learnings from GTI350-Design and evaluation of graphic user interfaces"]},{"name":"FJB Casting","url":"https://fjbcasting.ca/","type":"freelance","position":"Web Developer","startDate":"2011-09","endDate":"2011-10","summary":"FJB casting needed a module for uploading and cropping photos of models for her bank of extras. The extras could then manage their images themselves on the Figuration Julie Breton website, a task that was cumbersome for the owner of the company.","highlights":["Integration of a cropping module and image upload in PHP/Javascript"]},{"name":"Heritage Software Inc.","type":"freelance","position":"Web Developer","startDate":"2011-05","endDate":"2011-05","summary":"Heritage Software needed a drag-and-drop file upload module for their website.","highlights":["Integrated a file upload module in PHP/Javascript"]},{"name":"Les 2 Photographes","url":"https://www.les2photographes.com/","type":"freelance","position":"Web Developer","startDate":"2009-02","endDate":"2009-05","summary":"A graphic designer approached me after having accepted a mandate beyond his competence. The goal being to deliver a transactional photographs website. I was proud to have been able to deliver the mandate on time despite the end of the school semester and very tight schedule.","highlights":["Built a recursive algorithm to display available images on the website","Automated the production of image snippets with watermarks to display available images","Secured the full size images so that they were inaccessible to the public","Automated the payment via PayPal API","Automated email sending with attached full size images once payment was made"]},{"name":"CADS Informatique","url":"https://cadsinformatique.com/","type":"internship","position":"Web Developer","startDate":"2010-01","endDate":"2010-05","summary":"First professional mandate (intership) which was an opportunity for me to gain experience in a direct relationship with various clients. I gained experience with both front-end and back-end.","highlights":["Redesigned a citizen news website based on Wordpress","Built a custom CMS","Designed a website for an elderly residence"]}],"f3":[{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/","area":"Entrepreneurship","studyType":"Minor","startDate":"2014-01","endDate":"2016-08","courses":["ENT201 - Business financial management","ENT202 - Introduction to entrepreneurship","ENT601 - Marketing and sales","ENT602 - Company management"]},{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/","area":"Software Engineering","studyType":"Bachelor","startDate":"2010-09","endDate":"2016-08","courses":["LOG120 - Software Design","LOG210 - Object-Oriented Design","LOG240 - Conception et \xe9valuation des interfaces utilisateurs","LOG320 - Data structures and Algorithms","LOG330 - Software Quality Assurance","LOG410 - Needs analysis and specifications","LOG430 - Software Architechture","LOG515 - project management","LOG530 - Software re-engineering","LOG635 - Artificial Intelligence Algorithms","LOG645 - Parrallel Computing","LOG660 - High performance Databases","LOG735 - Distributed Systems","LOG791 - Special projects","LOG792 - Graduation project in software engineering","GTI350 - Design and evaluation of graphic user interfaces (GUI)","GTI610 - Telecommunication networks","GTI619 - System Security","CHM131 - Chemistry and materials","ING150 - Static and Dynamic Physics","ING160 - Thermodynamics and Fluid mechanics","PHY332 - Electricity and Magnetism","PHY335 - Physics of electromagnetic waves","MAT145 - Differential and integral calculus","MAT210 - Logic and discrete mathematics","MAT265 - Differential equations","MAT350 - Probability and statistics","MAT472 - Linear algebra and space geometry","COM110 - Communication methods","GIA400 - Project profitability analysis","TIN501 - Environment, technology and society"]},{"institution":"C\xe9gep Andr\xe9-Laurendeau","url":"https://claurendeau.qc.ca/","endDate":"2010-05","startDate":"2007-08","area":"Computer Science","studyType":"DEC","courses":["201-420-AL - Mathematics and Computer Science","420-102-AL - Algorithms and programming I","420-111-AL - Computers and technical support","420-121-AL - Internet and multimedia","420-201-AL - Algorithms and programming II","420-211-AL - Operating systems","420-221-AL - Web Apps I","420-301-AL - Object Oriented Design and Programming I","420-311-AL - Network architecture","420-321-AL - Web Apps II","420-331-AL - Systems modeling and UML","201-421-AL - Statistics","420-401-AL - Object Oriented Design and Programming II","420-411-AL - Internet Services and Security","420-431-AL - Implementation of databases","401-420-AL - Enterprise Computer Systems","420-501-AL - Programming user interfaces","420-502-AL - Quality Assurance and Maintenance","420-521-AL - Multi-Tier Application Project","420-531-AL - Integrated Database Tools I","420-631-AL - Integrated Database Tools II"]}],"X1":[{"name":"Start with React","issuer":"OpenClassroom","url":"https://openclassrooms.com/fr/courses/7008001-debutez-avec-react","completion":100,"date":"2023-07-21"},{"name":"Create a Java Application with Spring Boot","issuer":"OpenClassroom","url":"https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot","completion":100,"date":"2023-07-05"},{"name":"Jenkins, From Zero To Hero: Become a DevOps Jenkins Master","issuer":"Udemy","url":"https://www.udemy.com/course/jenkins-from-zero-to-hero/","completion":100,"date":"2021-01-29","certificate":"UC-f5f51268-7bf8-4856-aca7-b72cfe46810e"},{"name":"Ansible for the absolute Beginner - Hands-On - DevOps","issuer":"Udemy","url":"https://www.udemy.com/course/learn-ansible/","completion":100,"date":"2020-06-02","certificate":"UC-6a8d8088-b7d3-4070-a43a-ffb14f2e4b34"},{"name":"Learn DevOps: Infrastructure Automation With Terraform","issuer":"Udemy","url":"https://www.udemy.com/course/learn-devops-infrastructure-automation-with-terraform/","completion":60},{"name":"Docker Mastery: with Kubernetes +Swarm from a Docker Captain","issuer":"Udemy","url":"https://www.udemy.com/course/docker-mastery/","completion":54},{"name":"Amazon Web Services (AWS) Certified - 4 Certifications!","issuer":"Udemy","url":"https://www.udemy.com/course/aws-certified-associate-architect-developer-sysops-admin/","completion":34}],"nb":[{"name":"Backend","level":"Senior","keywords":["API REST","API SOAP","Java","Spring Boot","Javascript","Node.js","Express","Python","PHP"]},{"name":"Frontend","level":"Intermediate","keywords":["React","JQuery","HTML"]},{"name":"DevOps","level":"Intermediate","keywords":["Deployment optimisation","CI/CD","Jenkins","GitHub Actions","Docker","ELK Stack"]},{"name":"Databases","level":"Intermediate","keywords":["Redis","NoSQL","SQL Server","Oracle","PostgreSQL","MariaDB/MySQL"]},{"name":"Scripting","level":"Intermediate","keywords":["Bash","Groovy","Powershell"]},{"name":"SDET/QA","level":"Senior","keywords":["Gherkin","Rest Assured","Selenium","HtmlUnit","Mockito","Spock","JUnit","PHPUnit","Xray"]},{"name":"Tools","keywords":["IntelliJ","PyCharm","WebStorm","Visual Studio Code","Visual Studio","Eclipse","Git","Bitbucket","Jira","Maven","Gradle","Nexus","Swagger"]}]}')}}]);