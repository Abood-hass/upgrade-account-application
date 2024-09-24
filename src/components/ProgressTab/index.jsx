import React from 'react'
import style from './style.module.css'
import UpgradeAccountForm from '../Form'

function index() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <h1>Application Data</h1>
                <h1>Please take a salfie with the document so that it's clearly visiable and doesn't cover your face</h1>
            </div>
            <div className={style["form-continer"]}>
                <UpgradeAccountForm />
            </div>
        </section>
    )
}

export default index