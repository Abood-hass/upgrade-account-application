import React from 'react'
import style from './style.module.css'
import SubmitButton from '../SubmitButton'

function index() {
    return (
        <div className={style.footer}>
            <img src="./office-man-image-removebg-preview.png" alt="" />
            <SubmitButton />
        </div>
    )
}

export default index