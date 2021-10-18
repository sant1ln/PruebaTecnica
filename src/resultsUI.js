import { correctsAnswers, wrongsAnswers } from "./test.js"

const printCorrectQuestion = ( corrects) => {
  const answers = corrects.map((answer) => (
    `<div class="results_question">
        <p>${answer.acutalQuestion.statement}</p>
        <span>${answer.questionValue}</span>
      </div>   
`
  ))
  return answers.join('');
}

const printIncorrectQuestion = ( incorrects) => {
  const answers = incorrects.map((answer) => (
    `<div class="results_question">
        <p>${answer.acutalQuestion.statement}</p>
        <span>${answer.questionValue}</span>
    </div>   
    `
  ))
  return answers.join('');
}

const printResults = () => {
  let corrects = correctsAnswers
  let incorrects = wrongsAnswers

  const templateResults = `
    <div class="results corrects ">
      <h3>Corrects Answers</h3>     
          ${printCorrectQuestion(corrects)}
   </div>       
  <div class="results incorrects">
  <h3>Corrects Answers</h3>     
      ${printIncorrectQuestion( incorrects)}
  </div>
 `
    return templateResults
}

export { printResults}