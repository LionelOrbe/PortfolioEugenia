import React from 'react'
import style from '../Certifications/Certifications.module.css'
import hipaa from '../../assets/Hipaa.png'
import pro from '../../assets/pro.png'
import aati from '../../assets/aati.png'


export default function Certifications() {
  return (
    <div className={style.container}>
      <div>
        <p>HIPAA Compliance for Remote Interpreters</p>
        <img src={hipaa} alt='HIPAA' className={style.hipaa}/>
      </div>
      <div>
        <p>Certified PRO Network</p>
        <img src={pro} alt='PRO' className={style.pro}/>
      </div>
      <div>
        <p>AATI Member</p>
        <img src={aati} alt='AATI' className={style.aati}/>
      </div>
      <div>
        <p>Traductor literario y técnico científico de inglés</p>
      </div>
    </div>
  )
}
