import {chromium, firefox, LaunchOptions, webkit} from "playwright-core";

const options: LaunchOptions = {
    headless: true
}

export const invokeBrowser = () => {
    //gets the browser from .env files
    const browserType = process.env.BROWSER
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("invalid browser name")
    }
}