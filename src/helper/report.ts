const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright cucumber report for saucedemo website",
    metadata: {
        browser: {
            name: "chrome",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "16.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            {label: "Project", value: "end to end tests"},
            {label: "Cycle", value: "smoke"},
        ],
    },
});