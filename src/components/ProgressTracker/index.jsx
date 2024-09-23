import React from 'react'
import style from './style.module.css'

function index() {

    const steps = [
        {
            title: "application data",
            status: true
        },
        {
            title: "tax rusidency",
            status: false
        },
        {
            title: "identity card",
            status: false
        },
        {
            title: "invisibility",
            status: false
        },
        {
            title: "review",
            status: false
        },
    ]

    return (
        <div
            className={style["progress-tracker"]}>
            {steps.map(({ title, status }, index) =>
                <>
                    <div key={title}
                        className={style.step + " " + (status ? style["done-step"] : "")}>
                        <div>{status && <img src={'/check-mark.png'} />}</div>
                        <span className={style["step-title"]}>{
                            title.slice(0, 1).toUpperCase() +
                            title.slice(1, 20)
                        }</span>
                    </div>
                    {index < steps.length - 1 && <span className={style.dash + " " + (status ? style["done-step"] : "")}>—</span>}
                </>)
            }
        </div >
    )
}

export default index