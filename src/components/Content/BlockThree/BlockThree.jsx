import React from 'react'
import Css from './BlockThree.module.css'
import { Cards } from '../../../data'

function BlockThree() {

    return (
        <div className={Css.Main}>
            <div className={Css.Block}>
                <div className={Css.Title}>
                    <h1>Наши ключевые качества</h1>
                </div>
                <div className={Css.Cards}>
                    {
                        Cards.map(item => (
                            <div className={Css.Card} style={{backgroundImage:`url(${item.bg})`}}>
                                <div className={Css.CardBlock1}>
                                    <h1>{item.title}</h1>
                                    <div className={Css.CardLine}></div>
                                </div>
                                <div className={Css.CardBlock2}>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default BlockThree
