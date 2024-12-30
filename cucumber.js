//cucumber.js
module.exports = {
    default: {
        paths: [
            // "src/test/features/",
            // "src/test/features/login.feature",
            "src/test/features/dashboard.feature"
        ],
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts"
        ],  
        format: ['json:./test-results/reports/cucumber_report.json', 'html:./test-results/reports/cucumber_report.html'],
        // parallel: 2,
        reporter: 'src/test/utils/my-awesome-reporter.ts',
        timeout: 60000 
    }
};

// module.exports = {
//     default: `--require-module ts-node/register --require ./src/test/steps/**/*.ts --format json:.test-results/reports/cucumber_report.json`,
//   };
  