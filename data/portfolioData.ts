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
    category: 'Data & Analysis',
    skills: [
      'Data Analysis',
      'Exploratory Data Analysis (EDA)',
      'Machine Learning',
      'Data Warehouse Design',
      'Power Query',
    ],
  },
  {
    category: 'Programming & Libraries',
    skills: [
      'Python',
      'SQL',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'LaTeX',
    ],
  },
  {
    category: 'Data Visualization & BI Tools',
    skills: [
      'Tableau',
      'Power BI',
      'Looker Studio',
      'Gephi',
      'Excel',
      'Google Sheets',
    ],
  },
  {
    category: 'Soft & Creative Skills',
    skills: [
      'Data Storytelling',
      'Problem Solving',
      'Critical Thinking',
      'Communication',
      'Leadership',
      'Project Management',
      'Video Production',
      'Scriptwriting',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'tourism-sentiment-network-analysis',
    type: 'data' as const,
    title: 'Tourism Sentiment & Network Analysis Engine',
    description:
      'Developed a sentiment analysis and social network model using SVM to process 1,400+ TripAdvisor reviews. Extracted insights on public perception and destination connectivity in Malang tourism.',
    techTags: ['Python', 'SVM', 'NLP', 'Network Analysis', 'Web Scraping'],
    imageUrl: '/pictinporto/sasna.png',
    githubUrl: 'https://github.com/sigitttd/sa_sna-malang_tourism',
  },
  {
    id: 'academic-collaboration-network-analysis',
    type: 'data' as const,
    title: 'Academic Collaboration Network Analysis',
    description:
      'Led a large-scale graph analysis project on collaboration patterns among 4,800+ researchers. Built end-to-end pipelines from web scraping to visualization. Published as first author at ICoDSA 2025.',
    techTags: ['Python', 'Web Scraping', 'Network Analysis', 'Gephi', 'Data Mining'],
    imageUrl: '/pictinporto/cna.png',
    publicationUrl: 'https://ieeexplore.ieee.org/document/11157371/',
  },
    {
    id: 'demographic-segmentation-dashboard',
    type: 'data' as const,
    title: 'Demographic Segmentation Dashboard for Targeted Marketing',
    description:
      'Developed an interactive Tableau dashboard to segment prospective students based on geographic and interest clustering. Enabled data-driven marketing strategies and supported admission campaigns. Secured two Intellectual Property (HKI) registrations.',
    techTags: ['Tableau', 'Clustering', 'Data Segmentation', 'Data Visualization'],
    imageUrl: '/pictinporto/pintus.png',
    liveUrl: 'https://public.tableau.com/app/profile/rahmat.sigit/viz/PNLTN_PIN-TUS_05rev/Dashboard_PIN-TUS',
  },
  {
    id: 'real-time-asset-utilization-dashboard',
    type: 'data' as const,
    title: 'Real-Time Asset Utilization Dashboard',
    description:
      'Built an automated Looker Studio dashboard to monitor university asset loans. Improved operational transparency, reduced manual reporting, and optimized logistics management through centralized visualization.',
    techTags: ['Looker Studio', 'Dashboard', 'Automation', 'Data Visualization'],
    imageUrl: '/pictinporto/logam.png',
    liveUrl: 'https://lookerstudio.google.com/reporting/86091b60-e971-423e-9416-c9dc8cb38811',
  },
  {
    id: 'economic-growth-strategy-umkm',
    type: 'data' as const,
    title: 'Data-Driven Economic Growth Strategy (UMKM)',
    description:
      'Analyzed government datasets during East Java Data Hackathon to uncover economic trends. Delivered insights via infographics and policy recommendations, achieving 5th place overall.',
    techTags: ['EDA', 'Data Visualization', 'Infographic', 'Python', 'Pandas'],
    imageUrl: '/pictinporto/intprdx.png',
    documentationUrl: 'https://drive.google.com/file/d/1wsxZ6ngaiN57mgagbuUwsOIAK3VSAEoc/view?usp=sharing',
  },
  {
    id: 'enterprise-data-warehouse-design',
    type: 'data' as const,
    title: 'Enterprise Data Warehouse Design',
    description:
      'Designed a relational data warehouse using MySQL, Pentaho, and Power BI. Built ETL pipelines and centralized schemas to improve access to institutional data for strategic planning.',
    techTags: ['MySQL', 'Pentaho', 'Power BI', 'ETL', 'Data Warehouse'],
    imageUrl: '/pictinporto/dwh.png',
    documentationUrl: 'https://drive.google.com/drive/folders/19dD-crWmjImJa8MkAsXgMDDS4EMe5UTq?usp=drive_link',
  },
  {
    id: 'education-inequality-analysis-east-java',
    type: 'data' as const,
    title: 'Regional Education Inequality Analysis',
    description:
      'Performed exploratory data analysis on government indices to map education inequality across East Java. Built Tableau dashboards to support data-driven policy recommendations.',
    techTags: ['Tableau', 'EDA', 'Data Visualization', 'Python'],
    imageUrl: '/pictinporto/ipm.png',
    liveUrl: 'https://public.tableau.com/app/profile/rahmat.sigit/viz/FINALEDADASHBOARD/FinalDashboard',
  },
  {
    id: 'property-customer-behavior-analysis',
    type: 'data' as const,
    title: 'Property Market Customer Behavior Analysis',
    description:
      'Conducted data wrangling and exploratory analysis on property datasets. Produced actionable infographics to reveal customer behavior patterns and market opportunities.',
    techTags: ['Data Wrangling', 'EDA', 'Python', 'Visualization'],
    imageUrl: '/pictinporto/cpb.png',
    documentationUrl: 'https://drive.google.com/file/d/17ESrAVYFm247JsAxGbPMKO1_pYSQLE9K/view?usp=sharing',
  },
  {
    id: 'consumer-market-research-brand',
    type: 'data' as const,
    title: 'Consumer Market Research & Brand Positioning',
    description:
      'Conducted comprehensive market research across some regions. Analyzed survey data to evaluate market penetration, brand positioning, and consumer behavior, delivering actionable insights for strategic decision-making.',
    techTags: ['Market Research', 'Data Analysis', 'Business Strategy','Confidential'],
  },
  {
    id: 'corporate-training-dashboard-kuanta',
    type: 'data' as const,
    title: 'Corporate Training Performance Dashboard (Internship)',
    description:
      'Developed an internal dashboard to evaluate corporate training performance. Enabled real-time tracking of key metrics and supported continuous improvement of training programs.',
    techTags: ['Dashboard', 'Performance Analysis', 'Confidential'],
  },
  {
    id: 'agricultural-productivity-dashboard',
    type: 'data' as const,
    title: 'Agricultural Productivity Dashboard (Freelance)',
    description:
      'Created a customized dashboard for monitoring agricultural harvest performance. Provided insights into yield trends and operational inefficiencies to optimize farm management.',
    techTags: ['Dashboard', 'Data Analysis', 'Confidential'],
  },
  {
    id: 'biogas-digital-platform-project',
    type: 'creative' as const,
    title: 'Project Management: Community Biogas Digital Platform',
    description:
      'Led a team of 5 in a hackathon to develop a digital platform for a community biogas initiative. Managed the full project lifecycle and delivered a functional solution addressing local energy challenges.',
    techTags: ['Project Management', 'Business Analysis', 'Team Leadership'],
    imageUrl: '/pictinporto/kim.png',
    githubUrl: 'https://drive.google.com/drive/folders/1u5jvQZy8RHnRAmEeV6znCik5yDu9ZQxV?usp=drive_link',
  },
  {
    id: 'company-profile-video-logistics-unit',
    type: 'creative' as const,
    title: 'Company Profile Video – Logistics & Asset Management Unit',
    description:
      'Directed and scripted a company profile video for the Logistics and Asset Management Unit. Delivered a clear and engaging narrative to introduce the unit’s role, operations, and services through visual storytelling.',
    techTags: ['Video Production', 'Scriptwriting', 'Directing', 'Storytelling'],
    imageUrl: '/pictinporto/image044.png',
    youtubeUrl: 'https://youtu.be/eqqvVMR_YgM?si=5sHQaYH03tM_9RoF',
  },
  {
    id: 'pkkmb-dewangkara-video-opening',
    type: 'creative' as const,
    title: 'PKKMB Dewangkara Maetala 2022 Video Opening',
    description:
      'Produced and directed an opening video for campus orientation (PKKMB). Created engaging visual content and narration scripts to highlight campus identity and innovation initiatives.',
    techTags: ['Video Production', 'Scriptwriting', 'Directing', 'Creative Concept'],
    imageUrl: '/pictinporto/image045.png',
    youtubeUrl: 'https://youtu.be/msDmD_qm8FM?si=-KFeHifIeCsYftpH',
  },
  {
    id: 'webinar-opening-video-speakup',
    type: 'creative' as const,
    title: 'Webinar Opening Video – Speak Up ITTelkom Surabaya',
    description:
      'Directed and scripted a promotional opening video for a webinar event aimed at introducing academic majors. Delivered clear messaging and engaging visuals to enhance audience experience.',
    techTags: ['Video Production', 'Scriptwriting', 'Directing', 'Content Creation'],
    imageUrl: '/pictinporto/image043.png',
    youtubeUrl: 'https://youtube.com/playlist?list=PLsayhkly1VDtrKKmRerUi3--Bfdf5Qyp4&si=xlPIyQHz4nGY7fkO',
  },
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
