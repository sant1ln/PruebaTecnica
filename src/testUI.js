import questions from "../assets/questions.js";
import { makeVoucabularyLetters } from "./letters.js";
import { checkAnswer } from "./test.js";

const lettersChoice = makeVoucabularyLetters()

const printQuestion = (acutalQuestion,questionIdx) => {
    const answers = acutalQuestion.map((answer,index) => (
        `<div class="question" question-id="${index}" questionList-id="${questionIdx}">${lettersChoice[index]}) ${answer.answer}</div>`
    ))
    return answers.join('');
}

const printCard = () => {
    const listQuestions = questions.map((question,index) => (`
        <div   class="app_container--question">
            <p>${question.statement}</p>
                ${printQuestion(question.answers,index)}
        </div>
        ` ))
    return listQuestions.join('')
}

setTimeout(()=>{
    const questionsButtons = document.querySelectorAll('.question')
    questionsButtons.forEach(questionButton =>(
        questionButton .addEventListener('click',(e)=>{
          const questionListId =  questionButton.getAttribute('questionList-id')
          const questionId = questionButton.getAttribute('question-id')
          const buttonSelected = e.target
          checkAnswer(questionId,questionListId,buttonSelected)
        })
    ))
},1)

const template = printCard()

export default template;
