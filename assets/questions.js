const questions = [
    {
        statement: "¿Cual es el principal o bien, el único lenguaje de programación que entienden los navegadores?",
        id: "100",
        answers: [
            {
                answer: "Python",
                id: "100-1",
                correct: false
            },
            {
                answer: "JavaScript",
                id: "100-2",
                correct: true
            },
            {
                answer: "Java",
                id: "100-3",
                correct: false
            },
            {
                answer: "C#",
                id: "100-4",
                correct: false
            }
        ],
    },
    {
        statement: "¿Como puedo ordenar un Array en JavaScript?",
        id: "101",
        answers: [
            {
                answer: "myArray.sort()",
                id: "101-1",
                correct: true
            },
            {
                answer: "myArray.OrdenatePorFavor()",
                id: "101-2",
                correct: false
            },
            {
                answer: "myArray.join()",
                id: "101-3",
                correct: false
            },
            {
                answer: "myArray.split()",
                id: "101-4",
                correct: false
            }
        ],
    },
    {
        statement: "¿Como puedo seleccionar un elemento HTML por su id?",
        id: "102",
        answers: [
            {
                answer: "const root = document.getElementById('root')",
                id: "102-1",
                correct: true
            },
            {
                answer: "const root = selectElementInHTML('#root')",
                id: "102-2",
                correct: false
            },
            {
                answer: "const root = document.AddEventListener('#root')",
                id: "102-3",
                correct: false
            },
            {
                answer: "const root = document.querySelector('.root')",
                id: "102-4",
                correct: false
            }
        ],
    },
    {
        statement: "¿Con cual de estas herramientas podemos construir un Backend usado JS?",
        id: "103",
        answers: [
            {
                answer: "Django",
                id: "103-1",
                correct: false
            },
            {
                answer: ".Net Framework",
                id: "103-2",
                correct: false
            },
            {
                answer: "Express.js",
                id: "103-3",
                correct: true
            },
            {
                answer: "FastAPI",
                id: "103-4",
                correct: false
            }
        ],
    },
    {
        statement: "¿Cual es el mejor OS para programar?",
        id: "104",
        answers: [
            {
                answer: "IOS",
                id: "104-1",
                correct: false
            },
            {
                answer: "Windows",
                id: "104-2",
                correct: false
            },
            {
                answer: "Linux",
                id: "104-3",
                correct: true
            },
            {
                answer: "Cualquiera es bueno, todo es cuestion de gustos y necesidades",
                id: "104-4", 
                correct: false
            }
        ],
    }
]
export default questions