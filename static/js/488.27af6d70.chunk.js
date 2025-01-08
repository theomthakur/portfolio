"use strict";(self.webpackChunkportfolio_3=self.webpackChunkportfolio_3||[]).push([[488],{2488:function(e,t,i){i.r(t),i.d(t,{About:function(){return v}});var n=i(8735),a=i(3046),o=i(3880),r=i(9439),s=i(2791),c=i(6332),l=i(3433),d=i(2504),u=i(1413),p=i(5987),g=i(184),h=["title"],m=["title"],f=function(e){var t=e.title,i=(0,p.Z)(e,h);return(0,g.jsx)(n.X6,(0,u.Z)((0,u.Z)({fontSize:"2xl",fontWeight:"bold"},i),{},{"data-aos":"fade-down",children:t}))},b=function(e){var t=e.title,i=(0,p.Z)(e,m);return(0,g.jsx)(n.xv,(0,u.Z)((0,u.Z)({fontWeight:"semibold",fontSize:"lg"},i),{},{"data-aos":"fade-down",children:t}))},y=function(e){var t=e.expanded,i=e.id,a=e.idx,o=e.title,u=e.subTitle,p=e.date,h=e.content,m=e.onChange,f=(0,s.useMemo)((function(){return t.includes(a)}),[t,a]),y=(0,s.useState)(!1),j=(0,r.Z)(y,2),x=j[0],k=j[1],w=(0,s.useMemo)((function(){return h.length>1&&!f||!f&&x}),[x,f,h]);return(0,s.useEffect)((function(){var e,t="first-point-".concat(i),n=document.getElementById(t);n&&(n.scrollWidth>=(null===(e=n.parentElement)||void 0===e?void 0:e.scrollWidth)?k(!0):k(!1))}),[i]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.KF,{as:n.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,g.jsx)(b,{title:o,fontWeight:"semibold"}),(0,g.jsx)(n.xv,{"data-aos":"fade",children:u}),(0,g.jsx)(n.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:p}),(0,g.jsxs)(n.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[f?(0,g.jsx)(n.QI,{listStylePosition:"outside",pl:"1",children:(0,g.jsx)(n.xv,{as:"li",isTruncated:!t.includes(a),children:h[0]})}):(0,g.jsx)(n.xv,{id:"first-point-".concat(i),isTruncated:!t.includes(a),children:h[0]}),w&&(0,g.jsx)(d.zx,{flexShrink:0,id:"see-more-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:function(){if(t.includes(a)){var e=t.filter((function(e){return e!==a}));m(e)}else m([].concat((0,l.Z)(t),[a]))},children:"See more"})]})]}),(0,g.jsxs)(c.Hk,{p:"0",pl:"1",children:[(0,g.jsx)(n.QI,{listStylePosition:"outside",children:h.slice(1).map((function(e,t){return(0,g.jsx)(n.xv,{as:"li",children:e},"".concat(o,"-cont-").concat(t))}))}),t.includes(a)&&(0,g.jsx)(n.kC,{justifyContent:"flex-end",children:(0,g.jsx)(d.zx,{id:"see-less-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:function(){var e=t.filter((function(e){return e!==a}));m(e)},children:"See less"})})]})]})},j=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),i=t[0],n=t[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{title:"Education"}),(0,g.jsx)("br",{}),(0,g.jsx)(c.UQ,{pt:"2",allowMultiple:!0,index:i,id:"education",children:o.rH.about.educations.map((function(e,t){return(0,g.jsx)(c.Qd,{p:"0",border:"0",mb:"4",children:(0,g.jsx)(y,{title:e.school,subTitle:e.degree,date:e.duration,content:e.content,id:e.id,idx:t,onChange:n,expanded:i})},"panel-".concat(e.school,"-").concat(e.degree))}))})]})},x=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),i=t[0],n=t[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{title:"Experiences"}),(0,g.jsx)("br",{}),(0,g.jsx)(c.UQ,{pt:"2",allowMultiple:!0,index:i,children:o.rH.about.experiences.map((function(e,t){return(0,g.jsx)(c.Qd,{p:"0",border:"0",mb:"4",children:(0,g.jsx)(y,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:n,expanded:i})},"panel-".concat(e.company))}))})]})},k=i(3362),w=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{title:"Skills",pb:"2"}),(0,g.jsx)("br",{}),o.rH.about.skills.map((function(e){return(0,g.jsxs)(n.xu,{p:"0",mb:"4",children:[(0,g.jsx)(b,{title:e.title}),(0,g.jsx)(k.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))}))]})},v=function(){var e=(0,o.r0)(o.nl.About);return(0,g.jsxs)(n.xu,{children:[(0,g.jsxs)(n.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,g.jsx)(n.xu,{flex:"0.35","data-aos":"fade-up",children:(0,g.jsxs)("picture",{children:[(0,g.jsx)("source",{type:"image/webp",srcSet:o.rH.common.mainPicture}),(0,g.jsx)("source",{type:"image/jpeg",srcSet:o.rH.common.mainPictureJPG}),(0,g.jsx)(a.Ee,{borderRadius:"xl",src:o.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,g.jsxs)(n.xu,{flex:"0.85",children:[(0,g.jsx)(n.X6,{"data-aos":"fade-down",children:o.rH.common.name}),(0,g.jsx)(n.kC,{alignItems:"center",children:(0,g.jsx)(n.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200",children:o.rH.common.pronunciation})}),(0,g.jsx)(n.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,g.jsx)(o.VY,{fontSize:"lg",children:e.about})})]})]}),(0,g.jsxs)(n.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,g.jsx)(n.xu,{flex:"0.6",flexShrink:0,overflow:"hidden",children:(0,g.jsx)(j,{})}),(0,g.jsx)(n.xu,{flex:"0.6",overflow:"hidden",children:(0,g.jsx)(x,{})})]}),(0,g.jsx)(n.xu,{pt:"16",children:(0,g.jsx)(w,{})})]})}},3880:function(e,t,i){i.d(t,{VY:function(){return D},nl:function(){return a},rH:function(){return C},r0:function(){return T}});var n,a,o=i(5987),r=i(1413),s=i(9439),c=i(4942),l=i(2791),d=i(8735),u=i(1265),p=JSON.parse('{"name":"Om Thakur","logoType":{"mobile":"OT","desktop":"Om Thakur"},"mainPicture":"/assets/photo.webp","mainPictureJPG":"/assets/photo.jpeg","pronunciation":"/om-tha-kur/","cssVarPrefix":"ot","email":"ot2131@nyu.edu","linkedin":"https://www.linkedin.com/in/theomthakur/","github":"https://github.com/theomthakur","resume":"https://drive.google.com/file/d/1-F7UQ7MJjVd28mym3O3oAqwxKWiTwU7T/view?usp=sharing","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/theomthakur/"},{"type":"github","link":"https://github.com/theomthakur"},{"type":"mail","link":"mailto:ot2131@nyu.edu"}]}'),g=JSON.parse('{"headline":"Hello! I am Om Thakur.","picture":"/assets/landing/photo.webp","jpg":"/assets/landing/face.jpg"}'),h=JSON.parse('[{"id":"featured-project-mlops","title":"MLOps Pipeline: End-to-End ML System with Cloud Deployment","year":"June 2024 - July 2024","location":"Machine Learning","tags":["Python","MLflow","AWS","Docker","Scikit-learn","NumPy"],"description":"Architected an end-to-end MLOps pipeline using MLflow and custom components, implementing automated data processing and model training workflows that reduced experiment tracking time by 60% while maintaining 95% reproducibility across deployments. Engineered CI/CD pipeline using GitHub Actions for ML model deployment to AWS EC2, containerizing the application with Docker and implementing automated testing, resulting in 40% faster deployment cycles and 99.9% system uptime.","image":"/assets/featured-projects/mlops.webp","jpg":"/assets/featured-projects/mlops.jpeg"},{"id":"featured-project-llmb","title":"LLM Based Q&A System for Scalable E-Learning Support","year":"May 2024 - June 2024","location":"Large Language Models","tags":["LangChain","Google PaLM","Hugging Face","Python"],"description":"Developed a scalable AI-driven Q&A platform powered by LangChain and Google PaLM, automating support for 180,000+ students, reducing query resolution time by 90% and handling 1,000+ inquiries daily. Enhanced query resolution accuracy to 95% by implementing vector similarity search with FAISS and Hugging Face embeddings, reducing manual intervention by 80% across 20,000+ student support cases.","image":"/assets/featured-projects/llmb.webp","jpg":"/assets/featured-projects/llmb.png"},{"id":"featured-project-cricket","year":"May 2024 - June 2024","location":"Data Analytics","title":"T20 Cricket Analytics Dashboard for Optimized Player Selection","tags":["Python","PowerBI"],"description":"Built a cricket analytics platform using Python and Power BI to evaluate performance metrics from 45+ T20 World Cup matches, achieving 95% precision in player ranking and team optimization. Automated the extraction of 1,000+ performance statistics from ESPN Cricinfo using Bright Data, reducing manual data processing by 90% and enabling dynamic data visualization in dashboards.","image":"/assets/featured-projects/cricket.webp","jpg":"/assets/featured-projects/cricket.png"},{"id":"featured-project-fsfa","title":"Full-Stack Finance Analytics Dashboard with ML Predictions","year":"Aug. 2024 - Oct. 2024","location":"Full Stack","tags":[" React.js","TypeScript","NodeJS","Express.js","Machine Learning"],"description":"Designed a full-stack financial analytics dashboard with the MERN stack, Redux Toolkit, and Vite, integrating 6+ interactive charts and real-time KPI tracking, reducing latency for financial data visualization by 40%. Implemented a machine learning-based revenue forecasting module using Regression.js, achieving 85% accuracy from 1,000+ historical financial records, enabling data-driven financial planning","image":"/assets/featured-projects/fsfa.webp","jpg":"/assets/featured-projects/fsfa.png"}]'),m=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/post","demo":"https://hrishikeshpaul.github.io/post/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/assets/other-projects/post.webp","jpg":"/assets/other-projects/post.jpeg"},{"id":"other-project-noq","title":"NoQ Job Portal","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/noq","demo":"http://noq-client.herokuapp.com/login","tags":["Vue","NodeJS","JavaScript","MongoDB","Heroku","Agile","Sockets","JIRA"],"description":"NoQ is a tool which allows for both employers and students to skip the hassle seen in modern day career fairs, while effectively pairing up students with employees based on various factors.","readMore":"https://hrishikeshpaul.medium.com/noq-a-job-portal-for-college-career-fairs-9996bbb37a1c","image":"/assets/other-projects/noq.webp","jpg":"/assets/other-projects/noq.jpeg"},{"id":"other-project-bank-compare","title":"Experience Design Anaysis","year":"Aug 2019 - Dec 2019","tags":["UX Design","Analysis","Adobe XD","Mockups"],"description":"This project demonstrates how the selection of colors, fonts, shapes, languages, layout and other styles can lead to drastically different user experiences, by comparing landing pages of 3 bank websites built from scratch.","readMore":"https://drive.google.com/file/d/1GY2WmRZgvBgFx6OlAMcAj8_DQVmS5VBw/view","image":"/assets/other-projects/bank.webp","jpg":"/assets/other-projects/bank.jpeg"},{"id":"other-project-bunder","title":"Bunder","year":"Jan 2020 - Apr 2020","tags":["Surveying","User Interviews","Ideation","Analysis","Product Planning"],"description":"An MVP Proposal - Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them.","readMore":"https://drive.google.com/file/d/1sj9wL7uEokNpk6VUu3nsiPHf3TZeu4lT/view?usp=sharing","image":"/assets/other-projects/bunder.webp","jpg":"/assets/other-projects/bunder.jpeg"},{"id":"other-project-suicide-analyzer","title":"Suicide Analyzer","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO.","github":"https://github.com/hrishikeshpaul/whodata","image":"/assets/other-projects/suicide-analyzer.webp","jpg":"/assets/other-projects/suicide-analyzer.jpeg"},{"id":"other-project-nutricare","title":"Nutricare","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"A web app for patients to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects for a particular problem statement.","readMore":"https://angel.co/projects/576300-nutricare","image":"/assets/other-projects/nutricare.webp","jpg":"/assets/other-projects/nutricare.jpeg"}]'),f=JSON.parse('{"educations":[{"id":"edu-1","school":"New York University","degree":"Master of Science in Computer Engineering","duration":"Sept. 2024 - May 2026","content":["GPA: 3.88/4","Courses: Machine Learning, Big Data, Deep Learning"]},{"id":"edu-2","school":"Vishwakarma Institute of Technology","degree":"Bachelors in Computer Engineering","duration":"Aug. 2019 - May 2023","content":["GPA: 8.86/10","Courses: Data Structures and Algorithms, Software Engineering, Artificial Intelligence"]}],"experiences":[{"id":"exp-1","company":"4iBiz","position":"Software Developer","duration":"July 2023 - June 2024","description":["Directed the development of a fitness management platform catering to 10,000+ users, utilizing Angular, TypeScript, and NgRx to deliver features like attendance tracking and workout planning, enhancing user engagement by 40%.","Architected and deployed the frontend for a corporate wellness platform adopted by 20+ companies, leveraging Angular, Bootstrap, and modular MVC frameworks for activity tracking and reward systems, improving page load speed by 50%.","Collaborated with 10+ engineers to optimize RESTful API integrations across platforms, streamlining data workflows to reduce response times by 35% and ensuring 99.9% application uptime."]},{"id":"exp-2","company":"4iBiz","position":"Software Developer - Intern","duration":"July 2022 - June 2023","description":["Managed a team of 5 developers to deliver an office management solution, employing Angular and PrimeNG to build real-time analytics dashboards and resource management, boosting client satisfaction by 45% for 25+ clients.\u200b","Developed adaptive frontend modules for an education management system supporting 30+ institutions, applying Angular and Material UI to design reusable components, leading to a 60% improvement in mobile usability.","Standardized frontend architecture using components and lazy loading, reducing initial load time by 40%, while streamlining API integration workflows with Postman for testing and debugging across platforms."]}],"skills":[{"title":"Languages & Databases","tools":["TypeScript","JavaScript","Python","C++","Java","SQL","MongoDB"]},{"title":"Frameworks","tools":["Angular","React.js","Node.js","Express.js","PyTorch","PySpark","TensorFlow","Material UI","Bootstrap","AWS"]},{"title":"Libraries","tools":["Numpy","Pandas","Matplotlib","Scikit-learn","CNN","Keras","FAISS","Regression.js","LangChain"]},{"title":"Developer Tools","tools":["Git","Docker","VS Code","Agile","MVC","Google Colab","Android Studio","Jira","Trello"]}],"blog":[{"id":"blog-1","title":"A beginner\'s guide to github","link":"https://hrishikeshpaul12.medium.com/a-beginners-guide-to-github-a811e662a777"},{"id":"blog-2","title":"User Experience Design \u2013 A little more than just design","link":"https://hrishikeshpaul12.medium.com/user-experience-design-a-little-more-than-just-design-afdb941aeb5"}]}'),b=i(7034),y=i(7838),j=i(184),x=["children"],k=["node"],w=["node"],v=["node"],S=["ordered"],A=["node"],P=["ordered"],C={common:p,landing:g,featuredProjects:h,otherProjects:m,about:f};!function(e){e.Landing="landing",e.About="about"}(a||(a={}));var M=(n={},(0,c.Z)(n,a.Landing,b),(0,c.Z)(n,a.About,y),n),T=function(e){var t=(0,l.useState)({landing:"",about:""}),i=(0,s.Z)(t,2),n=i[0],a=i[1];return(0,l.useEffect)((function(){fetch(M[e]).then((function(e){return e.text()})).then((function(t){return a((function(i){return(0,r.Z)((0,r.Z)({},i),{},(0,c.Z)({},e,t))}))}))}),[e]),n},D=function(e){var t=e.children,i=(0,o.Z)(e,x);return(0,j.jsx)(d.Kq,{spacing:"4",children:(0,j.jsx)(u.D,{components:{p:function(e){e.node;var t=(0,o.Z)(e,k);return(0,j.jsx)(d.xv,(0,r.Z)((0,r.Z)({},i),t))},a:function(e){e.node;var t=(0,o.Z)(e,w);return(0,j.jsx)(d.rU,(0,r.Z)({href:t.href,target:"_blank",color:"primary.200"},t))},ul:function(e){e.node;var t=(0,o.Z)(e,v),i=(t.ordered,(0,o.Z)(t,S));return(0,j.jsx)(d.QI,(0,r.Z)((0,r.Z)({},i),{},{"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"}))},li:function(e){e.node;var t=(0,o.Z)(e,A),i=(t.ordered,(0,o.Z)(t,P));return(0,j.jsx)("li",(0,r.Z)({"data-aos":"flip-up","data-aos-delay":100*t.index+400},i))}},children:t})})}},3362:function(e,t,i){i.d(t,{$:function(){return o}});var n=i(8735),a=i(184),o=function(e){var t=e.id,i=e.tags,o=e.size,r=void 0===o?"sm":o;return(0,a.jsx)(n.kC,{py:"2",wrap:"wrap",gap:"4",children:i.map((function(e,i){return(0,a.jsx)(n.xu,{"data-aos":"flip-left","data-aos-delay":50*i,children:(0,a.jsx)(n.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:r,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},7838:function(e,t,i){e.exports=i.p+"static/media/about.d704324ba973ba81c05a.md"},7034:function(e,t,i){e.exports=i.p+"static/media/landing.f69548dac91afffd5dbc.md"}}]);
//# sourceMappingURL=488.27af6d70.chunk.js.map