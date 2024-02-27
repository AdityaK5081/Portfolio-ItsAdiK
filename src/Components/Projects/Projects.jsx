import React from 'react'
import '../Projects/Projects.scss'

import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const projectList = [
    {
        id: 1,
        category: 'Flutter Based',
        pImage: <SiFlutter />,
        projectItems: [
            { pid: 1.1, projectName: 'Indian Companies', imageSrc: '' },
            { pid: 1.2, projectName: 'News App', imageSrc: '' },
            { pid: 1.3, projectName: 'Youtube Flutter', imageSrc: '' }
        ],
    },
    {
        id: 2,
        category: 'React Based',
        pImage: <FaReact />,
        projectItems: [
            { pid: 2.1, projectName: 'Explore India', imageSrc: '' },
            { pid: 2.2, projectName: 'Crypto Predator', imageSrc: '' },
        ],
    },
    {
        id: 3,
        category: 'Android Based',
        pImage: <DiAndroid />,
        projectItems: [
            { pid: 3.1, projectName: 'College Log', imageSrc: '' },
            { pid: 3.2, projectName: 'Expense Manager', imageSrc: '' },
        ],
    },

]

const Projects = () => {
    return (
        <div id='projects-parent-container'>
            <div>~My Projects</div>

            <div id='projects-main-container'>
                {
                    projectList.map((category) => {
                        return <div id='project-card-parent' key={category.id}>
                            {category.pImage}
                            {category.category}
                            <div id='project-items'>
                                {
                                    category.projectItems.map((item) => {
                                        return <div id='project' key={item.pid}>
                                            <img src={item.imageSrc} />
                                            <p>{item.projectName}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Projects