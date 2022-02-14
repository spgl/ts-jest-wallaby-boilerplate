module.exports = function (wallaby) {
  return {
    files: [
      "src/**/*.{js,jsx,ts,tsx}",
      {
        pattern: "src/**/*test.{js,jsx,ts,tsx}",
        ignore: true,
      },
    ],
    tests: ["src/**/*test.{js,jsx,ts,tsx}", "tests/**/*test.{js,jsx,ts,tsx}"],
    autoDetect: true,
    testFramework: "jest",
  };
};
