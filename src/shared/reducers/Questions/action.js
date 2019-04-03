/**
 * Created By Nikita Mittal
 * 3rd April 2019
 */

export const STORE_QUESTIONS = "store_questions"
import {QUESTION} from '../model'
const model = QUESTION


export const storeQuestionAction = (questionList) => {
    return (dispatch, getState) => {
        let questionData = []
        if(questionList && questionList.length){
            questionList.forEach((question, index) => {
                if(question){
                    questionData.push({
                        id: index,
                        question : question.description,
                        option1: question.options.option1,
                        option2: question.options.option2,
                        option3: question.options.option3,
                        option4: question.options.option4,
                        correctAnswer: question.correctAnswer,
                        explainationText: question.explanation
                    })
                }
            })
        }

        dispatch({
            type: STORE_QUESTIONS,
            model,
            payload:{
                questionData
            }
        })
    }
}
