import React from 'react'
import style from './amazon.module.css'



const Amazon = ({Date,logo,GiftFrom,pay,OS,stylee}) => {
  return (
    <div className={stylee}>
        <div className={style.topmost}>
            <h4>{Date}</h4>
            <div className={style.imgdiv}><img src={logo}/></div>
        </div>
        <div className={style.casestudy}>Case Study</div>
        <h1>{GiftFrom}</h1>
        <h1>{pay}</h1>
        <div className={style.OS}>
            <h3>{OS}-Mobile</h3>
            <h1>➜</h1>
            </div>
    </div>
  )
}

export default Amazon