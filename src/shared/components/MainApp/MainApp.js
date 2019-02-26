import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route} from 'react-router-dom'

//import css
import './MainApp.css'

//import compoenents..
import GetStarted from '../GetStarted'
import Login from '../Login'
import Signup from '../Signup'
import Home from '../Home'
import StartGame from '../StartGame'
import NotFound from '../NotFound'
import Quiz from '../Quiz';
import QuizResult from '../QuizResult';


function MainApp(props) {
    return (
        <div className="app-container">
            <Switch>
                <Route exact path="/" component={GetStarted} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
                <Route path="/start-game" component={StartGame} />
                <Route path="/questions" component={Quiz}/>
                <Route path="/quiz-result" component={QuizResult}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
        )
}


export default MainApp