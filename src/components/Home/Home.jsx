import React from 'react'
import style from '../Home/Home.module.css'
import pho from '../../assets/Euge.jpeg'
import img from '../../assets/info.jpg'

export default function Home() {
  return (
    <div className={style.container}>
      <div >
        <p>Eugenia Bartolomé</p>
        <img src={pho} alt='Eugenia' className={style.photo}/>
        <p>English to Spanish Translator</p>
        <ul>
          <li>Medicine</li>
          <li>IT</li>
          <li>E-Learning</li>
        </ul>
      </div>
      <div >
      <img src={img} alt='Skills' className={style.info}/>
      </div>
    </div>
  )
}
