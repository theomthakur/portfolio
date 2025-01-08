"use strict";(self.webpackChunkportfolio_3=self.webpackChunkportfolio_3||[]).push([[580],{9580:function(e,t,a){a.r(t),a.d(t,{OtherProjects:function(){return m}});var n=a(1413),i=a(9439),o=a(2791),r=a(8735),s=a(2504),c=a(3880),d=a(3046),l=a(3362),u=a(3399),p=a(184),g=function(e){var t=e.id,a=e.title,n=e.demo,i=e.github,o=e.tags,s=e.description,c=e.readMore,g=e.image,h=e.jpg;return(0,p.jsxs)(r.kC,{alignItems:{base:"flex-start",lg:"center"},gap:"10",id:"other-project-card-".concat(t),py:{base:"8",md:"8"},children:[(0,p.jsx)(r.xu,{flex:"0.25",display:{base:"none",md:"block"},"data-aos":"fade-up","data-aos-offset":"200",children:(0,p.jsxs)("picture",{children:[(0,p.jsx)("source",{type:"image/webp",srcSet:g}),(0,p.jsx)("source",{type:"image/jpeg",srcSet:h}),(0,p.jsx)(d.Ee,{ignoreFallback:!0,src:g,borderRadius:"xl",alt:"".concat(a,"-cover-image")})]})}),(0,p.jsxs)(r.kC,{w:"100%",direction:"column",alignContent:"center",flex:1,children:[(0,p.jsxs)(r.xu,{children:[(0,p.jsx)(r.X6,{fontSize:"2xl","data-aos":"fade-down","data-aos-offset":"200",children:a}),(0,p.jsx)(r.xv,{py:"2","data-aos":"fade","data-aos-delay":"200","data-aos-offset":"200",children:s}),(0,p.jsx)(l.$,{tags:o,id:t,size:"xs"})]}),(0,p.jsx)(u.K4,{readMore:c,github:i,demo:n})]})]})},h=a(3853),m=function(){var e=(0,o.useState)(3),t=(0,i.Z)(e,2),a=t[0],d=t[1],l=function(e){var t,a=null===(t=document.getElementById("other-project-card-".concat(c.rH.otherProjects[e].id)))||void 0===t?void 0:t.getBoundingClientRect().top;a&&window.scrollTo({top:a+window.scrollY-64,behavior:"smooth"})};return(0,p.jsxs)(r.xu,{children:[c.rH.otherProjects.map((function(e,t){return(0,p.jsx)("div",{children:t<a&&(0,p.jsx)(g,(0,n.Z)({},e),e.id)},e.id)})),(0,p.jsx)(r.kC,{justifyContent:"center",py:"8",display:c.rH.otherProjects.length>3?"flex":"none",children:a<c.rH.otherProjects.length?(0,p.jsx)(s.zx,{rightIcon:(0,p.jsx)(h.bTu,{}),variant:"link",onClick:function(){var e=a;d(a+3),setTimeout((function(){l(e)}),1)},children:"Show More"}):(0,p.jsx)(s.zx,{rightIcon:(0,p.jsx)(h.rH8,{}),variant:"link",onClick:function(){d(3),l(3)},children:"Show Less"})})]})}},3880:function(e,t,a){a.d(t,{VY:function(){return D},nl:function(){return i},rH:function(){return M},r0:function(){return J}});var n,i,o=a(5987),r=a(1413),s=a(9439),c=a(4942),d=a(2791),l=a(8735),u=a(1265),p=JSON.parse('{"name":"Om Thakur","logoType":{"mobile":"OT","desktop":"Om Thakur"},"mainPicture":"/assets/photo.webp","mainPictureJPG":"/assets/photo.jpeg","pronunciation":"/om-tha-kur/","cssVarPrefix":"ot","email":"ot2131@nyu.edu","linkedin":"https://www.linkedin.com/in/theomthakur/","github":"https://github.com/theomthakur","resume":"https://drive.google.com/file/d/1-F7UQ7MJjVd28mym3O3oAqwxKWiTwU7T/view?usp=sharing","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/theomthakur/"},{"type":"github","link":"https://github.com/theomthakur"},{"type":"mail","link":"mailto:ot2131@nyu.edu"}]}'),g=JSON.parse('{"headline":"Hello! I am Om Thakur.","picture":"/assets/landing/photo.webp","jpg":"/assets/landing/face.jpg"}'),h=JSON.parse('[{"id":"featured-project-mlops","title":"MLOps Pipeline: End-to-End ML System with Cloud Deployment","year":"June 2024 - July 2024","location":"Machine Learning","tags":["Python","MLflow","AWS","Docker","Scikit-learn","NumPy"],"description":"Architected an end-to-end MLOps pipeline using MLflow and custom components, implementing automated data processing and model training workflows that reduced experiment tracking time by 60% while maintaining 95% reproducibility across deployments. Engineered CI/CD pipeline using GitHub Actions for ML model deployment to AWS EC2, containerizing the application with Docker and implementing automated testing, resulting in 40% faster deployment cycles and 99.9% system uptime.","image":"/assets/featured-projects/mlops.webp","jpg":"/assets/featured-projects/mlops.jpeg"},{"id":"featured-project-llmb","title":"LLM Based Q&A System for Scalable E-Learning Support","year":"May 2024 - June 2024","location":"Large Language Models","tags":["LangChain","Google PaLM","Hugging Face","Python"],"description":"Developed a scalable AI-driven Q&A platform powered by LangChain and Google PaLM, automating support for 180,000+ students, reducing query resolution time by 90% and handling 1,000+ inquiries daily. Enhanced query resolution accuracy to 95% by implementing vector similarity search with FAISS and Hugging Face embeddings, reducing manual intervention by 80% across 20,000+ student support cases.","image":"/assets/featured-projects/llmb.webp","jpg":"/assets/featured-projects/llmb.png"},{"id":"featured-project-cricket","year":"May 2024 - June 2024","location":"Data Analytics","title":"T20 Cricket Analytics Dashboard for Optimized Player Selection","tags":["Python","PowerBI"],"description":"Built a cricket analytics platform using Python and Power BI to evaluate performance metrics from 45+ T20 World Cup matches, achieving 95% precision in player ranking and team optimization. Automated the extraction of 1,000+ performance statistics from ESPN Cricinfo using Bright Data, reducing manual data processing by 90% and enabling dynamic data visualization in dashboards.","image":"/assets/featured-projects/cricket.webp","jpg":"/assets/featured-projects/cricket.png"},{"id":"featured-project-fsfa","title":"Full-Stack Finance Analytics Dashboard with ML Predictions","year":"Aug. 2024 - Oct. 2024","location":"Full Stack","tags":[" React.js","TypeScript","NodeJS","Express.js","Machine Learning"],"description":"Designed a full-stack financial analytics dashboard with the MERN stack, Redux Toolkit, and Vite, integrating 6+ interactive charts and real-time KPI tracking, reducing latency for financial data visualization by 40%. Implemented a machine learning-based revenue forecasting module using Regression.js, achieving 85% accuracy from 1,000+ historical financial records, enabling data-driven financial planning","image":"/assets/featured-projects/fsfa.webp","jpg":"/assets/featured-projects/fsfa.png"}]'),m=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/post","demo":"https://hrishikeshpaul.github.io/post/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/assets/other-projects/post.webp","jpg":"/assets/other-projects/post.jpeg"},{"id":"other-project-noq","title":"NoQ Job Portal","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/noq","demo":"http://noq-client.herokuapp.com/login","tags":["Vue","NodeJS","JavaScript","MongoDB","Heroku","Agile","Sockets","JIRA"],"description":"NoQ is a tool which allows for both employers and students to skip the hassle seen in modern day career fairs, while effectively pairing up students with employees based on various factors.","readMore":"https://hrishikeshpaul.medium.com/noq-a-job-portal-for-college-career-fairs-9996bbb37a1c","image":"/assets/other-projects/noq.webp","jpg":"/assets/other-projects/noq.jpeg"},{"id":"other-project-bank-compare","title":"Experience Design Anaysis","year":"Aug 2019 - Dec 2019","tags":["UX Design","Analysis","Adobe XD","Mockups"],"description":"This project demonstrates how the selection of colors, fonts, shapes, languages, layout and other styles can lead to drastically different user experiences, by comparing landing pages of 3 bank websites built from scratch.","readMore":"https://drive.google.com/file/d/1GY2WmRZgvBgFx6OlAMcAj8_DQVmS5VBw/view","image":"/assets/other-projects/bank.webp","jpg":"/assets/other-projects/bank.jpeg"},{"id":"other-project-bunder","title":"Bunder","year":"Jan 2020 - Apr 2020","tags":["Surveying","User Interviews","Ideation","Analysis","Product Planning"],"description":"An MVP Proposal - Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them.","readMore":"https://drive.google.com/file/d/1sj9wL7uEokNpk6VUu3nsiPHf3TZeu4lT/view?usp=sharing","image":"/assets/other-projects/bunder.webp","jpg":"/assets/other-projects/bunder.jpeg"},{"id":"other-project-suicide-analyzer","title":"Suicide Analyzer","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO.","github":"https://github.com/hrishikeshpaul/whodata","image":"/assets/other-projects/suicide-analyzer.webp","jpg":"/assets/other-projects/suicide-analyzer.jpeg"},{"id":"other-project-nutricare","title":"Nutricare","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"A web app for patients to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects for a particular problem statement.","readMore":"https://angel.co/projects/576300-nutricare","image":"/assets/other-projects/nutricare.webp","jpg":"/assets/other-projects/nutricare.jpeg"}]'),f=JSON.parse('{"educations":[{"id":"edu-1","school":"New York University","degree":"Master of Science in Computer Engineering","duration":"Sept. 2024 - May 2026","content":["GPA: 3.88/4","Courses: Machine Learning, Big Data, Deep Learning"]},{"id":"edu-2","school":"Vishwakarma Institute of Technology","degree":"Bachelors in Computer Engineering","duration":"Aug. 2019 - May 2023","content":["GPA: 8.86/10","Courses: Data Structures and Algorithms, Software Engineering, Artificial Intelligence"]}],"experiences":[{"id":"exp-1","company":"4iBiz","position":"Software Developer","duration":"July 2023 - June 2024","description":["Directed the development of a fitness management platform catering to 10,000+ users, utilizing Angular, TypeScript, and NgRx to deliver features like attendance tracking and workout planning, enhancing user engagement by 40%.","Architected and deployed the frontend for a corporate wellness platform adopted by 20+ companies, leveraging Angular, Bootstrap, and modular MVC frameworks for activity tracking and reward systems, improving page load speed by 50%.","Collaborated with 10+ engineers to optimize RESTful API integrations across platforms, streamlining data workflows to reduce response times by 35% and ensuring 99.9% application uptime."]},{"id":"exp-2","company":"4iBiz","position":"Software Developer - Intern","duration":"July 2022 - June 2023","description":["Managed a team of 5 developers to deliver an office management solution, employing Angular and PrimeNG to build real-time analytics dashboards and resource management, boosting client satisfaction by 45% for 25+ clients.\u200b","Developed adaptive frontend modules for an education management system supporting 30+ institutions, applying Angular and Material UI to design reusable components, leading to a 60% improvement in mobile usability.","Standardized frontend architecture using components and lazy loading, reducing initial load time by 40%, while streamlining API integration workflows with Postman for testing and debugging across platforms."]}],"skills":[{"title":"Languages & Databases","tools":["TypeScript","JavaScript","Python","C++","Java","SQL","MongoDB"]},{"title":"Frameworks","tools":["Angular","React.js","Node.js","Express.js","PyTorch","PySpark","TensorFlow","Material UI","Bootstrap","AWS"]},{"title":"Libraries","tools":["Numpy","Pandas","Matplotlib","Scikit-learn","CNN","Keras","FAISS","Regression.js","LangChain"]},{"title":"Developer Tools","tools":["Git","Docker","VS Code","Agile","MVC","Google Colab","Android Studio","Jira","Trello"]}],"blog":[{"id":"blog-1","title":"A beginner\'s guide to github","link":"https://hrishikeshpaul12.medium.com/a-beginners-guide-to-github-a811e662a777"},{"id":"blog-2","title":"User Experience Design \u2013 A little more than just design","link":"https://hrishikeshpaul12.medium.com/user-experience-design-a-little-more-than-just-design-afdb941aeb5"}]}'),b=a(7034),y=a(7838),j=a(184),k=["children"],w=["node"],x=["node"],v=["node"],S=["ordered"],A=["node"],P=["ordered"],M={common:p,landing:g,featuredProjects:h,otherProjects:m,about:f};!function(e){e.Landing="landing",e.About="about"}(i||(i={}));var C=(n={},(0,c.Z)(n,i.Landing,b),(0,c.Z)(n,i.About,y),n),J=function(e){var t=(0,d.useState)({landing:"",about:""}),a=(0,s.Z)(t,2),n=a[0],i=a[1];return(0,d.useEffect)((function(){fetch(C[e]).then((function(e){return e.text()})).then((function(t){return i((function(a){return(0,r.Z)((0,r.Z)({},a),{},(0,c.Z)({},e,t))}))}))}),[e]),n},D=function(e){var t=e.children,a=(0,o.Z)(e,k);return(0,j.jsx)(l.Kq,{spacing:"4",children:(0,j.jsx)(u.D,{components:{p:function(e){e.node;var t=(0,o.Z)(e,w);return(0,j.jsx)(l.xv,(0,r.Z)((0,r.Z)({},a),t))},a:function(e){e.node;var t=(0,o.Z)(e,x);return(0,j.jsx)(l.rU,(0,r.Z)({href:t.href,target:"_blank",color:"primary.200"},t))},ul:function(e){e.node;var t=(0,o.Z)(e,v),a=(t.ordered,(0,o.Z)(t,S));return(0,j.jsx)(l.QI,(0,r.Z)((0,r.Z)({},a),{},{"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"}))},li:function(e){e.node;var t=(0,o.Z)(e,A),a=(t.ordered,(0,o.Z)(t,P));return(0,j.jsx)("li",(0,r.Z)({"data-aos":"flip-up","data-aos-delay":100*t.index+400},a))}},children:t})})}},3399:function(e,t,a){a.d(t,{K4:function(){return h}});var n=a(2504),i=a(855),o=a(8735),r=a(8617),s=a(6355),c=a(7692),d=a(5035),l=a(184),u=function(e){var t=e.readMore;return t?(0,l.jsx)(n.zx,{"data-aos":"fade","data-aos-offset":"200",variant:"link",colorScheme:"black",rightIcon:(0,l.jsx)(r.Fd8,{fontSize:"16pt"}),onClick:function(){return(0,d.bA)(t)},children:"Read More"}):null},p=function(e){var t=e.github,a=e.display,o=(0,i.Sx)({base:n.hU,lg:n.zx});return t?(0,l.jsx)(n.zx,{"data-aos":"fade","data-aos-delay":"400",as:o,variant:"secondary",py:"5",display:a,leftIcon:(0,l.jsx)(s.hJX,{}),icon:(0,l.jsx)(s.hJX,{}),onClick:function(){return(0,d.bA)(t)},children:"GitHub"}):null},g=function(e){var t=e.demo,a=e.display,o=(0,i.Sx)({base:n.hU,lg:n.zx});return t?(0,l.jsx)(n.zx,{"data-aos":"fade","data-aos-delay":"200",as:o,display:a,leftIcon:(0,l.jsx)(c.Wlb,{fontSize:"14pt"}),icon:(0,l.jsx)(c.Wlb,{fontSize:"14pt"}),onClick:function(){return(0,d.bA)(t)},children:"Live Demo"}):null},h=function(e){var t=e.readMore,a=e.github,n=e.demo;return(0,l.jsxs)(o.kC,{justifyContent:t?"space-between":"flex-end",alignItems:"center",pt:"8",children:[(0,l.jsx)(u,{readMore:t}),(0,l.jsxs)(o.kC,{gap:"4",justifyContent:"space-between",alignItems:"center",display:n||a?"flex":"none",children:[(0,l.jsx)(g,{demo:n}),(0,l.jsx)(p,{github:a})]})]})}},3362:function(e,t,a){a.d(t,{$:function(){return o}});var n=a(8735),i=a(184),o=function(e){var t=e.id,a=e.tags,o=e.size,r=void 0===o?"sm":o;return(0,i.jsx)(n.kC,{py:"2",wrap:"wrap",gap:"4",children:a.map((function(e,a){return(0,i.jsx)(n.xu,{"data-aos":"flip-left","data-aos-delay":50*a,children:(0,i.jsx)(n.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:r,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},5035:function(e,t,a){a.d(t,{bA:function(){return i},W$:function(){return o},Js:function(){return r}});var n=a(3880),i=function(e){return window.open(e,"_blank")},o=function(){i(n.rH.common.resume)},r=function(){i("mailto:"+n.rH.common.email)}},7838:function(e,t,a){e.exports=a.p+"static/media/about.d704324ba973ba81c05a.md"},7034:function(e,t,a){e.exports=a.p+"static/media/landing.f69548dac91afffd5dbc.md"}}]);
//# sourceMappingURL=580.5c846f98.chunk.js.map