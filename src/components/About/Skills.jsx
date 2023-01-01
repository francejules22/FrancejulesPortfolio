import React from 'react';
import './Skills.css'

const frontendSkills = [
    {
        title: 'Javascript',
        percentage: '70%'
    },
    {
        title: 'HTML5',
        percentage: '90%'
    },
    {
        title: 'CSS3',
        percentage: '80%'
    },
    {
        title: 'ReactJS',
        percentage: '65%'
    },
]


const backendSkills = [
    {
        title: 'PHP',
        percentage: '60%'
    },
    {
        title: 'mySQL',
        percentage: '90%'
    },
    {
        title: 'Microsoft Server SQL',
        percentage: '80%'
    },
    {
        title: 'NodeJS',
        percentage: '50%'
    },
]

const Skills = () => {
    return(
       <div className="skills-container d-flex gap-5">
            <div className="frontend-skills w-50">
               {
                 frontendSkills.map((item, index) => (
                     <SkillItem key={index} title={item.title} percentage={item.percentage} />
                 ))
               }
            </div>

            <div className="backend-skills w-50">
               {
                 backendSkills.map((item, index) => (
                    <SkillItem key={index} title={item.title} percentage={item.percentage} />
                 ))
               }
            </div>
       </div>
    )
}


const SkillItem = ({title, percentage}) => {
    return <div className="skills-data mb-3">
        <div className="skills-title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>

        <div className="skills-bar">
            <span className="skills-bar-percentage" style={{width: `${percentage}`}}></span>
        </div>
    </div>
}
    

export default Skills;