import React from 'react'
import style from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <div >
      <a href='https://lionelorbe.vercel.app/'  style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
        <div className={style.container}>

      | Developed by Lionel Orbe 2022 |
        </div>
      </a>
    </div>
  )
}
