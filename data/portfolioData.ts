import type { PersonalInfo, SkillCategory, Project, Experience, Education } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Rahmat Sigit Hidayat',
  title: 'Data Analyst',
  tagline: 'Turning raw data into actionable insights — one dashboard at a time.',
  about:
    'As a Data Analyst with hands-on experience in Business Intelligence, I transform complex datasets into interactive dashboards and visualizations for better insight exploration. With a Data Science background, I turn data into actionable insights that drive decision-making and cross-functional collaboration. Skilled in storytelling, machine learning, and BI tools, I communicate data clearly and creatively, making insights engaging and impactful.',
  email: 'sigitz.dayat@gmail.com',
  phone: '6281246144028',
  location: 'Surabaya, East Java, Indonesia',
  linkedin: 'https://linkedin.com/in/rahmat-sigit',
  github: 'https://github.com/sigitttd',
  tableau: 'https://public.tableau.com/app/profile/rahmat.sigit',
}

export const skills: SkillCategory[] = [
  {
    category: 'Data Analytics',
    skills: [
      'Data Analysis',
      'EDA',
      'Machine Learning',
      'SQL',
      'Database Design',
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      'Python (Pandas, NumPy)',
      'Tableau',
      'Looker Studio',
      'Power Query',
      'Excel / Google Sheets',
    ],
  },
  {
    category: 'Professional Skills',
    skills: [
      'Data Storytelling',
      'Problem Solving',
      'Communication',
      'Leadership',
      'Project Management',
      'Creativity',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'tourism-sentiment-network-analysis',
    slug: 'tourism-sentiment-network-analysis',
    type: 'data' as const,
    title: 'Tourism Sentiment & Network Analysis Engine',
    description:
      'Developed a sentiment analysis and social network model using SVM to process 1,400+ TripAdvisor reviews. Extracted insights on public perception and destination connectivity in Malang tourism.',
    content: [
      {
        type: 'text',
        value:
          'There was a time when I simply admired the aviation industry and dreamed of contributing to it. Not through engineering or mechanical systems, but by applying the knowledge and skills I developed during college. My initial idea revolved around flight recommendation systems, combining data-driven decision making with my interest in transportation and travel. However, for various reasons, that plan did not materialize. Instead, I eventually arrived at a topic that felt much closer to my academic interests at the time: combining machine learning and graph analysis to better understand tourism behavior. Looking back, this project became the answer to what I was searching for then. It allowed me to explore both domains that fascinated me, even if they were applied in a different context than I originally imagined. This project was conducted as my final-year research project (undergraduate thesis), bringing together the skills and interests I developed throughout my studies.',
      },
      {
        type: 'text',
        value:
          'This research explores the tourism ecosystem of Malang City through the integration of Sentiment Analysis and Social Network Analysis (SNA). The objective was to understand visitor perceptions and uncover the structural relationships between tourist destinations using a data-driven approach. A total of 1,451 Indonesian-language reviews collected from TripAdvisor were analyzed using text augmentation, undersampling techniques, and IndoBERT-based text representations. The machine learning component focused on building a sentiment classification model using Support Vector Machine (SVM), while the graph analysis component examined how destinations were connected through visitor behavior and movement patterns.',
      },
      {
        type: 'text',
        value:
          'One of the main challenges in this project was the dataset itself. The quantity and quality of the available data were lower than expected, requiring significant preprocessing before it could be used as the primary research dataset. This meant spending additional time cleaning, validating, augmenting, and restructuring the data to make it suitable for analysis. Once the data preparation stage was completed, the next challenge was finding the most effective approach for the sentiment analysis model. Multiple schemes, feature representations, and experimental setups were tested through extensive trial and error before reaching a satisfactory result. Although the final model may appear straightforward from the outside, the development process involved many iterations and adjustments to ensure reliable performance.',
      },
      {
        type: 'text',
        value:
          'The final SVM model, utilizing word embeddings without text cleaning, achieved the best performance with an accuracy of 81.44% and a weighted F1-score of 80.21%. The model effectively captured contextual tourism-related dimensions such as beauty and hospitality. Positive sentiment was commonly associated with attributes such as “beautiful,” “friendly,” and “memorable,” highlighting the importance of visual appeal and social interactions within Malang’s tourism experience. In contrast, negative sentiment was often linked to cleanliness and orderliness issues, suggesting areas where destination management and service quality could be improved.',
      },
      {
        type: 'text',
        value:
          'From the Social Network Analysis perspective, the study revealed three major destination clusters: nature tourism, urban attractions, and visually popular tourist destinations. The network structure was influenced by geographical proximity, destination characteristics, and visual attractiveness. Among all destinations, Monumen Balai Kota Malang emerged as the most strategically important node, achieving the highest degree, closeness, and eigenvector centrality scores. Meanwhile, Candi Singosari and Hawai Waterpark Malang occupied more peripheral positions within the network, indicating lower strategic connectivity compared to other attractions.',
      },
      {
        type: 'text',
        value:
          'The integration of sentiment analysis and network analysis provided a comprehensive understanding of both visitor perceptions and tourism movement patterns. These findings offer practical insights for tourism stakeholders, including the development of thematic travel routes, promotion strategies for less-connected destinations, recommendation systems based on network centrality metrics, and real-time monitoring systems for service quality issues. The research demonstrates how machine learning and graph-based approaches can complement each other to support evidence-based decision making in tourism development.',
      },
      {
        type: 'text',
        value:
          'While I am satisfied with the outcome, I still see considerable room for improvement. Perhaps not necessarily within the same tourism domain, but certainly within the broader topics of machine learning, natural language processing, and graph analytics. This project reinforced my interest in combining data-driven methods to solve real-world problems and showed me that meaningful insights often emerge when different analytical approaches are brought together. More importantly, it taught me that even when a project takes a different direction than originally planned, it can still become a valuable learning experience and a foundation for future exploration.',
      },
    ],
    techTags: ['Python', 'SVM', 'NLP', 'Network Analysis', 'Web Scraping'],
    imageUrl: '/pictinporto/sasna.png',
    githubUrl: 'https://github.com/sigitttd/sa_sna-malang_tourism',
    embedDocs: 'https://drive.google.com/file/d/1mmBJ-8U5_JNKpgF2UZcDroOQSOJRQAGl/preview',
  },
  {
    id: 'academic-collaboration-network-analysis',
    slug: 'academic-collaboration-network-analysis',
    type: 'data' as const,
    title: 'Academic Collaboration Network Analysis',
    description:
      'Led a large-scale graph analysis project on collaboration patterns among 4,800+ researchers. Built end-to-end pipelines from web scraping to visualization. Published as first author at ICoDSA 2025.',
    content: [
      {
        type: 'text',
        value:
          'This project began as a coursework assignment completed together with Avriono and Rifqy. What started as a classroom project eventually gave me the opportunity to continue the work and submit it to an international conference. Although I would not consider it the strongest work within its field, the experience became an important milestone in my academic journey. Attending the conference sessions online and listening to researchers present their work exposed me to many ideas and perspectives that inspired me to keep learning. More importantly, it reinforced my interest in graph-based analysis and motivated me to explore how networks can be used to understand real-world relationships.',
      },
      {
        type: 'text',
        value:
          'The research applies Social Network Analysis (SNA) and Citation Network Analysis (CNA) to examine scholarly collaboration within a private university in Indonesia. By analyzing citation and co-authorship networks, the study investigates how researchers are connected, how knowledge flows across the institution, and which individuals play key roles in maintaining collaboration. Using centrality metrics, modularity-based community detection, and network visualization techniques, the project reveals a highly centralized network structure in which a small number of researchers act as influential hubs and strategic bridges between different research communities.',
      },
      {
        type: 'text',
        value:
          'One of the most significant findings was the identification of YWAN741 as the network’s most central actor, consistently achieving the highest scores across degree, closeness, betweenness, and eigenvector centrality measures. Other researchers, including MPHS621 and POSM787, also demonstrated strong influence by connecting different groups and facilitating collaboration. The analysis further revealed a modular yet compact network structure, where research communities form around shared interests or organizational affiliations. Despite these distinct clusters, most researchers remained connected through relatively short paths, indicating an environment that supports efficient knowledge exchange and collaboration.',
      },
      {
        type: 'text',
        value:
          'Beyond the technical results, this project strengthened my understanding of graph theory, network structures, and data-driven decision making. It showed how SNA can provide practical insights for identifying influential contributors, encouraging cross-community collaboration, and supporting institutional research strategies. More personally, it confirmed my growing interest in graph analytics as a field I want to continue exploring. The project became one of the experiences that convinced me there is still much more to learn about networks, their structures, and the stories that can be uncovered through data.',
      },
      {
        type: 'text',
        value:
          'While I am satisfied with the outcome, I still see considerable room for improvement. Perhaps not necessarily within the same tourism domain, but certainly within the broader topics of machine learning, natural language processing, and graph analytics. This project reinforced my interest in combining data-driven methods to solve real-world problems and showed me that meaningful insights often emerge when different analytical approaches are brought together. More importantly, it taught me that even when a project takes a different direction than originally planned, it can still become a valuable learning experience and a foundation for future exploration.',
      },
    ],
    techTags: ['Python', 'Web Scraping', 'Network Analysis', 'Gephi', 'Data Mining'],
    imageUrl: '/pictinporto/cna.png',
    publicationUrl: 'https://ieeexplore.ieee.org/document/11157371/',
  },
  {
    id: 'demographic-segmentation-dashboard',
    slug: 'demographic-segmentation-dashboard',
    type: 'data' as const,
    title: 'Demographic Segmentation Dashboard for Targeted Marketing',
    description:
      'Developed an interactive Tableau dashboard to segment prospective students based on geographic and interest clustering. Enabled data-driven marketing strategies and supported admission campaigns. Secured two Intellectual Property (HKI) registrations.',
    content: [
  {
    type: 'text',
    value:
      'This project was conducted as a collaborative research with a lecturer using university admissions data. The study focused not only on building a dashboard, but also on applying clustering techniques to segment prospective student data before visualization.',
  },
  {
    type: 'text',
    value:
      'Clustering was used to group candidates based on geographic distribution and interest patterns, helping to uncover meaningful segments within the admissions dataset. My role was primarily focused on transforming these analytical results into an interactive Tableau dashboard.',
  },
  {
    type: 'text',
    value:
      'The dashboard provided an interactive way to explore segmented groups through filters, allowing users to understand different candidate profiles more effectively and explore patterns across segments.',
  },
  {
    type: 'text',
    value:
      'The project was later recognized through two Intellectual Property (HKI) registrations, reflecting its contribution as an applied study in educational data analysis.',
  },
],
techTags: ['Tableau', 'Clustering', 'Data Segmentation', 'Data Visualization'],
    imageUrl: '/pictinporto/pintus.png',
    embedUrl: 'https://public.tableau.com/views/PNLTN_PIN-TUS_05rev/Dashboard_PIN-TUS?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    embedHtml: `<div class='tableauPlaceholder' id='viz1780470026289' style='position: relative'><noscript><a href='#'><img alt='Dashboard_PIN-TUS ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;PN&#47;PNLTN_PIN-TUS_05rev&#47;Dashboard_PIN-TUS&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PNLTN_PIN-TUS_05rev&#47;Dashboard_PIN-TUS' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;PN&#47;PNLTN_PIN-TUS_05rev&#47;Dashboard_PIN-TUS&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1780470026289');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1850px';vizElement.style.height='3990px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1850px';vizElement.style.height='3990px';} else { vizElement.style.width='100%';vizElement.style.height='4640px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`,
    embedHeightDesktop: 3990,
    embedHeightMobile: 4640
  },
  {
    id: 'real-time-asset-utilization-dashboard',
    slug: 'real-time-asset-utilization-dashboard',
    type: 'data' as const,
    title: 'Real-Time Asset Utilization Dashboard',
    description:
      'Built an automated Looker Studio dashboard to monitor university asset loans. Improved operational transparency, reduced manual reporting, and optimized logistics management through centralized visualization.',
    content: [
  {
    type: 'text',
    value:
      'This project was developed to support monitoring of university asset loan activities by replacing a manual spreadsheet-based process with a centralized dashboard solution.',
  },
  {
    type: 'text',
    value:
      'A Looker Studio dashboard was built and connected to live Google Sheets data to track asset usage in near real-time. Key indicators such as availability, loan duration, and utilization rates were structured for operational visibility.',
  },
  {
    type: 'text',
    value:
      'The dashboard was used as a temporary monitoring tool to provide a more structured and accessible view of asset operations before further system development was carried out by the unit.',
  },
  {
    type: 'text',
    value:
      'Overall, the solution improved visibility of asset usage patterns and supported more efficient operational awareness across departments.',
  },
],
techTags: ['Looker Studio', 'Dashboard', 'Automation', 'Data Visualization'],
    imageUrl: '/pictinporto/logam.png',
    liveUrl: 'https://lookerstudio.google.com/reporting/86091b60-e971-423e-9416-c9dc8cb38811',
    embedUrl: 'https://datastudio.google.com/embed/reporting/86091b60-e971-423e-9416-c9dc8cb38811/page/p_hv8jmkhshd',
  },
  {
    id: 'economic-growth-strategy-umkm',
    slug: 'economic-growth-strategy-umkm',
    type: 'data' as const,
    title: 'Data-Driven Economic Growth Strategy (UMKM)',
    description:
      'Analyzed government datasets during East Java Data Hackathon to uncover economic trends. Delivered insights via infographics and policy recommendations, achieving 5th place overall.',
    content: [
  {
    type: 'text',
    value:
      'This project was my first hackathon experience, focusing on analyzing open government datasets to explore economic growth patterns in the UMKM sector.',
  },
  {
    type: 'text',
    value:
      'Using Python and Pandas, the team performed data cleaning and exploratory analysis to extract meaningful insights from publicly available datasets.',
  },
  {
    type: 'text',
    value:
      'My contribution focused on translating analytical results into visual infographics to communicate findings effectively to a non-technical audience during the competition.',
  },
  {
    type: 'text',
    value:
      'The project achieved 5th place overall, reflecting both the analytical approach and the effectiveness of presenting insights in a clear and accessible manner.',
  },
],
techTags: ['EDA', 'Data Visualization', 'Infographic', 'Python', 'Pandas'],
    imageUrl: '/pictinporto/intprdx.png',
    documentationUrl: 'https://drive.google.com/file/d/1wsxZ6ngaiN57mgagbuUwsOIAK3VSAEoc/view?usp=sharing',
  },
  {
    id: 'enterprise-data-warehouse-design',
    slug: 'enterprise-data-warehouse-design',
    type: 'data' as const,
    title: 'Enterprise Data Warehouse Design',
    description:
      'Designed a relational data warehouse using MySQL, Pentaho, and Power BI. Built ETL pipelines and centralized schemas to improve access to institutional data for strategic planning.',
    content: [
  {
    type: 'text',
    value:
      'This project involved contributing to the design of an enterprise data warehouse for an academic institution using open-source datasets.',
  },
  {
    type: 'text',
    value:
      'My role included assisting in the design of the data warehouse structure and helping implement a relational model using MySQL as the core database system.',
  },
  {
    type: 'text',
    value:
      'In addition, I was responsible for developing Power BI dashboards built on top of the structured data to support data exploration and visualization.',
  },
  {
    type: 'text',
    value:
      'The resulting system helped centralize data from multiple sources and improved accessibility for analysis and decision support purposes.',
  },
],
techTags: ['MySQL', 'Pentaho', 'Power BI', 'ETL', 'Data Warehouse'],
    imageUrl: '/pictinporto/dwh.png',
    documentationUrl: 'https://drive.google.com/drive/folders/19dD-crWmjImJa8MkAsXgMDDS4EMe5UTq?usp=drive_link',
  },
  {
    id: 'education-inequality-analysis-east-java',
    slug: 'education-inequality-analysis-east-java',
    type: 'data' as const,
    title: 'Regional Education Inequality Analysis',
    description:
      'Performed exploratory data analysis on government indices to map education inequality across East Java. Built Tableau dashboards to support data-driven policy recommendations.',
    content: [
  {
    type: 'text',
    value:
      'This project analyzed education inequality across regions in East Java using publicly available government education index data.',
  },
  {
    type: 'text',
    value:
      'Python was used for data preprocessing and exploratory analysis to identify relationships between education access, economic indicators, and geographic factors across different regions.',
  },
  {
    type: 'text',
    value:
      'Interactive Tableau dashboards were developed to visualize disparities and highlight regions with lower access to educational resources.',
  },
  {
    type: 'text',
    value:
      'The insights were intended to support evidence-based policy discussions focused on improving educational equity across the province.',
  },
],
techTags: ['Tableau', 'EDA', 'Data Visualization', 'Python'],
    imageUrl: '/pictinporto/ipm.png',
    liveUrl: 'https://public.tableau.com/app/profile/rahmat.sigit/viz/FINALEDADASHBOARD/FinalDashboard',
    embedHtml: `<div class='tableauPlaceholder' id='viz1780471413845' style='position: relative'><noscript><a href='#'><img alt='Final Dashboard ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;FI&#47;FINALEDADASHBOARD&#47;FinalDashboard&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /><param name='embed_code_version' value='3' /><param name='site_root' value='' /><param name='name' value='FINALEDADASHBOARD&#47;FinalDashboard' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;FI&#47;FINALEDADASHBOARD&#47;FinalDashboard&#47;1.png' /><param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div><script type='text/javascript'>var divElement=document.getElementById('viz1780471413845');var vizElement=divElement.getElementsByTagName('object')[0];if(divElement.offsetWidth>800){vizElement.style.width='1850px';vizElement.style.height='1044px';}else if(divElement.offsetWidth>500){vizElement.style.width='1850px';vizElement.style.height='1044px';}else{vizElement.style.width='100%';vizElement.style.height='2477px';}var scriptElement=document.createElement('script');scriptElement.src='https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement,vizElement);</script>`,
    embedHeightDesktop: 1044,
    embedHeightMobile: 2477
  },
  {
    id: 'property-customer-behavior-analysis',
    slug: 'property-customer-behavior-analysis',
    type: 'data' as const,
    title: 'Property Market Customer Behavior Analysis',
    description:
      'Conducted data wrangling and exploratory analysis on property datasets. Produced actionable infographics to reveal customer behavior patterns and market opportunities.',
    content: [
  {
    type: 'text',
    value:
      'This project explored customer behavior patterns in the property market using open-source datasets, focusing on understanding how different customer segments behave based on transaction data.',
  },
  {
    type: 'text',
    value:
      'Python was used for data wrangling and exploratory data analysis to clean and process raw datasets, and to identify patterns related to purchasing behavior, price sensitivity, and demographic preferences.',
  },
  {
    type: 'text',
    value:
      'The analysis results were translated into infographics designed for non-technical audiences, enabling easier interpretation of key insights and market trends.',
  },
  {
    type: 'text',
    value:
      'The project highlighted distinct customer segments and provided insights that could support more targeted marketing strategies within the property sector.',
  },
],
techTags: ['Data Wrangling', 'EDA', 'Python', 'Visualization'],
    imageUrl: '/pictinporto/cpb.png',
    documentationUrl: 'https://drive.google.com/file/d/17ESrAVYFm247JsAxGbPMKO1_pYSQLE9K/view?usp=sharing',
  },
  {
  id: 'spatial-clustering',
  slug: 'spatial-clustering',
  type: 'data' as const,
  title: 'Spatial Clustering & Routing Analysis',
  description:
    'Developed a graph-based spatial analysis framework combining routing networks and clustering techniques to identify geographically connected regions from coordinate data.',

  content: [
    {
      type: 'text',
      value:
        'This project originated from a real task in my previous work, where I was required to perform route plotting across multiple locations over specific time periods. During that process, I began questioning whether there was a more structured and reusable approach to solving similar spatial routing problems, instead of handling them in a purely ad-hoc manner.',
    },
    {
      type: 'text',
      value:
        'From that observation, I explored the idea of applying graph clustering with strict constraints on cluster size and number of clusters. The goal was to group spatial points into meaningful regions that could later support routing decisions. Using Python and NetworkX, locations were modeled as nodes while spatial relationships formed edges based on geographic proximity.',
    },
    {
      type: 'text',
      value:
        'One of the main challenges was designing a graph structure that still preserved real-world spatial meaning while allowing clustering constraints to be enforced. Different thresholding strategies and clustering configurations were tested before arriving at a stable representation. Folium was then used to visualize routing paths and clustered regions on interactive maps.',
    },
    {
      type: 'text',
      value:
        'Beyond the technical implementation, this project demonstrated how routing problems and spatial planning can be reframed as constrained graph clustering problems. This perspective not only made the solution more generalizable, but also opened opportunities for reuse in future routing-related workflows and similar location-based decision-making problems. The project is still ongoing, with further improvements being explored to refine clustering stability and routing accuracy.',
    },
  ],

  techTags: [
    'Python',
    'NetworkX',
    'Folium',
    'Spatial Analysis',
    'Graph Clustering',
    'Routing Optimization',
    'Ongoing',
  ],
},
  {
    id: 'consumer-market-research-brand',
    slug: 'consumer-market-research-brand',
    type: 'data' as const,
    title: 'Consumer Market Research & Brand Positioning',
    description:
      'Conducted comprehensive market research across some regions. Analyzed survey data to evaluate market penetration, brand positioning, and consumer behavior, delivering actionable insights for strategic decision-making.',
    content: [
  {
    type: 'text',
    value:
      'This project was conducted as a Business Intelligence engagement focused on multi-region consumer market research to evaluate brand awareness, market penetration, and purchasing behavior.',
  },
  {
    type: 'text',
    value:
      'A structured survey was designed and deployed across multiple regions, followed by data cleaning and preparation to ensure consistency and reliability for analysis.',
  },
  {
    type: 'text',
    value:
      'The collected data was analyzed to identify behavioral patterns across demographic and regional segments, highlighting differences in brand perception and consumer preferences.',
  },
  {
    type: 'text',
    value:
      'The final output was a strategic report containing brand positioning insights and competitive analysis, supporting data-driven decision-making for market strategy refinement. Due to confidentiality agreements, specific client details and datasets are not publicly disclosed.',
  },
],
techTags: ['Market Research', 'Data Analysis', 'Business Strategy', 'Confidential'],
  },
  {
    id: 'corporate-training-dashboard-kuanta',
    slug: 'corporate-training-dashboard-kuanta',
    type: 'data' as const,
    title: 'Corporate Training Performance Dashboard (Internship)',
    description:
      'Developed an internal dashboard to evaluate corporate training performance. Enabled real-time tracking of key metrics and supported continuous improvement of training programs.',
    content: [
  {
    type: 'text',
    value:
      'During my internship as a Data Analyst at Kuanta Indonesia, I developed an internal dashboard to monitor and evaluate the performance of corporate training programs.',
  },
  {
    type: 'text',
    value:
      'The dashboard consolidated key metrics such as training completion rates, assessment scores, and participant feedback into a centralized view for training evaluation.',
  },
  {
    type: 'text',
    value:
      'This system enabled stakeholders to identify underperforming training modules and track overall program effectiveness in a more structured and data-driven manner.',
  },
  {
    type: 'text',
    value:
      'Due to confidentiality requirements, specific datasets, visuals, and implementation details are not publicly shared, though the solution contributed to improving internal monitoring and evaluation processes.',
  },
],
techTags: ['Dashboard', 'Performance Analysis', 'Confidential'],
  },
  {
    id: 'agricultural-productivity-dashboard',
    slug: 'agricultural-productivity-dashboard',
    type: 'data' as const,
    title: 'Agricultural Productivity Dashboard (Freelance)',
    description:
      'Created a customized dashboard for monitoring agricultural harvest performance. Provided insights into yield trends and operational inefficiencies to optimize farm management.',
    content: [
  {
    type: 'text',
    value:
      'This freelance project involved developing a custom dashboard to monitor agricultural productivity across multiple farm locations.',
  },
  {
    type: 'text',
    value:
      'Data sources including harvest yield, weather conditions, and operational inputs were integrated and processed to build a unified dataset for analysis.',
  },
  {
    type: 'text',
    value:
      'The dashboard visualized productivity trends and highlighted inefficiencies across different farm plots, enabling better resource allocation and operational decision-making.',
  },
  {
    type: 'text',
    value:
      'The final solution supported farm managers in identifying underperforming areas and improving overall agricultural planning efficiency. Due to confidentiality constraints, client-specific data and implementation details are not publicly disclosed.',
  },
],
techTags: ['Dashboard', 'Data Analysis', 'Confidential'],
  },
  {
    id: 'biogas-digital-platform-project',
    slug: 'biogas-digital-platform-project',
    type: 'creative' as const,
    title: 'Project Management: Community Biogas Digital Platform',
    description:
      'Led a team of 5 in a hackathon to develop a digital platform for a community biogas initiative. Managed the full project lifecycle and delivered a functional solution addressing local energy challenges.',
    content: [
  {
    type: 'text',
    value:
      'This project was my first experience leading a team in a hackathon setting, where we developed a digital platform focused on the sales process of community-based biogas products. The platform was designed to support transaction flow and accessibility between producers and consumers in a local energy ecosystem.',
  },
  {
    type: 'text',
    value:
      'As the team leader, my primary responsibility was coordinating the team, defining the project scope, and ensuring clear communication across all members. This experience was less about technical execution and more about learning how to align ideas, manage discussions, and maintain direction under tight time constraints.',
  },
  {
    type: 'text',
    value:
      'The solution we built was a functional prototype that demonstrated how a simple digital system could support local biogas distribution and improve visibility of available products. While still early-stage, it reflected a practical approach to solving real operational challenges in community energy systems.',
  },
  {
    type: 'text',
    value:
      'Beyond the outcome, the most valuable part of this project was the learning experience itself. It significantly improved my understanding of communication in team-based environments and became an important foundation for how I approach collaboration in subsequent projects.',
  },
  ],
    techTags: ['Project Management', 'Business Analysis', 'Team Leadership'],
    imageUrl: '/pictinporto/kim.png',
    githubUrl: 'https://drive.google.com/drive/folders/1u5jvQZy8RHnRAmEeV6znCik5yDu9ZQxV?usp=drive_link',
  },
  {
    id: 'company-profile-video-logistics-unit',
    slug: 'company-profile-video-logistics-unit',
    type: 'creative' as const,
    title: 'Company Profile Video – Logistics & Asset Management Unit',
    description:
      'Directed and scripted a company profile video for the Logistics and Asset Management Unit. Delivered a clear and engaging narrative to introduce the unit’s role, operations, and services through visual storytelling.',
    content: [
  {
    type: 'text',
    value:
      'This project involved producing a company profile video for the Logistics and Asset Management Unit at Telkom University. The objective was to create a clear and engaging visual narrative that communicates the unit’s role, services, and operational scope.',
  },
  {
    type: 'text',
    value:
      'I was responsible for the full production pipeline, including scriptwriting, storyboarding, directing the shoot, and overseeing post-production editing. The focus was on ensuring that the message remained structured, professional, and easy to understand for both internal and external audiences.',
  },
  {
    type: 'text',
    value:
      'The video combined structured narration with visual storytelling to present the unit’s workflow and responsibilities in a more accessible format. Careful attention was given to pacing, clarity, and visual composition to maintain viewer engagement throughout the video.',
  },
  {
    type: 'text',
    value:
      'The final output was used for institutional communication and onboarding purposes. This project strengthened my ability to translate operational information into visual narratives that are both informative and engaging.',
  },
  ],
    techTags: ['Video Production', 'Scriptwriting', 'Directing', 'Storytelling'],
    imageUrl: '/pictinporto/image044.png',
    youtubeUrl: 'https://youtu.be/eqqvVMR_YgM?si=5sHQaYH03tM_9RoF',
  },
  {
    id: 'pkkmb-dewangkara-video-opening',
    slug: 'pkkmb-dewangkara-video-opening',
    type: 'creative' as const,
    title: 'PKKMB Dewangkara Maetala 2022 Video Opening',
    description:
      'Produced and directed an opening video for campus orientation (PKKMB). Created engaging visual content and narration scripts to highlight campus identity and innovation initiatives.',
    content: [
  {
    type: 'text',
    value:
      'This project involved producing a series of 11 opening videos for different study programs as part of the PKKMB Dewangkara Maetala 2022 event at Telkom University. Each video was designed to introduce the identity and spirit of its respective program during the student orientation opening segment.',
  },
  {
    type: 'text',
    value:
      'My direct involvement was focused on the first four videos, where I contributed to concept development and creative direction during the early production phase. For the remaining videos, my role shifted to reviewer and consultant, providing feedback while the final concept and execution were handled fully by each program study team.',
  },
  {
    type: 'text',
    value:
      'The goal of these videos was to create a consistent yet distinctive opening experience that reflects each program’s identity while maintaining a unified narrative structure for the overall event. This required balancing creativity with coordination across multiple stakeholders.',
  },
  {
    type: 'text',
    value:
      'This project provided valuable experience in large-scale creative coordination and reinforced my understanding of how structured feedback and early-stage direction can influence the quality and consistency of multi-output production workflows.',
  },
],
techTags: ['Video Production', 'Scriptwriting', 'Directing', 'Creative Concept'],
    imageUrl: '/pictinporto/image045.png',
    youtubeUrl: 'https://youtu.be/msDmD_qm8FM?si=-KFeHifIeCsYftpH',
  },
  {
    id: 'webinar-opening-video-speakup',
    slug: 'webinar-opening-video-speakup',
    type: 'creative' as const,
    title: 'Webinar Opening Video – Speak Up ITTelkom Surabaya',
    description:
      'Directed and scripted a promotional opening video for a webinar event aimed at introducing academic majors. Delivered clear messaging and engaging visuals to enhance audience experience.',
    content:[{
  type: 'text',
  value:
    'This project involved producing a series of 11 opening videos for different study programs as part of the PKKMB Dewangkara Maetala 2022 event at Telkom University. Each video was created to introduce the identity and character of its respective program during the student orientation opening segment.',
},
{
  type: 'text',
  value:
    'My direct involvement was primarily in the first four videos, where I contributed to early-stage concept development and creative direction. For the remaining videos, my role shifted to reviewer and consultant, providing feedback while the concept and production execution were handled independently by each study program team.',
},
{
  type: 'text',
  value:
    'The goal of the project was to maintain a consistent opening format across all videos while still allowing each program to express its unique identity. This required aligning creative direction across multiple stakeholders and ensuring coherence in storytelling structure.',
},
{
  type: 'text',
  value:
    'This experience gave me exposure to large-scale collaborative production workflows and reinforced the importance of structured feedback in maintaining quality and consistency across multiple outputs managed by different teams.',
},
],
techTags: ['Video Production', 'Scriptwriting', 'Directing', 'Content Creation'],
    imageUrl: '/pictinporto/image043.png',
    youtubeUrl: 'https://youtube.com/playlist?list=PLsayhkly1VDtrKKmRerUi3--Bfdf5Qyp4&si=xlPIyQHz4nGY7fkO',
  },
  {
  id: 'personal-illustration-gallery',
  slug: 'personal-illustration-gallery',
  type: 'creative' as const,
  title: 'Personal Illustration Gallery',
  description:
    'A collection of personal illustrations including digital drawings and line art, showcasing visual storytelling, character exploration, and creative experimentation.',

  content: [
      
    {
      type: 'text',
      value:
        'Although most of my work focuses on data and analytics, illustration has been a long-standing creative outlet. Long before I became interested in machine learning and graph analysis, I spent much of my free time drawing and experimenting with visual ideas. Over time, illustration became a hobby that helped me develop creativity and visual communication skills alongside my technical interests.',
    },
    {
        type: 'image',
        src: '/pictinporto/ig1.png',
        alt: '',
    },
    {
      type: 'text',
      value:
        'This gallery showcases a collection of personal illustrations, including both digital artwork created using Autodesk SketchBook on a mobile device and traditional pen-based line art. The works explore different styles, compositions, and approaches to visual storytelling. Working primarily on a smartphone introduced limitations in screen space and precision, requiring patience, adaptability, and careful attention to detail throughout the creative process.',
    },
    {
      type: 'text',
      value:
        'The collection is published through my personal Instagram art account as an ongoing creative portfolio. While separate from my data-related projects, illustration has influenced how I approach communication and storytelling. Whether presenting analytical insights or creating artwork, I enjoy translating ideas into visuals that are clear, engaging, and easy to understand.',
    },
  ],

  techTags: [
    'Illustration',
    'Digital Art',
    'Line Art',
    'Visual Storytelling',
  ],

  imageUrl: '/pictinporto/ig.png',
  youtubeUrl: 'https://www.instagram.com/lotk.8l/',
}

]


export const workExperience: Experience[] = [
  {
    type: 'work',
    role: 'Junior Business Intelligence',
    organization: 'Tangga Agency',
    location: 'South Jakarta, Indonesia',
    startDate: 'Nov 2025',
    endDate: 'Mar 2026',
    description: [
      'Developed interactive dashboards using Looker Studio to monitor business performance and insights.',
      'Transformed raw data into meaningful and actionable insights for business decision-making.',
      'Collaborated with cross-functional teams to deliver data-driven analysis and reporting.',
    ],
  },
  {
    type: 'work',
    role: 'Student Staff',
    organization: 'Telkom University',
    location: 'Surabaya, Indonesia',
    startDate: 'Jul 2023',
    endDate: 'Oct 2025',
    description: [
      'Supported logistics operations and asset management, including reporting processes.',
      'Coordinated student staff and contributed to improving workflow efficiency.',
    ],
  },
  {
    type: 'work',
    role: 'Freelance Data Analyst',
    organization: 'Self-Employed',
    location: 'Remote, Indonesia',
    startDate: 'Jun 2023',
    endDate: 'Feb 2025',
    description: [
      'Conducted end-to-end data analysis, visualization, and reporting for various clients.',
      'Performed exploratory data analysis and built predictive models using Python.',
      'Delivered actionable insights to support strategic and operational decision-making.',
    ],
  },
  {
    type: 'work',
    role: 'Data Analyst Intern',
    organization: 'Kuanta Indonesia',
    location: 'Surabaya, Indonesia',
    startDate: 'Feb 2024',
    endDate: 'Jun 2024',
    description: [
      'Designed dashboards to evaluate training performance and key metrics.',
      'Supported data organization and reporting processes to improve program monitoring.',
    ],
  },
  {
    type: 'work',
    role: 'Teaching Assistant',
    organization: 'Telkom University',
    location: 'Surabaya, Indonesia',
    startDate: 'Mar 2023',
    endDate: 'Jan 2024',
    description: [
      'Assisted in teaching data wrangling and exploratory data analysis (EDA).',
      'Guided students in analytical thinking and problem-solving during practicum sessions.',
    ],
  },
]

export const education: Education[] = [
  {
    type: 'education',
    degree: 'Bachelor of Data Science',
    institution: 'Telkom University',
    location: 'Surabaya, Indonesia',
    startDate: 'Sep 2021',
    endDate: 'Aug 2025',
    gpa: '3.96',
    honors: 'Summa Cum Laude',
    description: [
      'Graduated with highest distinction (Summa Cum Laude) with a GPA of 3.96/4.00.',
      'Thesis: Sentiment and Social Network Analysis on Social Media Discourse.',
      'Relevant coursework: Machine Learning, Data Mining, Statistical Modeling, Database Systems, Data Visualization, Big Data Analytics.',
      'Head of the Data Science Student Association.',
    ],
  },
  {
    type: 'education',
    degree: 'Science (IPA)',
    institution: 'SMA Negeri 6 Surabaya',
    location: 'Surabaya, East Java, Indonesia',
    startDate: 'Jul 2017',
    endDate: 'May 2020',
    description: [
      'Completed senior high school with a focus on natural sciences (Mathematics, Physics, Chemistry, Biology).',
      'Participated in school mathematics and science olympiad competitions.',
    ],
  },
]
