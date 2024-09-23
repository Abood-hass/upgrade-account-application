import React from 'react'

import style from './style.module.css'

function index() {
  return (
    <div className={style["progress-bar"]}>
      <small>1 of 5 Completed</small>
      <div className={style["progress-bg"]}>
        <div className={style["progress-line"]}>{"."}</div>
      </div>
    </div>
  )
}

export default index