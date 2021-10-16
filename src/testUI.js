import questions from "../assets/questions.js";

const printQuestion = (acutalQuestion) => {
    const answers = acutalQuestion.map(answer => (
        `<div class="question" istrue="${answer.correcta}">${answer.respuesta}</div>`
    ))
    return answers.join('');
}

const printCard = () => {
    const listQuestions = questions.map(question => (`
        <div   class="app_container--question">
            <p>${question.statement}</p>
                ${printQuestion(question.answers)}
        </div>
        ` ))
    return listQuestions.join('')
}


const template = printCard()

export default template;
