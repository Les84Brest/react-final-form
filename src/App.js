import './App.css';

import SignForm from "./components/SignForm";
import s from './App.module.scss';
import ModalContextProvider from "./components/ModalContextProvider";

const App = () => {


    return (
        <ModalContextProvider>
            <div className={s.app}>
                <SignForm/>
            </div>
        </ModalContextProvider>
    )
}
export default App;
