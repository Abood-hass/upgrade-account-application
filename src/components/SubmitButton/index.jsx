import { useContext } from "react";
import { FormContext, submitFormData } from "../../contexts/formContext";

import style from './style.module.css'

function index() {
    const { formData, setFormData } = useContext(FormContext);

    return (
        <div className={style.button} role="button" onClick={values => submitFormData(formData, setFormData, values,)}>
            <span>
                Next
            </span>
            <img src="./right-arrow.png" alt="" />
        </div>
    );
}

export default index;