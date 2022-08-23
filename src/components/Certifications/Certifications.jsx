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
        <a href='https://www.proz.com/translator/740492'  style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
        <img src={pro} alt='PRO' className={style.pro}/>
        </a>
      </div>
      <div>
        <p>AATI Member</p>
        <a href='https://www.aati.org.ar'  style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
        <img src={aati} alt='AATI' className={style.aati}/>
        </a>
      </div>
      <div className={style.traductor}>
        <a href='http://newstart.edu.ar/newstart_CI/home/campus'  style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
        <p>Traductor literario y técnico científico de inglés</p>
        <p>Instituto Superior "New Start"</p>
        </a>
      </div>
    </div>
  )
}
