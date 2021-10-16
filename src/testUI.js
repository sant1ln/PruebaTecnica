import { acutalQuestion, nextQuestion } from './test.js'


const printQuestion = () => {
    const answers = acutalQuestion.answers.map(answer => (
        `<div class="question" istrue="${answer.correcta}">${answer.respuesta}</div>`
    ))
    let arrayOfElements = answers.join('');
    return arrayOfElements
}

const createTemplate = () => {
    return `
    <p>${acutalQuestion.statements}</p>
        ${printQuestion()}    
    `
}

setTimeout(() => {
    const options = document.querySelectorAll('.question')

    options.forEach(option => {
        option.addEventListener('click', (e) => nextQuestion(e))
    })
}, 200)


export default createTemplate;
