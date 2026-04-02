import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100)

const isEven = num => num % 2 === 0

const getQuestionAndAnswer = () => {
  const number = getRandomNumber()

  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

const runEvenGame = () => {
  runGame(description, getQuestionAndAnswer)
}

export default runEvenGame
