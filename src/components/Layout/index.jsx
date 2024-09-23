import React from 'react'
import style from './style.module.css'

function index({children}) {
    return (
        <div
            className={style.wrapper}>
            {children}
        </div>
    )
}

export default index