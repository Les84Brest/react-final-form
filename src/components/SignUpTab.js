import React from "react";

export function SignUpTab(){
    return(
        <div className="tab-content">
        <h1>Sign Up for Free</h1>
        <form action="/" method="post">
            <div className="top-row">
                <div className="field-wrap">
                    <label>
                        First Name<span className="req">*</span>
                    </label>
                    <input type="text" required />
                </div>

                <div className="field-wrap">
                    <label>
                        Last Name<span className="req">*</span>
                    </label>
                    <input type="text" required />
                </div>
            </div>
            <div className="field-wrap">
                <label>
                    Email Address<span className="req">*</span>
                </label>
                <input type="email" required />
            </div>

            <div className="field-wrap">
                <label>
                    Set A Password<span className="req">*</span>
                </label>
                <input type="password" required />
            </div>
            <button type="submit" className="button button-block">Get Started</button>

        </form>
    </div>
    )
}

export default SignUpTab;