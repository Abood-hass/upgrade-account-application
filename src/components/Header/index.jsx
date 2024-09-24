import React from 'react'
import Title from '../Title'
import ProgressBar from '../ProgressBar'
import style from './style.module.css'

function Header() {
    return (
        <header className={style.header}>
            <Title />
            <ProgressBar />
        </header>
    )
}

export default Header