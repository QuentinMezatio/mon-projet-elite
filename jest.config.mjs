import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Indique le chemin de ton application Next.js
  dir: './',
})

// Configuration personnalisée de Jest
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/tests/']
}

export default createJestConfig(config)