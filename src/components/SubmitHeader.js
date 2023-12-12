import React from 'react';
import s from './SubmitHeader.module.scss'
import cn from 'classnames';
import {TAB_SIGN_IN, TAB_SIGN_UP} from "./SignForm";

export function SubmitHeader({activeTab, setActiveTab}) {

    const handleSetActive = (activeTab) => {
        console.log(activeTab);
        setActiveTab(activeTab)
    }

    return (
        <ul className="tab-group">
            <li className={cn('tab', {active: activeTab === TAB_SIGN_IN })} onClick={() => handleSetActive(TAB_SIGN_IN)} >Sign Up</li>
            <li className={cn('tab', {active: activeTab === TAB_SIGN_UP })} onClick={() => handleSetActive(TAB_SIGN_UP)}>Log In</li>
        </ul>
    )
}

export default SubmitHeader;