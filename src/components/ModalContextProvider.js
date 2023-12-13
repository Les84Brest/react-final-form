import React, {useContext, useState} from 'react'

const ModalContext = React.createContext(null)
export const useModal = () => {
    return useContext(ModalContext)
}


export const ModalContextProvider = ({children}) => {
    const [signInModal, setSignInModal] = useState(false)
    const [signInContent, setSignInContent]=useState({})
    const toggleSignInVisible = () => {
        setSignInModal(prev => !prev)
    }
    const handleSingInContent = (content) => {
        console.log('here')
        setSignInContent(content)
    }

    return (
        <ModalContext.Provider value={{
            signInModal: {
                visible: signInModal,
                toggleVisible: toggleSignInVisible,
                content: signInContent,
                setContent: handleSingInContent
            }

        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider