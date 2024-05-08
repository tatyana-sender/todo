const esModules = ['lodash-es', 'nanoid'].join('|');

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        // "@testing-library/react/cleanup-after-each",
        '@testing-library/jest-dom/extend-expect'
    ],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'css', 'scss'],
    moduleNameMapper: {
        '^lodash-es(/(.*)|$)': 'lodash$1',
        '^nanoid(/(.*)|$)': 'nanoid$1',
        '^@/components(.*)$': '<rootDir>/src/components$1',
        '^@/types(.*)$': '<rootDir>/src/types$1',
        '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@/helpers(.*)$': '<rootDir>/src/helpers$1',
        '^@/store(.*)$': '<rootDir>/src/store$1',
        '^@/constants(.*)$': '<rootDir>/src/constants$1',
        '\\.(css|less)$': '<rootDir>/assets/css/__mocks__/styleMock.js'
    },
};
