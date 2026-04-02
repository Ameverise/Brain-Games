import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1

const getQuestionAndAnswer = () => {
  const start = getRandomNumber()

  const step = getRandomNumber()

  const hiddenIndex = Math.floor(Math.random() * 10)

  const progression = []

  for (let i = 0; i < 10; i += 1) {
    progression.push(start + i * step)
  }

  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  return [progression.join(' '), correctAnswer]
}

const runProgressionGame = () => {
  runGame(description, getQuestionAndAnswer)
}

export default runProgressionGame
