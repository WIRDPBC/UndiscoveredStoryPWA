import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import MainApp from '../components/MainApp'
import '../index.css';

//FIXME: Deprecated No need for the current browsers..
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
//const history = createHashHistory();

const app = (
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
)


render(app, document.getElementById('app'));
