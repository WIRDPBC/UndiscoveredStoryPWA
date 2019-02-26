/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import css
import './QuizResult.css'
import BackBtn from '../BackBtn/BackBtn';

class QuizResult extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quiz-result-container">
                <div className="quiz-result-header-container">
                    <BackBtn />
                </div>
                <div className="quiz-result-data-container">
                    <div className="quiz-result-score-container">
                        <div className="quiz-result-score-text-container">Score</div>
                        <div className="quiz-result-score-point-text">19</div>
                        <Grid style={{ padding: 0 }}>
                            <GridColumn style={{ padding: "0 100px 0 0" }} width={8}>
                                <div className="quiz-token-earned-container">
                                    <div className="quiz-token-text-container">Token Earned</div>
                                    <div className="quiz-token-amount-container">19</div>
                                </div>


                            </GridColumn>
                            <GridColumn style={{ padding: "0 0 0 100px" }} width={8}>
                                <div className="quiz-token-lost-container">
                                    <div className="quiz-token-text-container">Token Lost</div>
                                    <div className="quiz-token-amount-container">3</div>
                                </div>

                            </GridColumn>
                        </Grid>
                        <div className="quiz-stats-container">
                        <Grid style={{ padding: 0 }}>
                            <GridColumn style={{ padding: "0 100px 0 0" }} width={8}>
                                <div className="quiz-stats-header-container">
                                    <div className="quiz-stats-data-text-container">Correct Answer</div>
                                    <div className="quiz-stats-data-text-container">Incorrect</div>
                                    <div className="quiz-stats-data-text-container">Your Best Score</div>
                                    <div className="quiz-stats-data-text-container">Game's Best</div>
                                </div>


                            </GridColumn>
                            <GridColumn style={{ padding: "0 0 0 100px" }} width={8}>
                                <div className="quiz-stats-game-data-container">
                                    <div className="quiz-stats-data-text-container">19</div>
                                    <div className="quiz-stats-data-text-container">3</div>
                                    <div className="quiz-stats-data-text-container">21</div>
                                    <div className="quiz-stats-data-text-container">22</div>
                                </div>

                            </GridColumn>
                        </Grid>
                        </div>
                        

                    </div>
                    <div className="quiz-result-invite-leaderboard-container">
                        <div className="quiz-result-invite-friend-container">
                            <Button content="Invite Friends" primary basic className="quiz-result-invite-friend-button" style={{width: "283px", height: "40px", background: "#ffffff !important"}}/>
                        </div>
                        <div className="quiz-result-leaderboard-container">
                            <Link to={'/leaderboard'}>
                                <Button content="Leaderboard" primary style={{width: "283px", height: "40px"}}/>
                            </Link>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizResult