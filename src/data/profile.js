export const profile = {
  name: 'Shreedatha DS',
  role: 'Data Scientist | Machine Learning | Analytics',
  location: 'Bengaluru, India',
  email: 'dsshreedatha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shreedatha-d-s',
  github: 'https://github.com/shreee06',
  // Empty string when public/cv/Shreedatha_DS_CV.pdf is absent at build time.
  cv: typeof __CV_FILE__ === 'string' && __CV_FILE__ ? import.meta.env.BASE_URL + __CV_FILE__ : '',
}

export const about = [
  'I am a Data Science and Analytics postgraduate (MCA, Data Analytics) with strong Python and SQL skills and hands-on machine-learning experience from academic, research and independent work.',
  'My independent projects apply the same methods to real-world transaction data: demand forecasting, recommender systems, price elasticity, customer segmentation and lifetime value, and a safety-conscious natural-language analytics assistant.',
  'In each one I try to define the evaluation protocol first, guard against leakage, compare against a simple baseline, and write down what the results do not show.',
  'I am looking for Data Scientist, Machine Learning Engineer, Data Analyst and applied AI roles across industries.',
]

export const principles = [
  ['Protocol first', 'Evaluation windows and analysis plans fixed before modelling.'],
  ['Leakage-aware', 'Time-based splits and automated leakage tests.'],
  ['Baselines matter', 'Every model is compared against a simple, strong baseline.'],
  ['Honest limits', 'Limitations are reported next to results.'],
]

export const experience = [
  {
    role: 'Technical Executive Assistant to the Pro Vice Chancellor',
    org: 'PES University, Bengaluru',
    dates: '29 September 2026 – 16 October 2026',
    points: [
      'Assisted with AI/ML pipelines and generative AI workflows for student and library email handling and PESU Academy support.',
      'Analysed student and faculty data to produce analytics, models and visualisations for operational insight.',
      'Applied regex-based extraction to research-paper documents.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Center for Robotics, Automation and Intelligence Systems, PES University',
    dates: '3 September 2025 – 6 October 2026',
    points: [
      'Worked on HRITI — Human-Robot Interaction with Translational Intelligence.',
      'Contributed to NLP and HRI-related research tasks.',
      'Supported technical investigation and project coordination.',
    ],
  },
]

export const education = [
  { degree: 'MCA, specialization in Data Analytics', org: 'PES University, Bengaluru', years: '2023–2025' },
  { degree: 'BCA, specialization in Data Science', org: 'Amrita Vishwa Vidyapeetham, Mysuru', years: '2020–2023' },
]

export const certifications = [
  { title: 'Robotics Certification in Mechanical Engineering', by: 'NPTEL, IIT Kharagpur', kind: 'Certification' },
  { title: 'ROS 2 Jazzy', by: 'Udemy', kind: 'Certification' },
  { title: 'Advanced Arduino Programming and Embedded Systems', by: '', kind: 'Certification' },
  { title: 'Computer Vision and Machine Learning Applications', by: '', kind: 'Certification' },
  { title: 'Manuscript, Journal of Biomechanics (Elsevier)', by: 'Submitted — not accepted or published', kind: 'Under review', warn: true },
  { title: 'RoboSapien presentations', by: 'IEEE CCEM and ICCHA, 2023', kind: 'Presentation' },
]

export const skills = [
  ['Programming & Data', ['Python', 'SQL', 'R', 'Data manipulation', 'Data cleaning', 'Validation', 'Debugging', 'SQL joins', 'Subqueries', 'Window functions']],
  ['Machine Learning & Statistics', ['Supervised learning', 'Unsupervised learning', 'Regression', 'Classification', 'Feature engineering', 'Model evaluation', 'Hypothesis testing', 'Exploratory data analysis', 'Correlation analysis', 'Predictive modelling']],
  ['Applied Analytics & Modelling', ['Customer lifetime value', 'Propensity models', 'Recommendation systems', 'Candidate generation', 'Learning-to-rank', 'Price elasticity', 'Promotion analysis']],
  ['Data Visualization & BI', ['Excel', 'VLOOKUP', 'Pivot Tables', 'Power Query', 'Tableau', 'Power BI', 'Plotly', 'Streamlit']],
  ['Python Libraries & Tools', ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'LightGBM', 'SciPy', 'Statsmodels', 'SQLite', 'Pytest', 'Git', 'GitHub']],
  ['Generative AI', ['LLMs', 'Prompt engineering', 'Generative AI', 'Agentic AI', 'LangGraph', 'RAG', 'LLM evaluation', 'NLP', 'Conversational assistants', 'Groq API', 'sqlglot']],
  ['Big Data', ['Apache Spark', 'Hadoop']],
]
