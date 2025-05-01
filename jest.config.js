const dotenv = require("dotenv");

dotenv.config({ path: ".env.development" });

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "src",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>", "src"],
  testTimeout: 60_000,
});

module.exports = jestConfig;
