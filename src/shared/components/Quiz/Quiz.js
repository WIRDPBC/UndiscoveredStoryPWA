/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import css
import './Quiz.css'
import CloseIcon from '../../icons/CloseIcon';
import HourGlass from '../../icons/HourGlass';
import Bookmark from '../../icons/Bookmark';
import QuestionCenterIcon from '../../icons/QuestionCenterIcon';
import OptionOne from '../../icons/OptionOne';
import CorrectOption from '../../icons/CorrectOption';
import IncorrectOption from '../../icons/IncorrectOption';

class Quiz extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-header-container">
                    <CloseIcon size="small" style={{ position: "relative", top: "17px" }} />
                    <div className="quiz-header-time-container">
                        <HourGlass style={{ position: "relative", top: "17px", marginRight: "5px" }} />
                        <div className="quiz-header-time-text">8 secs</div>
                    </div>
                    <Bookmark style={{ position: "relative", top: "17px" }} />
                </div>
                <div className="quiz-header-progress-container">
                    <Progress percent={11} style={{ height: "3px", flex: "1 1 auto" }} />
                    <span className="quiz-header-progress-text-container">1/22</span>
                </div>
                <div className="quiz-explaination-container">
                    <div className="quiz-explaination-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-content-container">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 

                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 

                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur
                    </div>
                </div>
                <Link to={'/quiz-result'}>
                    <div className="quiz-question-header-container">
                        <QuestionCenterIcon style={{ width: "130px", height: "130px" }} />
                    </div>
                </Link>
               
                <div className="quiz-question-text-container">
                    1. Who was the African American who sang “Cosi Fan Tutte” with George Shirley.
                </div>
                <div className="quiz-question-option-container">
                    <div className="quiz-question-option-data">
                        <div className="quiz-initial-option-container">
                        {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/> */}
                        <IncorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/>
                            <div className="quiz-odd-option-container">
                              
                                <OptionOne style={{ width: "134px", height: "90px"}} className="quiz-option-image-container" />
                                <div className="quiz-option-odd-text-container">Camilla Williams</div>
                              
                            </div>
                            {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/> */}
                            <IncorrectOption  style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/>
                            <div className="quiz-even-option-container">
                                <OptionOne style={{ width: "134px", height: "90px", float: "right" }} className="quiz-option-image-container"/>
                                <div className="quiz-option-even-text-container">Camilla Williams</div>
                            </div>
                           

                        </div>
                        <div className="quiz-last-option-container">
                        {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/> */}
                        <IncorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/>
                            <div className="quiz-odd-option-container">
                                <OptionOne style={{ width: "134px", height: "90px" }} className="quiz-option-image-container"/>
                                <div className="quiz-option-odd-text-container">Camilla Williams</div>
                            </div>
                            {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/> */}
                            <IncorrectOption  style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/>
                            <div className="quiz-even-option-container">
                                <OptionOne style={{ width: "134px", height: "90px", float: "right" }} className="quiz-option-image-container"/>
                                <div className="quiz-option-even-text-container">Camilla Williams</div>
                            </div>
                        </div>


                    </div>
                    <div>

                    </div>
                </div>





            </div>
        )
    }
}

export default Quiz