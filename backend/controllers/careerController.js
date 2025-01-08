exports.handleUserInterest = async (req, res) => {
    const { fields, roles, skills, workEnvironment, industries, goals } = req.body;
  
    const fieldToCareersMap = {
      'Technology': ['Software Developer', 'Cyber Security Analyst', 'Data Scientist'],
      'Healthcare': ['Doctor', 'Nurse', 'Pharmacist', 'Health Data Analyst'],
      'Business & Management': ['Business Analyst', 'Project Manager', 'Entrepreneur'],
      'Education': ['Teacher', 'Instructional Designer', 'Education Consultant'],
      'Creative Arts': ['Graphic Designer', 'Artist', 'Creative Director'],
      'Engineering': ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer'],
      'Marketing & Sales': ['Marketing Manager', 'Sales Executive', 'SEO Specialist'],
    };
  
    const roleToCareersMap = {
      'Entry-Level': ['Junior Developer', 'Trainee Engineer', 'Junior Data Analyst'],
      'Mid-Level': ['Project Manager', 'Software Engineer', 'UX Designer'],
      'Senior-Level': ['Senior Architect', 'Team Lead', 'Director'],
      'Internship': ['Intern', 'Research Assistant'],
      'Freelance': ['Freelancer', 'Consultant', 'Contractor'],
    };
  
    const environmentToCareersMap = {
      'Remote': ['Remote Software Developer', 'Freelance Graphic Designer', 'Content Writer'],
      'In-Person': ['Office Manager', 'Lab Technician', 'Event Coordinator'],
      'Hybrid': ['Marketing Manager', 'Product Manager', 'Consultant'],
    };
  
    const industryToCareersMap = {
      'Software Development': ['Software Engineer', 'QA Engineer', 'Product Manager'],
      'Healthcare': ['Doctor', 'Lab Technician', 'Health Data Analyst'],
      'Finance': ['Accountant', 'Financial Analyst', 'Investment Banker'],
      'Education': ['Teacher', 'Instructional Designer', 'Academic Counselor'],
      'Media & Entertainment': ['Video Editor', 'Producer', 'Social Media Manager'],
      'Manufacturing': ['Mechanical Engineer', 'Production Manager', 'Quality Assurance'],
    };
  
    const goalToCareersMap = {
      'Become a Manager': ['Team Lead', 'Operations Manager', 'Project Manager'],
      'Build My Own Business': ['Entrepreneur', 'Startup Founder', 'Business Consultant'],
      'Become an Expert in a Specific Field': ['Specialist', 'Researcher', 'Senior Engineer'],
    };
  
    const skillToCareersMap = {
      'Coding (Python, Java, etc.)': ['Software Developer', 'Data Scientist', 'Backend Developer'],
      'Graphic Design': ['Graphic Designer', 'UX Designer', 'Creative Director'],
      'Data Analysis': ['Data Analyst', 'Business Analyst', 'Market Researcher'],
      'Project Management': ['Project Manager', 'Scrum Master', 'Operations Manager'],
      'Communication': ['Public Relations Specialist', 'HR Manager', 'Customer Success Manager'],
      'Marketing & SEO': ['SEO Specialist', 'Digital Marketer', 'Content Strategist'],
    };
  
    let potentialCareers = [];
  
    for (const field of fields || []) {
      potentialCareers = potentialCareers.concat(fieldToCareersMap[field] || []);
    }
  
    if (roles) {
      potentialCareers = potentialCareers.concat(roleToCareersMap[roles] || []);
    }
  
    for (const skill of skills || []) {
      potentialCareers = potentialCareers.concat(skillToCareersMap[skill] || []);
    }
  
    for (const environment of workEnvironment || []) {
      potentialCareers = potentialCareers.concat(environmentToCareersMap[environment] || []);
    }
  
    for (const industry of industries || []) {
      potentialCareers = potentialCareers.concat(industryToCareersMap[industry] || []);
    }
  
    for (const goal of goals || []) {
      potentialCareers = potentialCareers.concat(goalToCareersMap[goal] || []);
    }
  
    const uniqueCareers = [...new Set(potentialCareers)];
  
    if (uniqueCareers.length === 0) {
      return res.status(400).json({ message: 'No suggestions found based on your interests' });
    }
  
    return res.status(200).json({ message: 'Career suggestions', suggestions: uniqueCareers });
  };
  