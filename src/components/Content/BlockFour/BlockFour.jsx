import React from 'react'
import Css from './BlockFour.module.css'
import Img from '../../../assets/cardImg.jpg'

function BlockFour() {
    return (
        <div className={Css.Main}>
            <div className={Css.Block}>
                <div className={Css.TextBlock}>
                    <div className={Css.Title}><h1>Для каждого учащегося, <br /> каждого класса. Реальные результаты</h1></div>
                    <p>Наши курсы английского языка направлены
                        на достижение конкретных целей и
                        ощутимых результатов. Мы не просто
                        учим вас правилам и словам – мы
                        готовим вас к реальным ситуациям,
                        будь то работа, учеба или
                        путешествия.</p>
                    <h2>Наш Facebook<a href="" className={Css.Link}>BeSchool</a></h2>
                    <div className={Css.Buttons}>
                        <button>Преподователи</button>
                        <button>Студенты</button>
                        <button>Классы</button>
                    </div>
                </div>

                <div className={Css.ImgBlock}>
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BlockFour
