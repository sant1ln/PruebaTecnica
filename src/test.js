import questions from "../assets/questions.js";

let initialIndexValue = 0
let acutalQuestion = questions[initialIndexValue]

export const nextQuestion = (e) => {
    initialIndexValue++
    acutalQuestion = questions[initialIndexValue]
}

export { acutalQuestion }

const template = `
<p>¿Cual es el principal o bien, el único lenguaje de programación que entienden los navegadores?</p>
            <div class="question">Python</div>
            <div class="question selected">JavaScript</div>
            <div class="question">Java</div>
            <div class="question">C#</div>
`