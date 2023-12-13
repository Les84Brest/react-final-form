import React from "react";
import {Form, Field} from "react-final-form";

export function SignUpTab() {
    const onSignUpSubmit = (values) => {
        console.log(values)
    }

    const onSignUpValidation = (values) => {
        const errors = {}
        //first name
        if (!values.firstName) {
            errors.firstName = "Your first name is empty"
        }

        if (values.firstName && values.firstName.length < 3) {
            errors.firstName = "Too short"
        }

        //last name
        if (!values.lastName) {
            errors.lastName = "Your last name is empty"
        }

        if (values.lastName && values.lastName.length < 3) {
            errors.lastName = "Too short"
        }

        //email validation
        if (!values.userEmail) {
            errors.userEmail = 'Your email is empty'
        }

        const emailRegExp = new RegExp(/\S+@\S+\.\S+/)
        if (!emailRegExp.test(values.userEmail)) {
            errors.userEmail = 'Your email doesn\'t match pattern';
        }

        //password validation
        if (!values.sugnUpPassword) {
            errors.sugnUpPassword = 'Your password is empty'
        }



        return errors
    }


    return (
        <div className="tab-content">
            <Form
                onSubmit={onSignUpSubmit}
                validate={onSignUpValidation}
                render={({handleSubmit, form, submitting, pristine, values}) => {
                    return (
                        <>
                            <h1>Sign Up for Free</h1>
                            <form onSubmit={handleSubmit}>

                                <div className="top-row">
                                    <Field name='firstName' render={({input, meta}) => {
                                        return (
                                            <div className="field-wrap">
                                                <label className={meta.dirty ? 'active' : ''}>
                                                    First Name<span className="req">*</span>
                                                </label>
                                                <input {...input} type="text" required/>
                                                {meta.error && meta.touched &&
                                                    <span className="validation-error">{meta.error}</span>}
                                            </div>
                                        )
                                    }}/>
                                    <Field
                                        name="lastName"
                                        render={({input, meta}) => (
                                            <div className="field-wrap">
                                                <label className={meta.dirty ? 'active' : ''}>
                                                    Last Name<span className="req">*</span>
                                                </label>
                                                <input {...input} type="text" required/>
                                                {meta.error && meta.touched &&
                                                    <span className="validation-error">{meta.error}</span>}
                                            </div>
                                        )}

                                    />

                                </div>
                                <Field name="userEmail"
                                    render={({input, meta}) => (
                                        <div className="field-wrap">
                                            <label className={meta.dirty ? 'active' : ''}>
                                                Email Address<span className="req">*</span>
                                            </label>
                                            <input {...input} type="email" required/>
                                            {meta.error && meta.touched &&
                                                <span className="validation-error">{meta.error}</span>}
                                        </div>
                                    )}
                                />

                                <Field name="sugnUpPassword"
                                       render={({input, meta})=> (<div className="field-wrap">
                                           <label className={meta.dirty ? 'active' : ''}>
                                               Set A Password<span className="req">*</span>
                                           </label>
                                           <input {...input} type="password" required/>
                                           {meta.error && meta.touched &&
                                               <span className="validation-error">{meta.error}</span>}
                                       </div>)}/>

                                <button
                                    type="submit"
                                    className="button button-block"
                                    disabled={submitting}
                                >Get Started</button>

                            </form>
                        </>
                    )
                }}
            />
        </div>
    )
}

export default SignUpTab;