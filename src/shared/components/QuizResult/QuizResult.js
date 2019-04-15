/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

//import css
import './QuizResult.css'

//import components..
import BackBtn from '../BackBtn/BackBtn';
import TopHeader from '../TopHeader'
import Navigator from '../Navigator'

class QuizResult extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    onOpenSidebar = () => {
        this.setState({
            visible: true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
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
        const {visible} = this.state
        const {location} = this.props
        const {totalCorrectAnswers, totalIncorrectAnswers, totalUnanswered} = location 
        console.log("Quiz Result Props", this.props)
        return (

            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <Fragment>
                    <TopHeader onOpenSidebar={this.onOpenSidebar}/>
                    <div className="quiz-result-data-container">
                        <div className="quiz-result-score-container">
                            <div className="quiz-result-score-text-container">Score</div>
                            <div className="quiz-result-score-point-text">{totalCorrectAnswers}</div>
                            <Grid style={{ padding: 0 }}>
                                <GridColumn width={8} className="quiz-result-earned-grid-container">
                                    <div className="quiz-token-earned-container">
                                        <div className="quiz-token-text-container">Tokens Earned</div>
                                        <div className="quiz-token-amount-container">{totalCorrectAnswers}</div>
                                    </div>


                                </GridColumn>
                                <GridColumn width={8} className="quiz-result-lost-grid-container">
                                    <div className="quiz-token-lost-container">
                                        <div className="quiz-token-text-container">Tokens Lost</div>
                                        <div className="quiz-token-amount-container">{totalIncorrectAnswers + totalUnanswered}</div>
                                    </div>

                                </GridColumn>
                            </Grid>
                            <div className="quiz-stats-container">
                                <Grid style={{ padding: 0 }}>
                                    <GridColumn width={8} className="quiz-stats-header-grid-container">
                                        <div className="quiz-stats-header-container">
                                            <div className="quiz-stats-data-text-container">Correct Answers</div>
                                            <div className="quiz-stats-data-text-container">Incorrect</div>
                                            <div className="quiz-stats-data-text-container">Your Best Score</div>
                                            <div className="quiz-stats-data-text-container">Game's Best</div>
                                        </div>


                                    </GridColumn>
                                    <GridColumn width={8} className="quiz-stats-game-data-grid-container">
                                        <div className="quiz-stats-game-data-container">
                                            <div className="quiz-stats-data-text-container">{totalCorrectAnswers}</div>
                                            <div className="quiz-stats-data-text-container">{totalIncorrectAnswers}</div>
                                            <div className="quiz-stats-data-text-container">0</div>
                                            <div className="quiz-stats-data-text-container">0</div>
                                        </div>

                                    </GridColumn>
                                </Grid>
                            </div>


                        </div>
                        <div className="quiz-result-invite-leaderboard-container">
                            <div className="quiz-result-invite-friend-container">
                                <Link to={'/invite-friends'}>
                                    <Button content="Invite Friends" primary basic className="quiz-result-invite-friend-button" style={{ width: "283px", height: "40px", background: "#ffffff !important" }} />
                                </Link>

                            </div>
                            <div className="quiz-result-leaderboard-container">
                                <Link to={'/leaderboard'}>
                                    <Button content="Leaderboard" primary style={{ width: "283px", height: "40px" }} />
                                </Link>
                            </div>

                            <div className="quiz-result-leaderboard-container">
                                <Button content="Get Free Tokens" primary basic style={{ width: "283px", height: "40px" }} onClick={this.onSubmitResponse} />
                            </div>



                            <div style={{ textAlign: "center", marginTop: "20px", color: "#707070" }}>
                                <span>For more information, please visit </span>
                                <span onClick={this.onOpenForm} style={{ color: "#2185d0", cursor: "pointer" }}>
                                    here
    
                            </span>
                            </div>


                        </div>
                    </div>
                </Fragment>

            </Navigator>

            // <div className="quiz-result-container">
            //     <div className="quiz-result-header-container">
            //         <BackBtn onClick={this.onBack}/>
            //     </div>

            // </div>
        )
    }
}

export default withRouter(QuizResult)