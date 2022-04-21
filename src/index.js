import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./styles/index.scss";

render (
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
