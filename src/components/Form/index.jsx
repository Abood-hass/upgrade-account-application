import React, { useContext } from 'react';
import { Formik, Form, FastField as Field } from 'formik';

import UpgradeAccountSchema from '../../../utill/validationForm';
import countries from '../../../utill/countries';
import { FormContext, storeFormData } from '../../contexts/formContext';

import style from './style.module.css'


function UpgradeAccountForm() {
    const { formData, setFormData } = useContext(FormContext);

    function errorClassName(fieldName, errors, touched) {
        if (errors[fieldName] && touched[fieldName]) return style['field-error'];
        else return "";
    }

    return (<div>
        <Formik
            initialValues={formData}
            validationSchema={UpgradeAccountSchema}
        >
            {({ errors, touched }) => (
                <Form>

                    {/* First and Last name Field and error text */}
                    <Field
                        onBlur={({ target }) => storeFormData("firstLastName", target.value, setFormData)}
                        className={errorClassName("firstLastName", errors, touched)}
                        placeholder="First Name and Last Name"
                        name="firstLastName" />
                    {errors.firstLastName && touched.firstLastName ? (
                        <small>{errors.firstLastName}</small>
                    ) : null}

                    {/* Email Address name Field and error text */}
                    <Field
                        onBlur={({ target }) => storeFormData("emailAddress", target.value, setFormData)}
                        className={errorClassName("emailAddress", errors, touched)}
                        placeholder="Email Address"
                        name="emailAddress" />
                    {errors.emailAddress && touched.emailAddress ? (
                        <small>{errors.emailAddress}</small>
                    ) : null}


                    {/* Phone Number and Education Field row*/}
                    <div className={style['field-row-container']}>

                        {/* Phone Number Field */}
                        <Field
                            onBlur={({ target }) => storeFormData("phoneNumber", target.value, setFormData)}
                            className={errorClassName("phoneNumber", errors, touched)}
                            placeholder="Phone"
                            name="phoneNumber" />

                        {/* Education Level Field */}
                        <Field
                            onBlur={({ target }) => storeFormData("education", target.value, setFormData)}
                            className={errorClassName("education", errors, touched)}
                            placeholder="Education"
                            name="education" />
                    </div>

                    <div className={style['field-row-container']} style={{ margin: 0 }}>

                        {/* phone Number Error text */}
                        {errors.phoneNumber && touched.phoneNumber ? (
                            <small>{errors.phoneNumber}</small>
                        ) : null}

                        {/* Education Error text */}
                        {errors.education && touched.education ? (
                            <small>{errors.education}</small>
                        ) : null}
                    </div>

                    {/* Company Name Field and error text */}
                    <div>

                        <img src="/info-icon.png" title="You should have a company name in this field to complete this form." />

                        <Field
                            onBlur={({ target }) => storeFormData("companyName", target.value, setFormData)}
                            className={style['info-field'] + (" ") + errorClassName("companyName", errors, touched)}
                            name="companyName"
                            placeholder="Company Name" />
                        {errors.companyName && touched.companyName ? (
                            <small>{errors.companyName}</small>
                        ) : null}

                    </div>


                    {/* Address Line Field and error text */}
                    <Field
                        onBlur={({ target }) => storeFormData("addressLine", target.value, setFormData)}
                        className={errorClassName("addressLine", errors, touched)}
                        name="addressLine"
                        placeholder="Address Line" />
                    {errors.addressLine && touched.addressLine ? (
                        <small>{errors.addressLine}</small>
                    ) : null}


                    {/* City, State, and Portal Code Field row*/}
                    <div className={style['field-row-container'] + " " + style['three-columns-container']}>
                        <Field
                            onBlur={({ target }) => storeFormData("city", target.value, setFormData)}
                            className={errorClassName("city", errors, touched)}
                            placeholder="City"
                            name="city"
                        />
                        <Field
                            onBlur={({ target }) => storeFormData("state", target.value, setFormData)}
                            className={errorClassName("state", errors, touched)}
                            placeholder="State/Province/Rigon"
                            name="state"
                        />
                        <Field
                            onBlur={({ target }) => storeFormData("zip", target.value, setFormData)}
                            className={errorClassName("zip", errors, touched)}
                            placeholder="Zip/Portal code"
                            name="zip"
                        />
                    </div>


                    {/* City, State, and Portal Code Error text row*/}
                    <div className={style['field-row-container'] + " " + style['three-columns-container']} style={{ margin: 0 }}>
                        {errors.city && touched.city ? (
                            <small>{errors.city}</small>
                        ) : null}
                        {errors.state && touched.state ? (
                            <small>{errors.state}</small>
                        ) : null}
                        {errors.zip && touched.zip ? (
                            <small>{errors.zip}</small>
                        ) : null}
                    </div>


                    {/* Company Number, and Country Field row*/}
                    <div className={style['field-row-container'] + " " + style['serpentine-columns-container']}>

                        <div>
                            <img src="/info-icon.png" title="You should have a company number in this field to complete this form." />

                            <Field
                                onBlur={({ target }) => storeFormData("companyNumber", target.value, setFormData)}
                                className={style['info-field'] + ` ` + errorClassName("companyNumber", errors, touched)}
                                placeholder="Company No."
                                name="companyNumber"
                            />
                        </div>

                        <Field
                            onBlur={({ target }) => storeFormData("country", target.value, setFormData)}
                            className={errorClassName("country", errors, touched)}
                            name="country"
                            as="select">
                            <option value="" selected disabled >Select Country</option>
                            {countries.map(country => <option value={country.toLowerCase()}>{country}</option>)}
                        </Field>
                    </div>


                    {/* Company Number, and Country Error text row*/}
                    <div className={style['field-row-container'] + " " + style['serpentine-columns-container']} style={{ margin: 0 }}>
                        {errors.companyNumber && touched.companyNumber ? (
                            <small>{errors.companyNumber}</small>
                        ) : null}
                        {errors.country && touched.country ? (
                            <small>{errors.country}</small>
                        ) : null}
                    </div>
                </Form>
            )}
        </Formik>
    </div >)
}

export default UpgradeAccountForm;