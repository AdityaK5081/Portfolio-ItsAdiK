import React from 'react'
import '../Skills/Skills.scss'

import { SiSplunk, SiJavascript, SiFlutter, SiDart, SiPython } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";



const skills = [
    { id: 1, name: 'Splunk', image: <SiSplunk /> },
    { id: 2, name: 'React.JS', image: <FaReact /> },
    { id: 3, name: 'JavaScript', image: <SiJavascript /> },
    { id: 4, name: 'Flutter', image: <SiFlutter /> },
    { id: 5, name: 'Dart', image: <SiDart /> },
    { id: 6, name: 'Python', image: <SiPython /> },
    { id: 7, name: 'Android', image: <DiAndroid /> },
    { id: 8, name: 'Java', image: <FaJava /> },
]

const Skills = () => {
    return (
        <div id='timeline-container'>
            <div>~My Skills~</div>
            <div id='skills-container'>
                {
                    skills.map((skill) => {
                        return <div key={skill.id} id='skill-parent'>
                            <div id='skill-child'>
                                {skill.image}
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills