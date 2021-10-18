import questions from "../assets/questions.js";

let correctsAnswers = []
let wrongsAnswers = []
let acutalQuestion  = []

const checkAnswer = (questionId,questionListId,buttonSelected, questionValue ) => {
    buttonSelected.classList.add('selected')
    acutalQuestion = questions[questionListId]
        if(acutalQuestion.answers[questionId].correct){
        correctsAnswers.push({
           acutalQuestion,
            questionValue
        })
    }else{
        wrongsAnswers.push({acutalQuestion,questionValue})
    }
}

export {checkAnswer,correctsAnswers,wrongsAnswers}

