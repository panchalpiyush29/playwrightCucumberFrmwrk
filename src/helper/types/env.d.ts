export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit"
            ENV: "staging" | "test"
            BASEURL: string,
            HEAD: "true" | "false",
            TIMEOUT: number,
        }
    }
}
