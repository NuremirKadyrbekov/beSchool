import React from 'react'
import Css from './BlockTwo.module.css'
import {educationCards} from '../../../data'

function BlockTwo() {



  return (
    <div className={Css.Main}>
      <div className={Css.Block}>
        <div className={Css.MainTitle}><h1>Учитесь у профессионалов — говорите как носитель</h1></div>
        <div className={Css.Cards}>
          { educationCards.map(el=>(
             <div className={Css.Card}>
            <div className={Css.CardBlock1}><h1 className={Css.CardId}>{el.num}</h1><h1 className={Css.CardTitle}>{el.title}</h1></div>
            <div><p className={Css.CardDesc}>{el.desc}</p></div>
          </div>
          ))

          }
         
        </div>
      </div>
    </div>
  )
}

export default BlockTwo
