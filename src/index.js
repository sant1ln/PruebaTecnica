import { printResults} from './resultsUI.js';
import template from './testUI.js';

const root = document.getElementById('root')
const button = document.getElementById('checkTest')
button.addEventListener('click',async()=>{
 let resultsTemplate = await  printResults()
 root.innerHTML = resultsTemplate
 button.style.display = 'none'
})

root.innerHTML = template
