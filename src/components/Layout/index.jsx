import React, { useState } from 'react'
import style from './style.module.css'
import { FormContext } from '../../contexts/formContext'
import { formInitialValues } from '../../../utill/validationForm';

function index({ children }) {

    const [formData, setFormData] = useState(formInitialValues);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            <div
                className={style.wrapper}>
                {children}
            </div>
        </FormContext.Provider>
    )
}

export default index