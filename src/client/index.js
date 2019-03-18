import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import MainApp from '../shared/components/MainApp'
import '../index.css';
import configureStore from '../shared/redux/configureStore'

//FIXME: Deprecated No need for the current browsers..
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
//const history = createHashHistory();

const store = configureStore()
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <MainApp/>
        </BrowserRouter>
    </Provider>
   
)


render(app, document.getElementById('app'));
