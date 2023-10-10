import React from 'react';
import '../styles/graphStyles.css';

export default function Graph() {
    const skillsData = [
        {
            category: 'Development',
            skills: [
                { name: 'HTML5', progress: 70 },
                { name: 'CSS', progress: 50 },
                { name: 'JavaScript + React', progress: 60 },
             
            ],
        },
        {
            category: 'Productivity',
            skills: [
                { name: 'Git + Github', progress: 60 },
                { name: 'Heroku', progress: 40 },
                { name: 'Microsoft Office', progress: 70 },
                { name: 'Asana', progress: 70 },
            ],
        },
    ];

    return (
        <div className="skills">
            <div className="charts">
                {skillsData.map((categoryData, index) => (
                    <div key={index} className={`chart chart-${categoryData.category.toLowerCase()}`}>
                        <div className="chart-background"></div>
                        <span className="chart-title">{categoryData.category}</span>
                        <ul className="chart-horiz no-bullet-points">
                            {categoryData.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="chart-bar">
                                    <div className="chart-progress">
                                        <div className="chart-progress-bar" style={{ width: `${skill.progress}%` }}>
                                            <span className="chart-progress-label">{skill.progress}%</span>
                                            <span className="chart-label">{skill.name}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}