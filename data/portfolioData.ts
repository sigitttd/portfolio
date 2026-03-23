import type { PersonalInfo, SkillCategory, Project, Experience, Education } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Rahmat Sigit Hidayat',
  title: 'Data Analyst',
  tagline: 'Turning raw data into actionable insights — one dashboard at a time.',
  about:
    'I am a Data Analyst with a strong interest in business intelligence, data storytelling, and analytical problem-solving. With a background in Data Science and hands-on experience in dashboards, machine learning, and data visualization, I enjoy transforming complex data into insights that are both meaningful and actionable. I also bring a creative perspective through storytelling and design, allowing me to communicate data in a way that is clear, engaging, and impactful.',
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
    id: 'sentiment-social-network-analysis-malang',
    type: 'data' as const,
    title: 'Sentiment and Social Network Analysis of Tourist Destinations',
    description:
      'Conducted sentiment analysis and social network analysis on TripAdvisor reviews of tourist destinations in Malang. Applied SVM-based NLP techniques and graph analysis to uncover visitor perception and relationships between destinations.',
    techTags: ['Python', 'SVM', 'NLP', 'NetworkX', 'Gephi', 'Pandas'],
    imageUrl: '/pictinporto/image011.png',
    githubUrl: 'https://github.com/[github-username]/sentiment-social-network-analysis',
  },
  {
    id: 'citation-network-analysis-research',
    type: 'data' as const,
    title: 'Citation Network Analysis in Scientific Research',
    description:
      'Analyzed researcher collaboration networks through citation data using graph modeling. Led data collection via web scraping and visualized knowledge structures. Published and presented at an international conference (ICoDSA 2025).',
    techTags: ['Python', 'Web Scraping', 'NetworkX', 'Gephi', 'Pandas'],
    imageUrl: '/pictinporto/image013.png',
    publicationUrl: 'https://doi.org/[doi-placeholder]',
  },
  {
    id: 'dashboard-location-segmentation',
    type: 'data' as const,
    title: 'Dashboard for Location Segmentation',
    description:
      'Developed an interactive Tableau dashboard to visualize clustering of prospective students for admission strategies. Enabled insights into segmentation characteristics and supported data-driven marketing decisions.',
    techTags: ['Tableau', 'Python', 'Clustering', 'Data Cleaning', 'Pandas'],
    imageUrl: '/pictinporto/image016.png',
    liveUrl: 'https://public.tableau.com/app/profile/[tableau-username]',
  },
  {
    id: 'asset-monitoring-dashboard-telkom',
    type: 'data' as const,
    title: 'Asset Monitoring Dashboard',
    description:
      'Built a Looker Studio dashboard to monitor asset loans for a university logistics unit. Improved tracking efficiency and provided better visibility into asset utilization and operational decisions.',
    techTags: ['Looker Studio', 'Data Visualization', 'Dashboard', 'Google Data Studio'],
    imageUrl: '/pictinporto/image024.jpg',
    liveUrl: 'https://lookerstudio.google.com/',
  },
  {
    id: 'strategies-analysis-umkm-east-java',
    type: 'data' as const,
    title: 'Strategies Analysis for UMKM Enterprises',
    description:
      'Performed data-driven analysis during East Java Data Hackathon to evaluate UMKM development strategies. Delivered insights through infographics and proposed actionable recommendations based on government datasets.',
    techTags: ['Python', 'EDA', 'Data Visualization', 'Infographic', 'Pandas'],
    imageUrl: '/pictinporto/image019.jpg',
    publicationUrl: 'https://drive.google.com/',
  },
  {
    id: 'business-case-biogas-website',
    type: 'data' as const,
    title: 'Business Case for Biogas Website Development',
    description:
      'Led a team as project manager in a hackathon to develop a business case and website solution for a community biogas initiative. Managed execution and delivered final presentation to stakeholders.',
    techTags: ['Project Management', 'Web Development', 'Business Analysis'],
    imageUrl: '/pictinporto/image021.png',
    githubUrl: 'https://github.com/[github-username]/biogas-website',
  },
  {
    id: 'data-warehouse-ittelkom',
    type: 'data' as const,
    title: 'Data Warehouse Design for Academic System',
    description:
      'Designed a data warehouse for academic data using MySQL and Pentaho. Built relational schemas and dashboards to improve access to academic insights and support decision-making processes.',
    techTags: ['MySQL', 'Pentaho', 'Tableau', 'ETL', 'Data Warehouse', 'ERD'],
    imageUrl: '/pictinporto/image037.png',
    githubUrl: 'https://github.com/[github-username]/data-warehouse-design',
  },
  {
    id: 'education-impact-hdi-east-java',
    type: 'data' as const,
    title: 'Education Impact on Human Development Index',
    description:
      'Conducted exploratory data analysis on education data in East Java and visualized inequality insights using Tableau dashboards. Provided recommendations to address regional disparities.',
    techTags: ['Tableau', 'EDA', 'Data Visualization', 'Python', 'Pandas'],
    imageUrl: '/pictinporto/image026.png',
    liveUrl: 'https://public.tableau.com/',
  },
  {
    id: 'customer-behavior-property',
    type: 'data' as const,
    title: 'Customer Behavior Analysis in Property Business',
    description:
      'Performed data wrangling and analysis on property customer datasets. Delivered insights through an infographic highlighting key behavioral patterns and business opportunities.',
    techTags: ['Data Wrangling', 'Python', 'Pandas', 'Data Visualization'],
    imageUrl: '/pictinporto/image036.png',
    documentationUrl: 'https://drive.google.com/',
  },
{
  id: 'training-performance-dashboard-kuanta',
  type: 'data' as const,
  title: 'Training Performance Evaluation Dashboard (Internship Project)',
  description:
    'Developed an internal dashboard to monitor and evaluate training program performance during an internship at Kuanta Institute. Enabled stakeholders to track key metrics and assess program effectiveness for continuous improvement.',
  techTags: ['Dashboard', 'Data Visualization', 'Performance Analysis'],
  // imageUrl: '/pictinporto/image000.png',
},
{
  id: 'agricultural-harvest-dashboard',
  type: 'data' as const,
  title: 'Agricultural Harvest Performance Dashboard (Freelance Project)',
  description:
    'Built a dashboard solution to monitor agricultural land harvest performance for a client. Provided insights into productivity trends and supported data-driven decision-making in farm management.',
  techTags: ['Dashboard', 'Data Visualization', 'Data Analysis'],
  // imageUrl: '/pictinporto/image000.png',
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
