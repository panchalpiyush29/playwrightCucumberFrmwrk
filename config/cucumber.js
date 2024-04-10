module.exports = {
    default: {
        //tags: process.env.npm_config_TAGS || "",
        tags: "@regression",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features/"
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/steps/api/*.ts",
            "src/test/hooks/Hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json"
        ],
        parallel: 2,
        retries: 1
    }
}
