import React from 'react';
import {useModal} from "./ModalContextProvider";

export const SignInModalContent = () => {
    const {signInModal} = useModal()
    const {content} = signInModal

    function renderContent() {
        const {content} = signInModal

        if (!content) return

        if (Object.keys(content).length){
            const creds = [];
            for (const contentKey in content) {
                creds.push(<li>{contentKey + " - " + content[contentKey]}</li>)
            }

            return creds
        }

        return []
    }

    return (
        <div className="content__wrap">
            <h3 className="content__header">Sign in credentials</h3>
            <ul className="content__text">
                {
                    renderContent()
                }
            </ul>
        </div>
    )
}

export default SignInModalContent