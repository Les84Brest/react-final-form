import React, {useEffect} from 'react'
import { createPortal } from "react-dom";
import s from './Modal.module.scss'

export function Modal({ isActive, modalClose, children }){
    const bodyNode = document.body;

    useEffect(() => {
        if (isActive) {
            bodyNode.classList.add('popup--open')
            return
        }

        bodyNode.classList.remove('popup--open')

    }, [isActive, bodyNode.classList])

    const handlePopupClick = (e) => {
        e.stopPropagation()
    }

    const renderModalContent = ReactElement => {
        return (
            <div className={s.popup} onClick={modalClose}>
                <div className={s.popup__body} onClick={handlePopupClick}>
                    {children}
                </div>
            </div>
        )
    }

    return (isActive && createPortal(
        renderModalContent(), bodyNode
    ))
}

export default Modal