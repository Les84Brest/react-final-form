import React, {useCallback, useContext, useState} from "react";
import SignUpTab from "./SignUpTab";
import SubmitHeader from "./SubmitHeader";
import SignInTab from "./SignInTab";
import './SignForm.scss';
import Modal from "./Modal";
import {useModal} from "./ModalContextProvider";
import SignInModalContent from "./SignInModalContent";

export const TAB_SIGN_IN = 'signIn'
export const TAB_SIGN_UP = 'signUp'

export function SignForm() {
    const [activeTab, setActiveTab] = useState(TAB_SIGN_IN)

    const {signInModal} = useModal();

    const setActiveTabCb = useCallback((activeTab) => {

        setActiveTab(activeTab)
    });

    return (
        <>
            <div className="form">
                <SubmitHeader
                    activeTab={activeTab}
                    setActiveTab={setActiveTabCb}
                />

                {activeTab === TAB_SIGN_IN ? <SignUpTab/> : <SignInTab/>}

            </div>
            <Modal isActive={signInModal.visible} modalClose={signInModal.toggleVisible}>
                <SignInModalContent />
            </Modal>
        </>
    )

}

export default SignForm;