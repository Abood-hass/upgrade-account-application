import React from 'react'
import Title from '../Title'
import ProgressBar from '../ProgressBar'
import style from './style.module.css'

function Header() {
    return (
        <div className={style.header}>
            <Title />
            <ProgressBar />
        </div>
    )
}

export default Header