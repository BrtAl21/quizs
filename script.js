const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-Container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
 resetState()   
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
   const button = document.createElement('button')
   button.innerText = answer.text
   button.classList.add('btn')
   if (answer.correct) {
     button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.terget
    const correct = selectedButton.dataSet.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question:'1. what is the output of the following code?',
        answers:[
            { text: 'Zara', correct: true },
            { text: 'PYnative', correct: false },
            { text: 'true', correct: false },
            { text: 'false', correct: false }
        ]
    },
    {
        question:'2. what is the output of the following code?',
        answers:[
            { text: '[]', correct: true },
            { text: 'List index out of range', correct: false },
            { text: '[10, 20]', correct: false },
            { text: 'False', correct: false }
        ]
    },
    {
        question:'3. What is the output of the following:',
        answers:[
            { text: '10', correct: true },
            { text: '0', correct: false },
            { text: 'Syntax error', correct: false },
            { text: 'range', correct: false }
        ]
    },
    {
        question:'4. What is the output of the following list assignment:',
        answers:[
            { text: '[4, 20, 24, 28, 8, 12, 16]', correct: false },
            { text: '[4, 20, 24, 28]', correct: true },
            { text: '[ 24, 28]', correct: false },
            { text: '[4, 20, 24, 28, 8]', correct: false }
        ]
    },
    {
        question:'5. What is the output of the following list assignment:',
        answers:[
            { text: '[10, 20, 30, 40, 50, 60] [10, 20, 30, 40, 50, 60]', correct: false },
            { text: '[10, 20, 30, 40, 50, 60] [10, 20, 30, 40, 50, 60, 60]', correct: true },
            { text: '[10, 20, 30, 40, 50, 60, 60]', correct: false },
            { text: ' [10, 20, 30, 40, 50, 60] [10, 20, 30, 40, 50, 60, 60]', correct: false }
        ]
    },
    {
        question:'6. What is the output of the following list operation.',
        answers:[
            { text: '40[20, 30, 40]', correct: true },
            { text: 'IndexError: list index out of range', correct: false },
            { text: 'list index out of range', correct: false },
            { text: 'range', correct: false }
        ]
    },
    {
        question:'7.  What is the output of the following list comprehension.',
        answers:[
            { text: '[‘Hello Dear’, ‘Hello Bye’, ‘Good Dear’, ‘Good Bye’]', correct: true },
            { text: '[‘Hello Dear’, ‘Good Dear’, ‘Hello Bye’, ‘Good Bye’]', correct: false },
            { text: '[‘Hello Dear’, ‘Good Dear’]', correct: false },
            { text: '[‘Hello Dear’, ‘Good Dear’, ‘Hello Bye’, ‘Good Bye’]', correct: false }
        ]
    },
    {
        question:'8.What is the output of the following code:',
        answers:[
            { text: 'HelloPython-', correct: true },
            { text: 'Hello-Python', correct: false },
            { text: '-HelloPython', correct: false },
            { text: '-Hello Python', correct: false }
        ]
    },
    {
        question:'9.Select all the correct options to join two lists in Python',
        answers:[
            { text: 'newList = listOne + listTwo', correct: true },
            { text: 'newList = extend(listOne, listTwo)', correct: false },
            { text: 'newList = listOne.extend(listTwo)', correct: true },
            { text: 'newList.extend(listOne, listTwo)', correct: false }
        ]
    },
    {
        question:'10.Select all the correct options to copy a list.',
        answers:[
            { text: 'newList = copy(aList)', correct: false },
            { text: 'newList = aList.copy()', correct: true },
            { text: 'newList.copy(aList)', correct: false },
            { text: 'newList = list(aList)', correct: true }
        ]
    }
]