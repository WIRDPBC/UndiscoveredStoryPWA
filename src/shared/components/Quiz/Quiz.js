/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Progress, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { hostUrl } from '../helper'

//import actions 
import { storeQuestionAction } from '../../reducers/Questions/action'

//import css
import './Quiz.css'
import CloseIcon from '../../icons/CloseIcon';
import HourGlass from '../../icons/HourGlass';
import Bookmark from '../../icons/Bookmark';
import OptionOne from '../../icons/QuestionOption1.png'
import OptionTwo from '../../icons/QuestionOption2.png'
import OptionThree from '../../icons/QuestionOption3.png'
import OptionFour from '../../icons/QuestionOption4.png'
import QuestionCenterIcon from '../../icons/QuestionIcon.png'

import CorrectOption from '../../icons/CorrectOption';
import IncorrectOption from '../../icons/IncorrectOption';
import CorrectIcon from '../../icons/CorrectIcon.png'
import IncorrectIcon from '../../icons/IncorrectIcon.png'



class Quiz extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            count: 0,
            correctAnswer: "",
            explainationText: "",
            percent: 0,
            optionSelect: '',
            timer: 0,
            totalCorrectAnswers: 0,
            totalIncorrectAnswers: 0,
            totalUnanswered: 0

        }
    }

    componentWillMount() {
        clearInterval(this.timer)
        const { storeQuestionAction } = this.props
        let url = `${hostUrl}/viewQuestions`
        const config = {
            headers: { 'content-type': 'application/json' },
        }
        let formData = {}
        axios.post(url, formData, config)
            .then((questionList) => {
                storeQuestionAction(questionList.data)
                let firstQuestion = questionList.data[0]

                this.setState({

                    question: firstQuestion.description,
                    option1: firstQuestion.options.option1,
                    option2: firstQuestion.options.option2,
                    option3: firstQuestion.options.option3,
                    option4: firstQuestion.options.option4,
                    correctAnswer: firstQuestion.correctAnswer,
                    explainationText: firstQuestion.explanation,
                    count: 1,
                    percent: 5,
                })
                this.startTimer()

            })
            .catch(error => {
                console.error(error)
            })
    }

    startTimer = () => {
        this.time = setInterval(this.tick(), 1000)
    }

    tick = () => {
        const { timer, optionSelect } = this.state
        // console.log("Tick getting called")
        if (timer < 60 && !optionSelect) {
            if (timer + 1 === 60) {
                this.setState({
                    timer: "Time Up!"
                })
                this.saveAnswer(0)
            } else {
                this.setState({
                    timer: timer + 1
                })
            }

            setTimeout(() => {
                this.startTimer()
            }, 1000)

        }
    }

    clearTimer = () => {

        this.setState({
            timer: 0,
            optionSelect: ''
        })
    }

    onBack = () => {
        this.props.history.goBack()
    }

    changeState = (question, count) => {
        this.setState({

            question: question.question,
            option1: question.option1,
            option2: question.option2,
            option3: question.option3,
            option4: question.option4,
            correctAnswer: question.correctAnswer,
            explainationText: question.explainationText,
            count: count,
            percent: 5 * count,

        })
    }

    nextQuestion = () => {
        const { questionData } = this.props
        console.log("Question Data", questionData)
        const { count } = this.state
        this.clearTimer()
        setTimeout(() => {
            this.startTimer()

            let nextCount = count + 1
            if (nextCount === 2) {
                let question = questionData[1]
                this.changeState(question, 2)

            } else if (nextCount === 3) {
                let question = questionData[2]
                this.changeState(question, 3)

            } else if (nextCount === 4) {
                let question = questionData[3]
                this.changeState(question, 4)

            } else if (nextCount === 5) {
                let question = questionData[4]
                this.changeState(question, 5)

            } else if (nextCount === 6) {
                let question = questionData[5]
                this.changeState(question, 6)

            } else if (nextCount === 7) {
                let question = questionData[6]
                this.changeState(question, 7)

            } else if (nextCount === 8) {
                let question = questionData[7]
                this.changeState(question, 8)

            } else if (nextCount === 9) {
                let question = questionData[8]
                this.changeState(question, 9)

            } else if (nextCount === 10) {
                let question = questionData[9]
                this.changeState(question, 10)

            } else if (nextCount === 11) {
                let question = questionData[10]
                this.changeState(question, 11)

            } else if (nextCount === 12) {
                let question = questionData[11]
                this.changeState(question, 12)

            } else if (nextCount === 13) {
                let question = questionData[12]
                this.changeState(question, 13)

            } else if (nextCount === 14) {
                let question = questionData[13]
                this.changeState(question, 14)

            } else if (nextCount === 15) {
                let question = questionData[14]
                this.changeState(question, 15)

            } else if (nextCount === 16) {
                let question = questionData[15]
                this.changeState(question, 16)

            } else if (nextCount === 17) {
                let question = questionData[16]
                this.changeState(question, 17)

            } else if (nextCount === 18) {
                let question = questionData[17]
                this.changeState(question, 18)

            } else if (nextCount === 19) {
                let question = questionData[18]
                this.changeState(question, 19)

            } else if (nextCount === 20) {
                let question = questionData[19]
                this.changeState(question, 20)

            }
        })


    }


    onFirstSelect = () => {
        const { optionSelect, timer } = this.state
        if (!optionSelect && timer !== "Time Up!") {
            this.setState({
                optionSelect: 1
            })
            this.saveAnswer(1)
        }

    }

    onSecondSelect = () => {
        const { optionSelect, timer } = this.state
        if (!optionSelect && timer !== "Time Up!") {
            this.setState({
                optionSelect: 2
            })
            this.saveAnswer(2)
        }


    }

    onThirdSelect = () => {
        const { optionSelect, timer } = this.state
        if (!optionSelect && timer !== "Time Up!") {
            this.setState({
                optionSelect: 3
            })
            this.saveAnswer(3)
        }

    }

    onFourthSelect = () => {
        const { optionSelect, timer } = this.state
        if (!optionSelect && timer !== "Time Up!") {
            this.setState({
                optionSelect: 4
            })
            this.saveAnswer(4)
        }

    }

    saveAnswer = (option) => {
        const { correctAnswer, totalCorrectAnswers, totalIncorrectAnswers, totalUnanswered } = this.state
        const { email } = this.props
        let url = `${hostUrl}/answer`
        let correctAnswerData = false, unanswered = false;
        if (option !== 0 && option === correctAnswer) {
            correctAnswerData = true
            this.setState({
                totalCorrectAnswers: totalCorrectAnswers + 1
            })
        } else if (option === 0) {
            unanswered = true
            this.setState({
                totalUnanswered: totalUnanswered + 1
            })
        } else if (option !== 0 && option !== correctAnswer) {
            correctAnswerData = false
            this.setState({
                totalIncorrectAnswers: totalIncorrectAnswers + 1
            })
        }

        let formData = {
            email: email,
            correctAnswer: correctAnswerData,
            unanswered: unanswered
        }

        console.log("Answer option", option)
        console.log("Correct Answer", correctAnswer)
        const config = {
            headers: { 'content-type': 'application/json' },
        }
        axios.post(url, formData, config)
            .then(data => {
                console.log("Answer Saved Successfully", data)
            })
            .catch(error => {
                console.error("Error in saving answer", error)
            })

    }

    getTime = () => {
        const { timer } = this.state
        if (timer === "Time Up!") {
            return "Time Up!"
        } else if (timer < 10) {
            return `${timer} sec`
        } else {
            return `${timer} secs`
        }
    }

    onEndGame = () => {
        console.log("On End Game getting clicked")
        const {email} = this.props
        const {totalCorrectAnswers} = this.state
        let correctAnswerObj = {
            email : email,
            totalCorrectAnswers : totalCorrectAnswers
        }

        localStorage.setItem(email, totalCorrectAnswers)

    }

    render() {
        const { question, option1, option2, option3, option4, count, correctAnswer, explainationText, percent, timer, optionSelect, totalCorrectAnswers, totalIncorrectAnswers, totalUnanswered } = this.state
        return (
            <div className="quiz-container">
                <div className="quiz-header-container">
                    <CloseIcon size="small" style={{ position: "relative", top: "17px", cursor: "pointer" }} onClick={this.onBack} />
                    <div className="quiz-header-time-container">
                        <HourGlass style={{ position: "relative", top: "17px", marginRight: "5px" }} />
                        <div className="quiz-header-time-text">{this.getTime()}</div>

                    </div>
                    <Bookmark style={{ position: "relative", top: "17px" }} />
                </div>
                <div className="quiz-header-progress-container">
                    <Progress percent={percent} style={{ height: "3px", flex: "1 1 auto" }} />
                    <span className="quiz-header-progress-text-container">{count}/20</span>
                </div>
                {(optionSelect || timer === "Time Up!") && count === 20 &&
                    <div className="quiz-explaination-container">
                        <div className="quiz-explaination-text-container">Explanation Text:</div>
                        <div className="quiz-explaination-content-container">
                            {explainationText}
                        </div>
                        <Link
                            to={{
                                pathname: '/quiz-result',
                                totalCorrectAnswers: totalCorrectAnswers,
                                totalIncorrectAnswers: totalIncorrectAnswers,
                                totalUnanswered: totalUnanswered
                            }}
                        >
                            <Button content="End Game" style={{ float: "right", marginTop: "10px" }} onClick={this.onEndGame}/>
                        </Link>
                    </div>
                }
                {(optionSelect || timer === "Time Up!") && count < 20 && <div className="quiz-explaination-container">
                    <div className="quiz-explaination-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-content-container">
                        {explainationText}
                    </div>
                    <Button content="Next Question" onClick={this.nextQuestion} style={{ float: "right", marginTop: "10px" }} />
                </div>}


                <div className="quiz-question-header-container">
                    <img src={QuestionCenterIcon} className="quiz-question-center-icon-container" />
                </div>


                <div className="quiz-question-text-container">
                    <div className="quiz-question-text">{question}</div>
                </div>
                <div className="quiz-question-option-container">
                    <div className="quiz-question-option-data">
                        <div className="quiz-initial-option-container">


                            <div className="quiz-odd-option-container" onClick={this.onFirstSelect}>
                                {optionSelect && correctAnswer === 1 &&
                                    <div className="option-style">
                                        <CorrectOption />
                                    </div>

                                }
                                {optionSelect === 1 && optionSelect !== correctAnswer &&
                                    <div className="option-style">
                                        <IncorrectOption />
                                    </div>
                                }
                                    <img src={OptionOne} className="quiz-option-image-container quiz-option-odd-image"/>

                                <div className="quiz-option-odd-text-container">{option1}</div>
                            </div>







                            <div className="quiz-even-option-container" onClick={this.onSecondSelect}>
                                {optionSelect && correctAnswer === 2 &&
                                    <div className="option-style">
                                        <CorrectOption />
                                    </div>

                                }
                                {optionSelect === 2 && optionSelect !== correctAnswer &&
                                    <div className="option-style">
                                        <IncorrectOption />
                                    </div>
                                }
                                <img src={OptionTwo} className="quiz-option-image-container quiz-option-even-image" />
                                <div className="quiz-option-even-text-container">{option2}</div>
                            </div>




                        </div>
                        <div className="quiz-last-option-container">






                            <div className="quiz-odd-option-container" onClick={this.onThirdSelect}>
                                {optionSelect && correctAnswer === 3 &&
                                    <div className="option-style">
                                        <CorrectOption />
                                    </div>

                                }
                                {optionSelect === 3 && optionSelect !== correctAnswer &&
                                    <div className="option-style">
                                        <IncorrectOption />
                                    </div>
                                }
                                <img src={OptionThree} className="quiz-option-image-container quiz-option-even-image" />

                                <div className="quiz-option-even-text-container">{option3}</div>
                            </div>






                            <div className="quiz-even-option-container" onClick={this.onFourthSelect}>
                                {optionSelect && correctAnswer === 4 &&
                                    <div className="option-style">
                                        <CorrectOption />
                                    </div>

                                }
                                {optionSelect === 4 && optionSelect !== correctAnswer &&
                                    <div className="option-style">
                                        <IncorrectOption />
                                    </div>
                                }
                                <img src={OptionFour} className="quiz-option-image-container quiz-option-even-image" />

                                <div className="quiz-option-even-text-container">{option4}</div>
                            </div>


                        {(optionSelect || timer === "Time Up!") && count === 20 &&
                            <div className="quiz-explaination-mobile-container">
                                <div className="quiz-explaination-mobile-text-container">Explanation Text:</div>
                                <div className="quiz-explaination-mobile-content-container">
                                    {explainationText}
                                </div>
                                <Link
                                    to={{
                                        pathname: '/quiz-result',
                                        totalCorrectAnswers: totalCorrectAnswers,
                                        totalIncorrectAnswers: totalIncorrectAnswers,
                                        totalUnanswered: totalUnanswered
                                    }}
                                >
                                    <Button content="End Game" style={{ float: "right", marginTop: "10px" }} />
                                </Link>
                            </div>
                        }
                        {(optionSelect || timer === "Time Up!") && count < 20 && <div className="quiz-explaination-mobile-container">
                            <div className="quiz-explaination-mobile-text-container">Explanation Text:</div>
                            <div className="quiz-explaination-mobile-content-container">
                                {explainationText}
                            </div>
                            <Button content="Next Question" onClick={this.nextQuestion} style={{ float: "right", marginTop: "10px" }} />
                        </div>}

                        </div>



                    </div>
                </div>



                {/* {count === 22 && <Link to={'/quiz-result'}>
                <div className="quiz-explaination-mobile-container" >
                    <div className="quiz-explaination-mobile-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-mobile-content-container">
                        {explainationText}
                    </div>
                </div>
                </Link>}

                {count === 22 && 
                <div className="quiz-explaination-mobile-container" onClick={this.nextQuestion}>
                    <div className="quiz-explaination-mobile-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-mobile-content-container">
                        {explainationText}
                    </div>
                </div>
               } */}







            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const gameData = state.GameReducer
    const questionData = gameData.questionData
    const login = gameData.login
    let email
    if (login) {
        email = login.email
    }
    return {
        questionData,
        email
    }
}

const mapActionsToProps = {
    storeQuestionAction
}

export default connect(mapStateToProps, mapActionsToProps)(Quiz)