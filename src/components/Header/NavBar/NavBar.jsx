import React, { useState } from 'react'
import Css from '../NavBar/NavBar.module.css'
import Logo from '../../../assets/logo2.png'
import { Fade as Hamburger } from 'hamburger-react'

function NavBar() {

  const [isHovered, setIsHovered] = useState(false);

  const color = '#E13680'

  return (
    <div className={Css.Main}>
      <div className={Css.NavBarBlock}>
        <div className={Css.Logo}>
          <a href="https://www.instagram.com/beschoolkarakol/"> <img src={Logo} alt="" className={Css.LogoImg} /></a>

        </div>
        <div className={Css.BurgerMenu} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <Hamburger size={30} color={isHovered ? color : 'black'} />
        </div>
      </div>

    </div>
  )
}

export default NavBar
