/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

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

    onBack = () => {
        this.props.history.goBack()
    }

    onOpenForm = () => {
        window.open('https://wirdwrld.io/products/#undiscovered-story-game', '_blank');
    }

    onSubmitResponse = () => {
        window.open('https://docs.google.com/forms/d/1ib3j7PRqdVfJtYdKWNXzc3EDaEmjFTrcqz8R7OYBUcI', '_blank')
    }

    render() {
        return (
            <div className="quiz-result-container">
                <div className="quiz-result-header-container">
                    <BackBtn onClick={this.onBack}/>
                </div>
                <div className="quiz-result-data-container">
                    <div className="quiz-result-score-container">
                        <div className="quiz-result-score-text-container">Score</div>
                        <div className="quiz-result-score-point-text">19</div>
                        <Grid style={{ padding: 0 }}>
                            <GridColumn  width={8} className="quiz-result-earned-grid-container">
                                <div className="quiz-token-earned-container">
                                    <div className="quiz-token-text-container">Token Earned</div>
                                    <div className="quiz-token-amount-container">19</div>
                                </div>


                            </GridColumn>
                            <GridColumn  width={8} className="quiz-result-lost-grid-container">
                                <div className="quiz-token-lost-container">
                                    <div className="quiz-token-text-container">Token Lost</div>
                                    <div className="quiz-token-amount-container">3</div>
                                </div>

                            </GridColumn>
                        </Grid>
                        <div className="quiz-stats-container">
                        <Grid style={{ padding: 0 }}>
                            <GridColumn  width={8} className="quiz-stats-header-grid-container">
                                <div className="quiz-stats-header-container">
                                    <div className="quiz-stats-data-text-container">Correct Answer</div>
                                    <div className="quiz-stats-data-text-container">Incorrect</div>
                                    <div className="quiz-stats-data-text-container">Your Best Score</div>
                                    <div className="quiz-stats-data-text-container">Game's Best</div>
                                </div>


                            </GridColumn>
                            <GridColumn  width={8} className="quiz-stats-game-data-grid-container">
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
                            <Link to={'/invite-friends'}>
                            <Button content="Invite Friends" primary basic className="quiz-result-invite-friend-button" style={{width: "283px", height: "40px", background: "#ffffff !important"}}/>
                            </Link>
                            
                        </div>
                        <div className="quiz-result-leaderboard-container">
                            <Link to={'/leaderboard'}>
                                <Button content="Leaderboard" primary style={{width: "283px", height: "40px"}}/>
                            </Link>
                        </div>

                         <div className="quiz-result-leaderboard-container">
                            <Button content="Submit Response" primary basic style={{width: "283px", height: "40px"}} onClick={this.onSubmitResponse}/>
                         </div>
                      


                        <div style={{textAlign: "center", marginTop: "20px", color: "#707070"}}>
                            <span>For more information, please visit </span>
                            <span onClick={this.onOpenForm} style={{color: "#2185d0", cursor:"pointer"}}>
                                here

                            </span>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(QuizResult)