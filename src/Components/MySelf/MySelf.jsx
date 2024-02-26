import React from 'react'
import '../MySelf/MySelf.scss'
import MyPic from '../Assets/MyPic.jpg'

const MySelf = () => {
  return (
    <div id='myself-parent'>
        
        <div id='myself-left' className='neumorphic neumorphic--pressed variation1'>
            <img src={MyPic} alt='MyPic'/>
        </div>
        
        <div id='myself-divider'></div>
        
        <div id='myself-right'>
          Hello, I'm Aditya <br/><br/>
          Job Role: Internet Outbound Engineer <br/>
          SDM: Preshanth Rajagopal <br/>
          Function: Technology and Engineering <br/>
        </div>
    </div>
  )
}

export default MySelf