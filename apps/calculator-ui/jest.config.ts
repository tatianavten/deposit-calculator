export default {
    displayName: "@deposit-calculator/calculator-ui",
    preset: "../../jest.preset.js",
    setupFilesAfterEnv: ["./setupTests.js"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testEnvironment: "jsdom",
    transform: {
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
        "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/react/babel"] }],
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>../../node_modules/jest-css-modules",
        "^@deposit-calculator/calculators$": "<rootDir>/../../libs/calculators/src/index.ts",
    },
    moduleDirectories: ["node_modules", "src"],
    clearMocks: true,
    restoreMocks: true,
    coverageDirectory: "test-output/jest/coverage",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/main.tsx"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageReporters: ["json", "lcov", "text", "clover"],
};
