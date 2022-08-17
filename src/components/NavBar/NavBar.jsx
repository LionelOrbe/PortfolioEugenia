import React, {useState } from 'react'
import style from '../NavBar/NavBar.module.css'
import { Link } from 'react-router-dom'
import { FaSun,FaMoon} from 'react-icons/fa';
import { FcHome, FcAbout,FcCheckmark,FcContacts} from 'react-icons/fc';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function NavBar() {
  const [but, setBut] = useState(1);
  const [darkmode, setDarkmode] = useState(false);

  function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(darkmode){setDarkmode(false)}
    else {setDarkmode(true)}
    
  }

  return (
    <div className={style.container}>
      <Link to='/' style={{ textDecoration: "none" }}>
      <button onClick={()=> setBut(1)} className={but===1? style.select : style.button}><FcHome className={style.icon}/>Home</button>
      </Link>
      <Link to='/about' style={{ textDecoration: "none" }}>
      <button onClick={()=> setBut(2)} className={but===2? style.select : style.button}><FcAbout className={style.icon}/>About</button>
      </Link>
      <Link to='/certifications' style={{ textDecoration: "none" }}>
      <button onClick={()=>setBut(3)} className={but===3? style.select : style.button}><FcCheckmark className={style.icon}/>Certifications</button>
      </Link>
      <Link to='/contact' style={{ textDecoration: "none" }}>
      <button onClick={()=>setBut(4)} className={but===4? style.select : style.button}><FcContacts className={style.icon}/>Contact</button>
      </Link>
      <div className={style.switch} onClick={()=>dark()}>{darkmode? <Tippy content="Dark Mode"><div><FaMoon/></div></Tippy> :
        <Tippy content="Light Mode"><div><FaSun/></div></Tippy>}
        </div>
    </div>
  )
}
