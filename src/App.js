import './App.css';

import SignForm from "./components/SignForm";
import s from './App.module.scss';

const App = () => {


    return (
        <div className={s.app}>
            <SignForm/>
        </div>
    )
}
export default App;
