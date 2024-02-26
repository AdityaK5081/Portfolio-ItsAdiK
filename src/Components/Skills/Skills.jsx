import React from 'react'
import '../Skills/Skills.scss'

const skills = [
    { id: 1, name: 'Splunk Cloud', image: '' },
    { id: 2, name: 'React.JS', image: '' },
    { id: 3, name: 'JavaScript', image: '' },
    { id: 4, name: 'Python', image: '' }
]

const Skills = () => {
    return (
        <div className='skills-container'>
            {
                skills.map((skill) => {
                    return <div key={skill.id} className='skill-parent'>
                        <div className='skill-child'>
                            {skill.image}
                            <br />
                            {skill.name}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Skills