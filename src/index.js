import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.scss";

render(
    <BrowserRouter>
        <ToastContainer/>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
