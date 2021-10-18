import questions from "../assets/questions.js";

let correctsAnswers = []
let wrongsAnswers = []
let acutalQuestion  = []

const checkAnswer = (questionId,questionListId,buttonSelected ) => {
    buttonSelected.classList.add('selected')
    acutalQuestion = questions[questionListId]
    if(acutalQuestion.answers[questionId].correct){
        correctsAnswers.push(acutalQuestion)
    }else{
        wrongsAnswers.push(acutalQuestion)
    }
}

export {checkAnswer}

const template = `
<p>¿Cual es el principal o bien, el único lenguaje de programación que entienden los navegadores?</p>
            <div class="question">Python</div>
            <div class="question selected">JavaScript</div>
            <div class="question">Java</div>
            <div class="question">C#</div>
`