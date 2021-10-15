import questions from "../assets/questions.js";


const acutalQuestion = questions[0]


const printQuestion = () => {
    const answers = acutalQuestion.answers.map(answer => (
        `<div class="question">${answer.respuesta}</div>`
    ))
    let arrayOfElements = answers.join('');
    return arrayOfElements
}
const template = `
<p>${acutalQuestion.statements}</p>
    ${printQuestion()}
    
`



export default template;
