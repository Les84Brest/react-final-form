import React from "react";
import {Form, Field} from "react-final-form";

export function SignInTab() {

    const onSignSubmit = (values) => {
        console.log('submit form >> ', values)
    }

    const onValidate = (values) => {
        //email validation
        const errors = {}
        if(!values.emailAddress) {
            errors.emailAddress = 'Your email is empty'
        }

        const emailRegExp =  new RegExp(/\S+@\S+\.\S+/)
        if(!emailRegExp.test(values.emailAddress)){
            errors.emailAddress = 'Your email doesn\'t match pattern'; 
        }

        //password validation
        if(!values.signInPassword) {
            errors.signInPassword = 'Your password is empty'
        }


        return errors
    }
    return (
        <>
            <h1>Welcome Back!</h1>

            <Form onSubmit={onSignSubmit}
                  validate={onValidate}
                  render={({handleSubmit, form, submitting, pristine, values}) => {
                    console.log('form >> ', form);
                      return (
                      <form onSubmit={handleSubmit}>

                          <Field name='emailAddress'>
                              {({input, meta}) => {
                                console.log('val ...', values );
                                console.log('pristine ...', pristine );
                                console.log('meta ...', meta );
                                return(
                                  <div className="field-wrap">
                                      <label className={meta.dirty ? 'active' : ''}>
                                          Email Address<span className="req">*</span>
                                      </label>
                                      <input {...input} type="email" required autoComplete="off"/>
                                      {meta.error && meta.touched && <span className="validation-error">{meta.error}</span>}
                                  </div>)}
                              }
                          </Field>
                          <Field name='signInPassword'>
                              {
                                  ({input, meta}) => (<div className="field-wrap">
                                      <label  className={meta.dirty ? 'active' : ''}>
                                          Password<span className="req">*</span>
                                      </label>
                                      <input {...input} type="password" required autoComplete="off"/>
                                      {meta.error && meta.touched && <span className="validation-error">{meta.error}</span>}
                                  </div>)
                              }
                          </Field>

                        <Field name="submitBtn">
                            {
                                ({input, meta}) => (
                                    <button
                                    type="submit"
                                    className="button button-block"
                                    disabled={submitting}
                                    > 
                                        Log in
                                    </button>
                                )
                            }
                        
                        </Field>
                        


                      </form>
                      )
                  }}
            />

        </>

    )
}

export default SignInTab;