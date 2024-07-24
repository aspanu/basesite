module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__tests__/mocks/fileMock.js'
    },
    testPathIgnorePatterns: ['<rootDir>/src/__tests__/mocks/'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', 'tsconfig.jest.json'],
    },
};