import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRandomNumber = () => Math.floor(Math.random() * 20)

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return String(a + b)
    case '-':
      return String(a - b)
    case '*':
      return String(a * b)
    default:
      return null
  }
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()

  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${num1} ${operator} ${num2}`

  const correctAnswer = calculate(num1, num2, operator)

  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame(description, getQuestionAndAnswer)
}

export default runCalcGame
