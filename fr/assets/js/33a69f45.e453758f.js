"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[5736],{1695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),s=t(9358),o=t(3809);const i={sidebar_position:5,title:"References"},l=void 0,c={id:"references",title:"References",description:"",source:"@site/docs/references.md",sourceDirName:".",slug:"/references",permalink:"/fr/docs/references",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"References"},sidebar:"tutorialSidebar",previous:{title:"Questrade Bot",permalink:"/fr/docs/projects/questrade_bot"}},u={},d=[];function p(e){return(0,r.jsx)(o.Z,{withXpLink:!0,references:s.references})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p()}},3809:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var r=t(3692),a=t(5893);function s(e){let{reference:n}=e;const t=n.name.replaceAll(".","").replaceAll(",","").replaceAll(" ","-").toLowerCase();const s=", "+n.position.en+", "+n.place;return(0,a.jsxs)("h3",{id:t,className:"anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module",children:[n.link?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{to:n.link,children:n.name}),s]}):n.name+s,(0,a.jsx)(r.Z,{to:"#"+t,className:"hash-link"})]})}function o(e){let{reference:n}=e;const t=n.experience;return(0,a.jsxs)("p",{className:"from_experience",children:["From my experience ",t.link?(0,a.jsx)(r.Z,{href:t.link,children:t.name}):t.name]})}function i(e){let{reference:n,withXpLink:t}=e;return(0,a.jsxs)("div",{className:"reference",children:[(0,a.jsx)(s,{reference:n}),(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:n.value.en})}),t&&(0,a.jsx)(o,{reference:n})]})}const l=function(e){let{references:n,withXpLink:t}=e;return(0,a.jsx)("ul",{id:"references",children:n.map((e=>(0,a.jsx)("li",{children:(0,a.jsx)(i,{reference:e,withXpLink:t},e.name)})))})}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},9358:e=>{e.exports=JSON.parse('{"basics":{"name":"Bruno Pettersen-Coulombe","image":"https://media.licdn.com/dms/image/v2/D4E03AQEmf856dXNHvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723578219089?e=1729123200&v=beta&t=Yc9nmZBIURhQwy_H9dsRsecxdXK3yIMLuOmr1eqpBqk","title":{"en":"B.Eng.","fr":"B.Ing."},"label":{"en":"Full Stack Developer, DevOps & QA specialist","fr":"D\xe9veloppeur full stack, sp\xe9cialiste DevOps & QA"},"experience":"11+","summary":{"en":"Entrepreneurial background, world record holder. Passionate about efficiency, optimization, business value & continuous learning.","fr":"Ant\xe9c\xe9dents entreprenariaux, recordman du monde. Passionn\xe9 par l\'efficience, l\'optimisation, la valeur d\'affaire et l\'apprentissage."},"location":{"city":"Montr\xe9al","countryCode":"CA"},"contact":{"email":"work@brunopc.net","website":"https://brunopc.net"},"profiles":[{"network":"github","username":"brunopc-net","url":"https://github.com/brunopc-net"},{"network":"linkedin","username":"brunopc","url":"https://www.linkedin.com/in/brunopc"},{"network":"twitter","username":"brunopc_net","url":"https://twitter.com/brunopc_net"}]},"languages":[{"language":"Fran\xe7ais","fluency":{"en":"Native speaker","fr":"Langue maternelle"}},{"language":"English","fluency":{"en":"Fluent","fr":"Avanc\xe9"}},{"language":"Espa\xf1ol","fluency":{"en":"Beginner","fr":"D\xe9butant"}}],"work":[{"position":{"en":"Backend Tech Lead","fr":"Lead technique Backend"},"type":{"en":"Consulting contract","fr":"Mandat de consultant"},"client":{"name":"Rona","url":"https://www.rona.ca/"},"employer":{"name":"Levio","url":"https://levio.ca/"},"startDate":"2024-02","endDate":"2024-07","summary":{"en":"Building of 4 microservices with Spring Boot for Selling-Tools project","fr":"\xc9criture de 4 microservices avec Spring Boot pour l\'\xe9quipe Selling-Tools"},"highlights":[{"en":"Built 4 microservices: Customer-ms (handling of Rona customers), Quotes-ms (handling of custom quotes), RRS (a product data reference service), Message-Receiver (a Tibco Queue client to handle quotes updates)","fr":"D\xe9velopement de 4 microservices: Customer-ms (gestion des clients), Quotes-ms (gestions des estimations), RRS (r\xe9f\xe9rencement de produits), Message-Receiver (client Tibco pour g\xe9rer les mises \xe0 jours des estim\xe9s)"},{"en":"Designed & implemented 300+ Cucumber scenarios/tests for all services","fr":"\xc7oncu et impl\xe9ment\xe9 300+ tests Cucumber pour ces services"},{"en":"Secured services with API key authorization, Token appId authentication, XSS & Content Security Policy (CSP) protections","fr":"S\xe9curis\xe9s les service avec clef API (authorisation), Token (authentification), protections XSS & Content Security Policy (CSP)"}],"skills":[{"name":"Backend","keywords":["Spring Boot","Java","Tibco"]},{"name":"Backend QA","keywords":["Cucumber","JUnit","Mockito"]},{"name":"DevOps","keywords":["Docker","CI/CD","GitLab pipelines","ELK stack"]},{"name":"Databases","keywords":["PostgreSQL","Flyway","H2","NoSQL"]},{"name":"Tools/Frameworks","keywords":["OpenAPI/Swagger","Postman","Jira"]},{"name":"Package managers","keywords":["Maven","Gradle"]},{"name":"IDE","keywords":["IntelliJ"]},{"name":"Version control","keywords":["Git","GitLab"]}],"experience":{"months":6,"years":0.5}},{"position":{"en":"DevOps Developer","fr":"D\xe9veloppeur DevOps"},"type":{"en":"Consulting contract","fr":"Mandat de consultant"},"employer":{"name":"Levio","url":"https://levio.ca/"},"client":{"name":"Rona","url":"https://www.rona.ca/"},"startDate":"2023-10","endDate":"2024-01","summary":{"en":"Implementing the 5 GitLab pipelines (Maven, Gradle, Yarn, Npm & Go Module) for Rona development teams.","fr":"Impl\xe9ment\xe9 les 5 pipelines Rona (Maven, Gradle, Yarn, Npm & Go Module) pour les \xe9quipes de d\xe9veloppement"},"highlights":[{"en":"Implemented 6 of the 23 steps for each pipeline, including DAST security & OWASP dependency scanning, Wiremock stubbing capabilities (Maven/Gradle) via Helm, Cypress for frontend testing (Npm/Yarn)","fr":"Impl\xe9ment\xe9 6 des 23 \xe9tapes pour chaque pipeline, incluant les analyses de s\xe9curit\xe9 DAST & OWASP, Wiremock pour les tests automatis\xe9s (Maven/Gradle) \xe0 l\'aide de Helm, Cypress pour les tests frontend (Npm/Yarn)"},{"en":"Documented and assisted the team for the Vault HA upgrade","fr":"Document\xe9 et assist\xe9 pour la mise \xe0 niveau de Vault en mode haute disponibilit\xe9 (HA)"}],"skills":[{"name":"DevOps","keywords":["CI/CD","GitLab pipelines","Docker","Helm","Kubernetes","Vault"]},{"name":"Backend QA","keywords":["Wiremock"]},{"name":"Frontend QA","keywords":["Cypress"]},{"name":"Scripting","keywords":["Bash"]},{"name":"Tools/Frameworks","keywords":["OpenAPI/Swagger","Jira"]},{"name":"Package managers","keywords":["Maven","Gradle","Npm","Yarn"]},{"name":"IDE","keywords":["Visual Studio Code"]},{"name":"Version control","keywords":["Git","GitLab"]},{"name":"Tools/Frameworks","keywords":["JFrog"]}],"experience":{"months":4,"years":0.5}},{"position":{"en":"SDET Tech Lead","fr":"Lead Technique en Assurance Qualit\xe9"},"type":{"en":"Consulting contract","fr":"Mandat de consultant"},"employer":{"name":"Levio","url":"https://levio.ca/"},"client":{"en":"National Bank of Canada","fr":"Banque Nationale du Canada","url":"https://www.nbc.ca/"},"startDate":"2020-10","endDate":"2023-06","summary":{"en":"Automated integration tests for PaymentHubs (Swift payment backend) and ICOP - a financial transaction security application.","fr":"Automatis\xe9 les tests d\'int\xe9gration de PaymentHubs (backend des paiements Swift) et ICOP - validation de s\xe9curit\xe9 des transactions"},"highlights":[{"en":"ICOP: Improved the test velocity 800x by developing ~200 tests using Selenium & REST Assured, automating execution with Jenkins","fr":"ICOP: Multipli\xe9 la vitesse des tests par 800 en d\xe9veloppant ~200 tests Selenium & REST Assured, autimatisant l\'ex\xe9cution avec Jenkins"},{"en":"PaymentHub: Reduced code by 85% after building a new multi-JAR testing framework from scratch using Unirest, Lombok, Jackson, Prowide Software libraries, object inheritance, dependency injection, Gherkin, Fail-fast principle and detailed logs","fr":"PaymentHub: R\xe9duit le code de 85% pour les tests automatis\xe9s apr\xe8s avoir construit un nouveau framework de test multi-JAR."},{"en":"Trained ~30 people within multiple QA teams on good Software architecture & test principles. Documented pipeline execution, code structure and maintenance guidance","fr":"Form\xe9 ~30 employ\xe9s de plusieurs \xe9quipes diff\xe9rentes sur l\'architecture logicielle/de test efficiente. Document\xe9 les pipelines d\'ex\xe9cution, la structure de code et le guide de maintenance."}],"skills":[{"name":"Backend QA","keywords":["JUnit","REST Assured"]},{"name":"Frontend QA","keywords":["HtmlUnit","Selenium","Saucelabs"]},{"name":"Backend","keywords":["Java","Kafka","MQ"]},{"name":"DevOps","keywords":["CI/CD","Jenkins","Vault"]},{"name":"Scripting","keywords":["Bash"]},{"name":"Tools/Frameworks","keywords":["Jira","Xray","Camunda","Postman"]},{"name":"Package managers","keywords":["Maven"]},{"name":"Version control","keywords":["Git","Bitbucket"]},{"name":"IDE","keywords":["IntelliJ"]},{"name":"Tools/Frameworks","keywords":["Nexus"]}],"experience":{"months":33,"years":3}},{"position":{"en":"DevOps Developer","fr":"D\xe9veloppeur DevOps"},"type":{"en":"Contract, then permanent","fr":"Contrat, puis permanent"},"employer":{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/"},"startDate":"2016-08","endDate":"2020-09","summary":{"en":"CGI consultant, then recruited as a permanent employee. My job was to improve production stability by automating as much as possible.","fr":"Consultant CGI, puis recrut\xe9 comme employ\xe9 permanent. Mon travail \xe9tait d\'am\xe9liorer la stabilit\xe9 de la production en automatisant le plus possible."},"highlights":[{"en":"Deployed an ELK based monitoring solution for 2,000 Autosys processes, multiples pods & software logs","fr":"D\xe9ploy\xe9 une solution de surveillance bas\xe9 sur ELK pour 2,000 processus Autosys, fichiers journaux (logs) et multiples pods."},{"en":"Developed ~25 scripts (bash, PowerShell) to automatize monitoring checks, recurring production failures fixes, and improve investigation time (Do-nothing scripts)","fr":"D\xe9velopp\xe9 ~25 scripts (bash, PowerShell) pour automatiser certaines t\xe2ches de surveillance, r\xe9gler des incidents de productions de fa\xe7on automatique et am\xe9liorer le temps d\'analyse des pannes (Do-nothing scripts)"},{"en":"Simplified by a factor of 10x the code for report production resulting in reduced maintenance overhead by developing a configurable report producer using Groovy and Autosys","fr":"Simplifier par un facteur de 10x le code pour la production de rapports afin de diminuer le temps de maintenance en d\xe9veloppant un producteur de rapport unique en Groovy"}],"skills":[{"name":"Backend","keywords":["Java","Groovy"]},{"name":"Backend QA","keywords":["Spock"]},{"name":"DevOps","keywords":["ELK stack","AutoSys Workload Automation"]},{"name":"Scripting","keywords":["PowerShell"]},{"name":"Databases","keywords":["SQL Server","Oracle","NoSQL"]},{"name":"Package managers","keywords":["Gradle"]},{"name":"Version control","keywords":["Git","GitHub"]},{"name":"IDE","keywords":["IntelliJ"]},{"name":"Tools/Frameworks","keywords":["Nexus"]}],"experience":{"months":50,"years":4}},{"position":{"en":"Software Developer","fr":"D\xe9veloppeur Logiciel"},"type":{"en":"Internship","fr":"Stage"},"employer":{"name":"Constellio","url":"https://www.constellio.com/"},"startDate":"2014-09","endDate":"2015-04","summary":{"en":"Constellio\'s flagship product was an intranet search application build on Lucene. I built a modular JavaScript web client for that product.","fr":"Le produit principal de Constellio \xe9tait un moteur de recherche interne bas\xe9 sur Apache Lucene. Construit un client web modulaire en JavaScript pour ce moteur de recherche afin qu\'il puisse \xeatre int\xe9gr\xe9 dans n\'importe quel site web."},"highlights":[{"en":"Deployed on the Government du Qu\xe9bec website, sucessfully handling 100,000+ requests/day","fr":"D\xe9ploy\xe9 sur le site du Gouvernement du Qu\xe9bec, g\xe9rant avec succ\xe8s plus de 100 000 requ\xeate/jour"},{"en":"Developed frontend unit tests for the web client (QUnit) and backend unit tests for Constellio (Mockito and JUnit)","fr":"D\xe9velopp\xe9 les tests frontend pour le client web (QUnit), ainsi que des tests unitaires backend avec Mockito/JUnit"}],"skills":[{"name":"Frontend","keywords":["JavaScript","jQuery","CSS"]},{"name":"Frontend QA","keywords":["QUnit","Selenium"]},{"name":"Backend","keywords":["Java"]},{"name":"Backend QA","keywords":["Mockito","JUnit"]},{"name":"IDE","keywords":["IntelliJ"]},{"name":"Version control","keywords":["Git","GitHub"]}],"experience":{"months":8,"years":0.5}},{"position":{"en":"Software Developer","fr":"D\xe9veloppeur Logiciel"},"type":{"en":"Internship","fr":"Stage"},"employer":{"name":"Equisoft","url":"https://www.constellio.com/"},"startDate":"2013-01","endDate":"2013-05","summary":{"en":"Database migration for the software Publisher Elements to Entity Framework ORM, automated email bug corrections, general maintenance. SCRUM development with JIRA project management software","fr":"Migration des DAO classiques \xe0 l\'ORM Entity Framework, corrections de bugs pour l\'envoit des courriels automatis\xe9s, maintenance g\xe9n\xe9rale."},"skills":[{"name":"Backend","keywords":["C#"]},{"name":"IDE","keywords":["Visual Studio"]},{"name":"Tools/Frameworks","keywords":["Jira"]}],"experience":{"months":5,"years":0.5}},{"position":{"en":"Web Developer","fr":"D\xe9veloppeur web"},"type":{"en":"Freelance","fr":"Contrat pigiste"},"employer":{"name":"ServiceBPC"},"startDate":"2010-01","endDate":"2016-07","experience":{"override":true,"months":26,"years":2},"summary":{"en":"ServiceBPC was my own freelance company that I created to gain profesional experience during my studies. Sucessfully delivered 15 web projects.","fr":"ServiceBPC \xe9tait mon entreprise pigiste que j\'ai cr\xe9\xe9 pour gagner de l\'exp\xe9rience durant mes \xe9tudes. Livr\xe9 avec succ\xe8s 15 projects web."},"highlights":[{"en":"Built multiple transactional websites - photography shop for Les 2 Photographes, modular Magento shopping cart for Solutions Technologies, virtual ticket backend system for Heritage Software","fr":"Cr\xe9\xe9 plusieurs sites Web transactionnels - boutique de photographie pour Les 2 Photographes, panier d\'achat modulaire Magento pour Solutions Technologies, backend de billets virtuels pour Heritage Software"},{"en":"Developed an image upload/cropping module for FJB casting, a file upload module for Heritage Software","fr":"D\xe9veloppement d\'un module de t\xe9l\xe9chargement/recadrage d\'images pour figuration Julie Breton, d\'un module de t\xe9l\xe9chargement de fichiers pour Heritage Software"},{"en":"D\xe9veloppement d\'un CMS personnalis\xe9 et refonte d\'un site d\'actualit\xe9s bas\xe9 sur Wordpress pour CADS Informatique","fr":"Developed a custom CMS & redesigned a news website based on Wordpress for CADS Informatique"}],"skills":[{"name":"Backend","keywords":["PHP"]},{"name":"Backend QA","keywords":["PHPUnit"]},{"name":"Frontend","keywords":["JavaScript","jQuery","HTML","CSS"]},{"name":"Databases","keywords":["MariaDB/MySQL"]},{"name":"Tools/Frameworks","keywords":["Magento","Wordpress"]}]}],"education":[{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/programmes-formations/microprogramme-2e-cycle-entrepreneuriat-scientifique-technologique","area":{"en":"Entrepreneurship","fr":"Entrepreneuriat"},"studyType":{"en":"Minor","fr":"Mineure"},"startDate":"2014-01","endDate":"2016-08","course_list":["ENT201 - Business financial management","ENT202 - Introduction to entrepreneurship","ENT601 - Marketing and sales","ENT602 - Company management"]},{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/programmes-formations/baccalaureat-genie-logiciel","area":{"en":"Software Engineering","fr":"G\xe9nie Logiciel"},"studyType":{"en":"Bachelor","fr":"Baccalaur\xe9at"},"startDate":"2010-09","endDate":"2016-08","course_list":["LOG120 - Software Design","LOG210 - Object-Oriented Design","LOG240 - Conception et \xe9valuation des interfaces utilisateurs","LOG320 - Data structures and Algorithms","LOG330 - Software Quality Assurance","LOG410 - Needs analysis and specifications","LOG430 - Software Architechture","LOG515 - project management","LOG530 - Software re-engineering","LOG635 - Artificial Intelligence Algorithms","LOG645 - Parrallel Computing","LOG660 - High performance Databases","LOG735 - Distributed Systems","LOG791 - Special projects","LOG792 - Graduation project in software engineering","GTI350 - Design and evaluation of graphic user interfaces (GUI)","GTI610 - Telecommunication networks","GTI619 - System Security","CHM131 - Chemistry and materials","ING150 - Static and Dynamic Physics","ING160 - Thermodynamics and Fluid mechanics","PHY332 - Electricity and Magnetism","PHY335 - Physics of electromagnetic waves","MAT145 - Differential and integral calculus","MAT210 - Logic and discrete mathematics","MAT265 - Differential equations","MAT350 - Probability and statistics","MAT472 - Linear algebra and space geometry","COM110 - Communication methods","GIA400 - Project profitability analysis","TIN501 - Environment, technology and society"],"skills":[{"name":"Backend","keywords":["Java","C/C++"]},{"name":"Frontend","keywords":["JavaScript","HTML","CSS"]},{"name":"Version control","keywords":["Git","GitHub","Bitbucket"]},{"name":"IDE","keywords":["Eclipse"]}]},{"institution":"C\xe9gep Andr\xe9-Laurendeau","url":"https://claurendeau.qc.ca/programmes/explorez-nos-programmes/techniques-de-linformatique","endDate":"2010-05","startDate":"2007-08","area":{"en":"Computer Science","fr":"Informatique de gestion"},"studyType":"DEC","course_list":["201-420-AL - Mathematics and Computer Science","420-102-AL - Algorithms and programming I","420-111-AL - Computers and technical support","420-121-AL - Internet and multimedia","420-201-AL - Algorithms and programming II","420-211-AL - Operating systems","420-221-AL - Web Apps I","420-301-AL - Object Oriented Design and Programming I","420-311-AL - Network architecture","420-321-AL - Web Apps II","420-331-AL - Systems modeling and UML","201-421-AL - Statistics","420-401-AL - Object Oriented Design and Programming II","420-411-AL - Internet Services and Security","420-431-AL - Implementation of databases","401-420-AL - Enterprise Computer Systems","420-501-AL - Programming user interfaces","420-502-AL - Quality Assurance and Maintenance","420-521-AL - Multi-Tier Application Project","420-531-AL - Integrated Database Tools I","420-631-AL - Integrated Database Tools II"],"skills":[{"name":"Backend","keywords":["Java","C/C++","PHP"]},{"name":"Frontend","keywords":["JavaScript","HTML","CSS"]},{"name":"Databases","keywords":["Oracle","MariaDB/MySQL"]},{"name":"IDE","keywords":["Eclipse"]}]}],"certificates":[{"name":"Learn DevOps: Infrastructure Automation With Terraform","url":"https://www.udemy.com/course/learn-devops-infrastructure-automation-with-terraform/","date":"2024-09-10","proof":"https://www.udemy.com/certificate/UC-9fd0722f-e01d-45d3-8f75-b47dedcf734d/","skills":[{"name":"DevOps","keywords":["Terraform","AWS"]}]},{"name":"Terraform associate","url":"https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003","date":"2024-08-29","proof":"https://credly.com/badges/63a9c17c-3f36-4f4f-99ab-3cc1d9e2b68f","skills":[{"name":"DevOps","keywords":["Terraform"]}]},{"name":"Azure Fundamentals","url":"https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals","date":"2024-08-02","proof":"https://learn.microsoft.com/api/credentials/share/en-us/BrunoPC-3603/D20B621C382C8F05","skills":[{"name":"DevOps","keywords":["Azure"]}]},{"name":"AWS Cloud Practitioner","url":"https://aws.amazon.com/certification/exams/","date":"2023-11-05","proof":"https://credly.com/badges/e7283417-5935-4b11-b498-53169f85a385","skills":[{"name":"DevOps","keywords":["AWS"]}]},{"name":{"en":"Start with React","fr":"D\xe9butez avec React"},"url":"https://openclassrooms.com/fr/courses/7008001-debutez-avec-react","date":"2023-07-21","skills":[{"name":"Frontend","keywords":["React","JavaScript"]}],"display":false},{"name":{"en":"Create a Java Application with Spring Boot","fr":"Cr\xe9ez une application avec Spring Boot"},"url":"https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot","date":"2023-07-05","skills":[{"name":"Backend","keywords":["Spring Boot","Java"]}],"display":false},{"name":"Jenkins, From Zero To Hero","url":"https://udemy.com/course/Jenkins-from-zero-to-hero/","date":"2021-01-29","proof":"https://udemy.com/certificate/UC-f5f51268-7bf8-4856-aca7-b72cfe46810e/","skills":[{"name":"DevOps","keywords":["Jenkins","Docker"]},{"name":"Scripting","keywords":["Bash"]}]},{"name":"Ansible for the absolute Beginner","url":"https://www.udemy.com/course/learn-ansible/","date":"2020-06-02","proof":"https://www.udemy.com/certificate/UC-6a8d8088-b7d3-4070-a43a-ffb14f2e4b34/","skills":[{"name":"DevOps","keywords":["Ansible"]}]},{"name":"Docker Mastery: with Kubernetes +Swarm from a Docker Captain","url":"https://www.udemy.com/course/Docker-mastery/","completion":"54%","skills":[{"name":"DevOps","keywords":["Docker","Kubernetes"]}],"display":false},{"name":"Amazon Web Services (AWS) Certified - 4 Certifications!","url":"https://www.udemy.com/course/aws-certified-associate-architect-developer-sysops-admin/","completion":"47%","skills":[{"name":"DevOps","keywords":["AWS"]}],"display":false}],"interests":[{"name":{"en":"Racing","fr":"Course"},"keywords":[{"en":"Karting","fr":"Karting"},{"en":"Cycling","fr":"Cyclisme"}]},{"name":"Coaching","keywords":[{"en":"Speed Skating","fr":"Patinage de vitesse"}]},{"name":{"en":"Writing","fr":"\xc9criture"},"keywords":[{"en":"Books, Speed Skating","fr":"Livres, patinage de vitesse"},{"en":"Blog","fr":"Blog"}]}],"references":[{"name":"Vera Jovicic, LL.M, PMP, PSM","position":{"en":"Project Manager","fr":"Gestionaire de projet"},"place":"Levio","link":"https://www.linkedin.com/in/vera-jovicic-ll-m-pmp-psm-0b63a49a/","experience":{"name":"DevOps Developer, Rona","link":"/docs/experiences/devops-developer-at-rona/"},"value":{"fr":"Je tiens \xe0 remercier Bruno d\'avoir pris le risque de rejoindre notre \xe9quipe! Sa pr\xe9sence a vraiment aid\xe9 \xe0 faire avancer le projet. J\'esp\xe8re vraiment que nous aurons l\'occasion de travailler ensemble \xe0 nouveau. Je suis s\xfbr qu\'il fera un excellent travail dans ses prochains projets.","en":"I would like to thank Bruno for taking a chance and joining our team! Having him on board really helped the project move along. I really hope we get to work together again. I\'m sure he will do great in whatever project he\'ll go next."}},{"name":"Ali Boutaba","position":{"en":"Team Manager","fr":"Chef d\'\xe9quipe"},"place":"Soci\xe9t\xe9 G\xe9n\xe9rale","link":"https://www.linkedin.com/in/ali-boutabaa-9ba1b886/","experience":{"name":"DevOps Developer, Soci\xe9t\xe9 G\xe9n\xe9rale","link":"/docs/experiences/devops_developer_at_societe_generale/"},"value":{"fr":"Bruno \xe9tait excellent pour planifier et mettre en \u0153uvre des am\xe9liorations bas\xe9es sur des donn\xe9es factuelles. Son pragmatisme a conduit l\'\xe9quipe vers des objectifs r\xe9alistes, ce qui men\xe9 \xe0 des am\xe9liorations mesurables. Il est un atout pr\xe9cieux pour tout chef d\'\xe9quipe qui a besoin de conseils et d\'arguments objectifs pour g\xe9rer les priorit\xe9s d\'un projet.","en":"Bruno was very good at planning and implementing improvements based on real data. His pragmatism led to realistic goals, which led to mesurable results. He is a great asset for any team leader that needs guidance and arguments that helps to manage the project budjet."}},{"name":"Pierre B\xe9langer, B.Eng., MBA","position":{"en":"Entrepreneurship Teacher","fr":"Professeur d\'entreprenaria"},"place":"\xc9TS","experience":{"name":"Entrepreneurship minor, \xc9TS","link":"/docs/education/entrepreneurship-minor/"},"value":{"fr":"Bruno a \xe9t\xe9 un participant actif et investi au microprogramme d\'entrepreneurship [...] M. Pettersen a d\xe9montr\xe9 un int\xe9r\xeat envers l\'entreprenariat dont toute la classe a pu b\xe9n\xe9ficier. Il a aussi d\xe9montr\xe9 une curiosit\xe9 \xe9vidente envers les outils de l\'entreprenariat et une volont\xe9 sentie d\'en ma\xeetriser le fonctionnement. C\'est donc avec plaisir que je r\xe9f\xe8re M. Pettersen \xe0 toute entreprise. Elle trouvera en Bruno un employ\xe9 vif et int\xe9ress\xe9 qui lui rendra d\'excellents services.","en":"I\'m thrilled to testify favorably on Mr. Pettersen\'s behalf. Bruno has been an active and invested participant in the entrepreneurship program, both in class and in the practical work where students are involved in influencing the content taught according to the needs of student entrepreneurs. Bruno demonstrated an interest in entrepreneurship that the whole class could benefit from during the discussions on different business scenarios. He also demonstrated an obvious curiosity towards the tools of entrepreneurship and a strong desire to master their operation. It is therefore with pleasure that I refer Mr. Pettersen to any company."}},{"name":"Nicolas Belisle","position":{"en":"VP Technology","fr":"VP Technologie"},"place":"Constellio","link":"https://www.linkedin.com/in/nicolas-b%C3%A9lisle-5b77764/","experience":{"name":"Software Developer, Constellio","place":"Constellio","link":"/docs/experiences/software_developer-at-constellio/"},"value":{"fr":"M. Pettersen-Coulombe a effectu\xe9 avec brio une refonte de l\'interface du moteur officiel de recherche du Gouvernement du Qu\xe9bec. Son travail, qui re\xe7oit actuellement plusieurs millions de requ\xeates par mois, est actuellement en production. Le moteur disposait d\'une technologie complexe, limitant le temps de r\xe9ponse. Bruno a con\xe7u une nouvelle interface bas\xe9 e sur les technologies de derni\xe8re g\xe9n\xe9ration. Les temps r\xe9ponse de celle ci sont dor\xe9navant beaucoup plus rapides. Plus important encore, l\u2019interface accro\xeet significativement la facilit\xe9 avec laquelle un client peut int\xe9grer l\u2019outil de recherche dans son site web. En r\xe9sum\xe9, je tiens \xe0 souligner l\u2019initiative, le souci d\u2019am\xe9lioration continue et l\u2019autonomie d\xe9montr\xe9e par Bruno Pettersen-Coulombe.","en":"Bruno brilliantly overhauled the interface of the official search engine of the Government of Quebec during his internship at Constellio. The engine, which handles millions of searches, had a flexible but complex interface technology that limited response times. Bruno designed the new interface based on the latest technologies (Ajax/jQuery). The work was a success! I would like to highlight Bruno\'s initiative, continuous improvement efforts, and demonstrated autonomy. It is a real pleasure to work with him!"}},{"name":"Louis Parent","position":{"en":"Finance Teacher","fr":"Professeur de finance"},"place":"\xc9TS","link":"https://www.linkedin.com/in/louis-parent-4866a614/","experience":{"name":"Entrepreneurship minor, \xc9TS","link":"/docs/education/entrepreneurship-minor/"},"value":{"fr":"Bruno \xe9tait l\'un des \xe9tudiants les plus brillants que j\'ai eus. Il a une excellente compr\xe9hension de la th\xe9orie financi\xe8re!","en":"Bruno was one of the brightest student I have had. He has great understanding of Financial Theory!"}},{"name":"Denis Tremblay, M.Sc","position":{"en":"President","fr":"Pr\xe9sident"},"place":"Alliance Management","link":"https://www.linkedin.com/in/denis-tremblay-m-sc-8310017/","experience":{"name":"Web Developer, ServiceBPC","link":"/docs/experiences/web-developer-at-service-bpc/"},"value":{"fr":"Bruno nous a offert un service rapide et efficace, sa pr\xe9occupation client\xe8le est bien remplie. Nous n\'h\xe9siterons pas \xe0 l\'embaucher au besoin.","en":"Bruno provided us with fast and efficient service. His customer care is excellent. We would not hesitate to hire him again if needed."}}],"projects":[{"name":"Docusaurus Blog","url":"https://brunopc.net/","summary":{"en":"My online web presence","fr":"Ma pr\xe9sence en ligne"},"skills":[{"name":"Frontend","keywords":["Docusaurus","React","MDX","JavaScript"]}]},{"name":"Reactsume","url":"https://brunopc-net.github.io/Reactsume","summary":{"en":"React based resume with custom themes and multilanguage support ","fr":"CV en ligne multilangues avec support de th\xe8mes bas\xe9 sur React"},"skills":[{"name":"Backend","keywords":["Node.js"]},{"name":"Frontend","keywords":["React","JavaScript"]},{"name":"DevOps","keywords":["GitHub Actions"]},{"name":"IDE","keywords":["Visual Studio Code"]}]},{"name":"Horus","url":"https://brunopc-net.github.io/Horus","summary":{"en":"A Node.js/React short term weather report","fr":"Application m\xe9t\xe9o court terme en React/Node.js"},"skills":[{"name":"Backend","keywords":["Node.js"]},{"name":"Frontend","keywords":["React","JavaScript"]},{"name":"DevOps","keywords":["GitHub Actions"]},{"name":"IDE","keywords":["Visual Studio Code"]}]},{"name":"Cher Ami","summary":{"en":"Serverless Node.js email sender","fr":"Exp\xe9diteur de courriels en Node.js"},"skills":[{"name":"Backend","keywords":["Node.js"]},{"name":"Scripting","keywords":["JavaScript"]}]},{"name":"Cerberus","summary":{"en":"A Python file backup application","fr":"Application de sauvegarde de fichiers en Python"},"skills":[{"name":"Backend","keywords":["Python"]},{"name":"DevOps","keywords":["Docker","Jenkins"]},{"name":"IDE","keywords":["Pycharm"]}]},{"name":"Questrade Bot","summary":{"en":"Python Questrade stock buyer","fr":"Acheteur d\'actions Questrade en Python"},"skills":[{"name":"Backend","keywords":["Python"]},{"name":"Databases","keywords":["Redis"]},{"name":"IDE","keywords":["Pycharm"]}]}],"skills":[{"name":"Backend","keywords":["Spring Boot","Java","Tibco","Kafka","MQ","Groovy","C#","PHP","C/C++","Node.js","Python"]},{"name":"Backend QA","keywords":["Cucumber","JUnit","Mockito","Wiremock","REST Assured","Spock","PHPUnit"]},{"name":"DevOps","keywords":["Docker","CI/CD","GitLab pipelines","ELK stack","Helm","Kubernetes","Vault","Jenkins","AutoSys Workload Automation","Terraform","AWS","Azure","Ansible","GitHub Actions"]},{"name":"Frontend","keywords":["JavaScript","jQuery","CSS","HTML","React","Docusaurus","MDX"]},{"name":"Frontend QA","keywords":["Cypress","HtmlUnit","Selenium","Saucelabs","QUnit"]},{"name":"Databases","keywords":["PostgreSQL","Flyway","H2","NoSQL","SQL Server","Oracle","MariaDB/MySQL","Redis"]}]}')}}]);