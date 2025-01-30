module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};
