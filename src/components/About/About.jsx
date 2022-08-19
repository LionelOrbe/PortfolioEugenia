import React from 'react'
import style from '../About/About.module.css'

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.me}>
        <h4>WHY ME</h4>
        I am a professional linguist with +14 year-experience in specialized translation services. I offer accurate and high quality translations. I abide by the terms of delivery and I am a quick learner. I easily adapt to the work methodology requested. Technology is my second passion.
      </div>
      <div className={style.skills}>
        <h4>SKILLS</h4>
        <ul>
          <li>Leadership</li>
          <li>Teamwork</li>
          <li>Responsibility</li>
          <li>Result orientation</li>
          <li>Decision making</li>
          <li>Problem solving</li>
          <li>Organizational skills</li>
          <li>Attention to detail</li>
          <li>Reliability and work ethic</li>
        </ul>
      </div>      
    </div>
  )
}
