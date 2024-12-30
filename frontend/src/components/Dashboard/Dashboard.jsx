import React from 'react'
import './Dashboard.css'
import { useLocation } from 'react-router-dom'


const Dashboard = () => {

//     // Simulate a database of resources
//   const resources = {
//     Tech: {
//       'Software Engineering': [
//         'Frontend Development  - Codecademy',
//         'Backend Engi - Udemy',
//         'DevOps Essentials - Pluralsight',
//       ],
//       AI: ['Introduction to AI - Coursera', 'AI Ethics - LinkedIn Learning'],
//       'Technical Writing': ['Technical Writing - Google Developers'],
//       'IT Support': ['IT Support Specialist - Google IT Certificate'],
//     },
//     Science: {
//       Biology: ['Molecular Biology - Khan Academy', 'Human Anatomy - Coursera'],
//       Physics: ['Classical Mechanics - MIT OpenCourseWare'],
//       Chemistry: ['Organic Chemistry - edX'],
//     },
//     Education: {
//       Teaching: ['Teaching Strategies - Coursera'],
//       'Curriculum Design': ['Curriculum Planning - LinkedIn Learning'],
//     },
//     'Arts & Design': {
//       'Graphic Design': ['Graphic Design Basics - Canva', 'Adobe XD Tutorials'],
//       'UI/UX Design': ['UX Design Fundamentals - Interaction Design Foundation'],
//     },
//   };

const resources = {
    'Art & Design': {
      'UI/UX Developer': ['UX Design Fundamentals - Interaction Design Foundation', 'Figma Tutorials - YouTube'],
      'Graphic Design': ['Graphic Design Basics - Canva', 'Adobe Photoshop Tutorials'],
      'Game Developer': ['Game Development with Unity - Coursera', 'Game Design - edX'],
      'Digital Animator': ['2D Animation - Skillshare', 'Blender Tutorials - YouTube'],
    },
    Education: {
      Teaching: ['Effective Teaching Strategies - Coursera', 'Teacher Development - Khan Academy'],
      'Educational Technology': ['EdTech Tools - LinkedIn Learning', 'Google Classroom Essentials - YouTube'],
      'Curriculum Development': ['Curriculum Planning - LinkedIn Learning', 'Designing Effective Curricula - Coursera'],
    },
    Science: {
      Biology: ['Molecular Biology - Khan Academy', 'Human Anatomy - Coursera'],
      Physics: ['Classical Mechanics - MIT OpenCourseWare', 'Quantum Physics - edX'],
      Chemistry: ['Organic Chemistry - edX', 'Introduction to Chemical Reactions - YouTube'],
      Astronomy: ['Astrophysics - edX', 'Basics of Stargazing - Skillshare'],
    },
    Tech: {
      AI: {
        'Machine Learning': ['Machine Learning - Coursera', 'Deep Learning - edX'],
        Robotics: ['Introduction to Robotics - MIT OpenCourseWare', 'Robotics Programming - YouTube'],
        'Data Science': ['Data Science with Python - Codecademy', 'Data Analysis - Udacity'],
      },
      'Technical Writing': {
        'Content Writing': ['Creative Content Writing - Udemy', 'SEO Writing Basics - YouTube'],
        Documentation: ['Technical Documentation - Google Developers', 'APIs and Documentation - LinkedIn Learning'],
      },
      'IT Support': {
        Networking: ['Network Essentials - Cisco Networking Academy', 'CCNA Certification - Udemy'],
        'System Administration': ['Linux Administration - Pluralsight', 'Windows Server Administration - LinkedIn Learning'],
      },
      'Software Engineering': {
        'Frontend Development': ['React for Beginners - Codecademy', 'HTML & CSS - FreeCodeCamp'],
        'Backend Development': ['Node.js and Express - Coursera', 'Python for Backend - Udemy'],
        DevOps: ['DevOps Essentials - Pluralsight', 'CI/CD Pipelines - LinkedIn Learning'],
      },
    },
  };
  

    const location = useLocation();
    console.log('Location State:', location.state)
    const { interest } = location.state || {};
    const mainInterest = interest?.[0];
    const secondaryInterest = interest?.[1];
    const tertiaryInterest = interest?.[2] || null;
    console.log(mainInterest, secondaryInterest, tertiaryInterest);
    let recommendations;

    if (mainInterest && secondaryInterest) {
        console.log('Main:', mainInterest, 'Secondary:', secondaryInterest);
        const category = resources[mainInterest]?.[secondaryInterest]
        if (tertiaryInterest && Array.isArray(category?.[tertiaryInterest])) {
            recommendations = category[tertiaryInterest] 
            console.log('Recommendation:', recommendations)
        } else {
            recommendations = resources[mainInterest]?.[secondaryInterest];
    }
    }
    else {
        recommendations ='No Recommendations Found';
    }

    

  return (
    <div >
        <h2>Welcome To Your Dashboard</h2>
        <div className='dashboard'>
            
            <section className='recommendations'>
                {Array.isArray(recommendations) ? (
                    <><h3>Recommended Courses for {mainInterest} - {secondaryInterest} {tertiaryInterest ? `- ${tertiaryInterest}` : ''}</h3>
                    <ul>
                        {recommendations.map((resource, index) => (
                            <li key={index}>{resource}</li>
                        ))}
                    </ul>
                    </>
                ) : (
                    <p>{recommendations}</p>
                )}
            </section>
        </div>
    </div>
  )
}

export default Dashboard