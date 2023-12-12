import React, {useCallback, useState} from "react";
import SignUpTab from "./SignUpTab";
import SubmitHeader from "./SubmitHeader";
import SignInTab from "./SignInTab";
import './SignForm.scss';

export  const TAB_SIGN_IN = 'signIn'
export const TAB_SIGN_UP = 'signUp'

export function SignForm() {
    const [activeTab, setActiveTab] = useState(TAB_SIGN_IN);
    const onSubmit = (e) => {
        console.log(e);
    }
    const setActiveTabCb = useCallback((activeTab) => {
        console.log('act tab >>>', activeTab)
        setActiveTab(activeTab)
    });

    return (
        <div className="form">
            <SubmitHeader
                activeTab={activeTab}
                setActiveTab={setActiveTabCb}
            />

            {activeTab === TAB_SIGN_IN ?  <SignUpTab />: <SignInTab />}

        </div>
    )

}

export default SignForm;