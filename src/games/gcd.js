import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = () => Math.floor(Math.random() * 100)

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()

  const question = `${num1} ${num2}`

  const correctAnswer = String(gcd(num1, num2))

  return [question, correctAnswer]
}

const runGcdGame = () => {
  runGame(description, getQuestionAndAnswer)
}

export default runGcdGame
