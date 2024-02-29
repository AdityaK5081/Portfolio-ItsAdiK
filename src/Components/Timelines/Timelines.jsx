import React from 'react'
import '../Timelines/Timelines.scss'

import VITLogo from '../Assets/VIT-logo.png'
import KPSLogo from '../Assets/KPS-logo.png'
import ExxonLogo from '../Assets/ExxonMobil-logo.png'
import ProgradLogo from '../Assets/Prograd-logo.png'
import GEVLogo from '../Assets/GEV-logo.png'

const Educations = [
    { id: 1, image: VITLogo, dateTime: '2019 - 2023', school: 'B.Tech - Vellore Institute of Technology, Bhopal', branch: 'Computer Science and Engineering', score: 'GPA: 8.93/10' },
    { id: 2, image: KPSLogo, dateTime: '2018 - 2019', school: 'Class 12 - Krishna Public School, Chhattisgarh', branch: 'Subjects: Computer Science and P.C.M.', score: 'Percent: 83.6%' },
    { id: 3, image: KPSLogo, dateTime: '2016 - 2017', school: 'Class 10 - Krishna Public School, Chhattisgarh', branch: '', score: 'GPA: 10/10' },
]

const Works = [
    { id: 1, image: ExxonLogo, dateTime: '2023 - present', p1: 'Network Security Engineer (Outbound Internet)', p2: 'Workspace Solutions > End User Computing > Outbound Internet', p3: 'Outbound Internet (East)' },
    { id: 2, image: ExxonLogo, dateTime: '2023 (Feb) - 2023 (May)', p1: 'Network Security Engineer - Intern', p2: 'Worked upon Automation for ForcePoint Blades Monitoring', p3: 'Learnings: Networking and Splunk Cloud' },
    { id: 3, image: ProgradLogo, dateTime: '2021 (Nov) - 2022 (Apr)', p1: 'Front End Web Developer - Prograd Training Program', p2: '', p3: 'Trainings included: React.JS, HTML, CSS, JavaScript' },
    { id: 4, image: GEVLogo, dateTime: '2021 (Jun) - 2022 (Sep)', p1: 'Flutter Developer - Intern', p2: 'Worked on Govardhan Ecovillage project', p3: 'Tech. stack: Flutter, Dart, Web-services, Rest APIs and JSON' },
]
// ----> combine work & edu styles of card into one

const Education = () => {
    return (
        <div className='parent-container'>
            <div className='card-title'>My Education</div>
            {
                Educations.map((edu) => {
                    return <div className='card' key={edu.id}>
                        <img src={edu.image} alt='pic' />
                        <div id='details'>
                            <p id='dateTime'>{edu.dateTime}</p>
                            <p id='school'>{edu.school}</p>
                            <p id='branch'>{edu.branch}</p>
                            <p id='score'>{edu.school}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

const WorkExperience = () => {
    return (
        <div className='parent-container'>
            <div className='card-title'>My Work Experience</div>
            {
                Works.map((work) => {
                    return <div className='card' key={work.id}>
                        <img src={work.image} alt='pic' />
                        <div id='details'>
                            <p id='dateTime'>{work.dateTime}</p>
                            <p id='school'>{work.p1}</p>
                            <p id='branch'>{work.p2}</p>
                            <p id='score'>{work.p3}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

const Timelines = () => {
    return (
        <div id='timelines-container'>
            <div>~Timelines~</div>
            <div id='timelines-parent'>
                <Education />
                <WorkExperience />
            </div>
        </div>
    )
}

export default Timelines