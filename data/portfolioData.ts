import type { PersonalInfo, SkillCategory, Project, Experience, Education } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Rahmat Sigit Hidayat',
  title: 'Data Analyst',
  tagline: 'Turning raw data into actionable insights — one dashboard at a time.',
  about:
    'I am a Data Science graduate from Telkom University with a strong foundation in data analysis, machine learning, and data visualization. I specialize in transforming complex datasets into clear, compelling stories that drive business decisions. With hands-on experience in BI development, network analysis, and statistical modeling, I bring both technical depth and communication skills to every project. I am passionate about data storytelling and building tools that make information accessible to everyone.',
  email: '[email]',
  phone: '[phone]',
  location: 'Bandung, West Java, Indonesia',
  linkedin: 'https://linkedin.com/in/[linkedin-username]',
  github: 'https://github.com/[github-username]',
  tableau: 'https://public.tableau.com/app/profile/[tableau-username]',
}

export const skills: SkillCategory[] = [
  {
    category: 'Technical Skills',
    skills: [
      'Data Analysis',
      'Data Visualization',
      'Statistical Modeling',
      'Machine Learning',
      'Business Intelligence',
      'ETL Pipeline Design',
      'Data Warehouse Design',
      'Network Analysis',
      'Natural Language Processing',
      'Sentiment Analysis',
    ],
  },
  {
    category: 'Programming & Libraries',
    skills: [
      'Python',
      'SQL',
      'R',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
      'NetworkX',
      'NLTK',
      'TensorFlow',
    ],
  },
  {
    category: 'Tools',
    skills: [
      'Tableau',
      'Power BI',
      'Google Looker Studio',
      'PostgreSQL',
      'MySQL',
      'BigQuery',
      'Google Sheets',
      'Microsoft Excel',
      'Jupyter Notebook',
      'Git',
      'dbt',
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Data Storytelling',
      'Critical Thinking',
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Project Management',
      'Attention to Detail',
      'Adaptability',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'sentiment-social-network-analysis',
    title: 'Sentiment and Social Network Analysis',
    description:
      'Analyzed public sentiment and community structure on social media data using NLP techniques and graph-based network analysis. Identified key influencers and sentiment trends across discussion clusters.',
    techTags: ['Python', 'NLTK', 'NetworkX', 'Pandas', 'Matplotlib', 'Gephi'],
    imageUrl: '/pictinporto/image034.png',
    githubUrl: 'https://github.com/[github-username]/sentiment-social-network-analysis',
  },
  {
    id: 'citation-network-analysis',
    title: 'Citation Network Analysis',
    description:
      'Built a citation graph from academic publication data to identify the most influential papers and authors in a research domain. Applied centrality metrics and community detection algorithms to surface key knowledge clusters.',
    techTags: ['Python', 'NetworkX', 'Pandas', 'Gephi', 'Matplotlib'],
    imageUrl: '/pictinporto/image035.png',
    githubUrl: 'https://github.com/[github-username]/citation-network-analysis',
  },
  {
    id: 'dashboard-location-segmentation',
    title: 'Dashboard for Location Segmentation',
    description:
      'Designed and developed an interactive Tableau dashboard to visualize geographic customer segmentation. Enabled stakeholders to explore regional performance metrics and identify high-potential market areas.',
    techTags: ['Tableau', 'SQL', 'Python', 'K-Means Clustering', 'Pandas'],
    imageUrl: '/pictinporto/image042.png',
    liveUrl: 'https://public.tableau.com/app/profile/[tableau-username]/viz/location-segmentation',
  },
  {
    id: 'asset-monitoring-dashboard',
    title: 'Asset Monitoring Dashboard',
    description:
      'Developed a real-time asset monitoring dashboard for tracking equipment status and utilization across multiple sites. Integrated data from multiple sources into a unified BI view for operations teams.',
    techTags: ['Power BI', 'SQL', 'Python', 'DAX', 'ETL'],
    imageUrl: '/pictinporto/image043.png',
    liveUrl: 'https://app.powerbi.com/[report-id]',
  },
  {
    id: 'data-warehouse-design',
    title: 'Data Warehouse Design',
    description:
      'Designed and implemented a dimensional data warehouse using star schema modeling for a retail use case. Built ETL pipelines to ingest, transform, and load transactional data into analytical tables optimized for reporting.',
    techTags: ['PostgreSQL', 'dbt', 'Python', 'Star Schema', 'ETL', 'SQL'],
    imageUrl: '/pictinporto/image044.png',
    githubUrl: 'https://github.com/[github-username]/data-warehouse-design',
  },
  {
    id: 'strategies-analysis-umkm',
    title: 'Strategies Analysis for UMKM Enterprises',
    description:
      "Conducted a comprehensive strategic analysis for small and medium enterprises (UMKM) in Indonesia using SWOT, Porter's Five Forces, and data-driven market segmentation. Delivered actionable recommendations to improve competitiveness.",
    techTags: ['Python', 'Pandas', 'Tableau', 'Statistical Analysis', 'Market Research'],
    imageUrl: '/pictinporto/image045.png',
    publicationUrl: 'https://doi.org/[doi-placeholder]',
  },
]

export const workExperience: Experience[] = [
  {
    type: 'work',
    role: 'Junior Business Intelligence Analyst',
    organization: 'Marketing Agency',
    location: 'Bandung, Indonesia',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
      'Developed and maintained interactive dashboards in Tableau and Power BI for campaign performance tracking.',
      'Automated weekly reporting pipelines using Python and SQL, reducing manual effort by 60%.',
      'Collaborated with marketing teams to translate business questions into data requirements and analytical solutions.',
      'Performed cohort analysis and customer segmentation to support targeted marketing strategies.',
    ],
  },
  {
    type: 'work',
    role: 'Freelance Data Analyst',
    organization: 'Self-Employed',
    location: 'Remote',
    startDate: 'Jun 2023',
    endDate: 'Dec 2023',
    description: [
      'Delivered end-to-end data analysis projects for clients across e-commerce and education sectors.',
      'Built custom dashboards and reports using Tableau and Google Looker Studio.',
      'Performed exploratory data analysis and statistical modeling to uncover business insights.',
      'Provided data cleaning, transformation, and visualization services using Python and SQL.',
    ],
  },
  {
    type: 'work',
    role: 'Data Analyst Intern',
    organization: 'Kuanta Indonesia',
    location: 'Bandung, Indonesia',
    startDate: 'Feb 2023',
    endDate: 'May 2023',
    description: [
      'Assisted in building and maintaining ETL pipelines for data ingestion from multiple sources.',
      'Created analytical reports and visualizations to support product and business teams.',
      'Conducted data quality checks and implemented validation rules to ensure data integrity.',
      'Participated in sprint planning and contributed to data infrastructure improvements.',
    ],
  },
  {
    type: 'work',
    role: 'Assistant Lecturer',
    organization: 'Telkom University',
    location: 'Bandung, Indonesia',
    startDate: 'Sep 2022',
    endDate: 'Jan 2023',
    description: [
      'Assisted in delivering practical sessions for Data Mining and Statistics courses.',
      'Guided students through hands-on exercises in Python, R, and data analysis tools.',
      'Graded assignments and provided constructive feedback to support student learning.',
      'Developed supplementary learning materials and coding exercises for lab sessions.',
    ],
  },
  {
    type: 'work',
    role: 'Student Staff',
    organization: 'Telkom University',
    location: 'Bandung, Indonesia',
    startDate: 'Mar 2021',
    endDate: 'Aug 2022',
    description: [
      'Supported administrative and academic activities within the Faculty of Informatics.',
      'Assisted in organizing faculty events, seminars, and student orientation programs.',
      'Maintained and updated faculty databases and documentation systems.',
      'Coordinated communication between students and academic staff.',
    ],
  },
]

export const education: Education[] = [
  {
    type: 'education',
    degree: 'Bachelor of Data Science',
    institution: 'Telkom University',
    location: 'Bandung, Indonesia',
    startDate: 'Aug 2020',
    endDate: 'Jul 2024',
    gpa: '3.96',
    honors: 'Summa Cum Laude',
    description: [
      'Graduated with highest distinction (Summa Cum Laude) with a GPA of 3.96/4.00.',
      'Thesis: Sentiment and Social Network Analysis on Social Media Discourse.',
      'Relevant coursework: Machine Learning, Data Mining, Statistical Modeling, Database Systems, Data Visualization, Big Data Analytics.',
      'Active member of the Data Science Student Association.',
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
