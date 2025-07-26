import type { Config } from "jest";

const config: Config = {
	transform: {
		"^.+\\.(ts|tsx)$": "babel-jest",
	},
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	moduleNameMapper: {
		// Alias resolution (optional)
		"^@/(.*)$": "<rootDir>/src/$1",
		// Mock CSS files
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		// Mock static assets
		"\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
	},
};

export default config;
