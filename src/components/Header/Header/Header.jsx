import React from 'react'
import NavBar from '../NavBar/NavBar'
import Css from './Header.module.css'
import Student from '../../../assets/header2.png'


function Header() {
    return (
        <div className={Css.Main}>
            <NavBar />
            <div className={Css.Block}>
                <div className={Css.BlockOne}>
                    <div className={Css.TextBlock}>
                        <h1 className={Css.Title}>BeSchool</h1>
                        <h1 className={Css.subTitle}>BUSINESS&ENGLISH</h1>
                        <p>Присоединяйтесь к
                            нашему курсу английского <br />
                            языка
                            и шаг за шагом добивайтесь <br /> уверенного
                            общения <br /> в BeSchool</p>
                        <div className={Css.contactsBlock}><span>Наш инстаграм</span><a className={Css.Link} href="https://www.instagram.com/beschoolkarakol/">BeSchool</a></div>
                        <button className={Css.Btn}>ПОДРОБНЕЕ</button>
                    </div>
                    <div className={Css.ImgBlock}>
                        <div className={Css.Circle}>
                        </div>
                        <img src={Student} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
