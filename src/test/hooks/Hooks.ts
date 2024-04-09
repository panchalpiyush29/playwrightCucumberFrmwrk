import {After, AfterAll, Before, BeforeAll, Status} from "@cucumber/cucumber";
import {APIRequestContext, Browser, BrowserContext, request} from "@playwright/test";
import {fixture} from "./Fixture";
import {invokeBrowser} from "../../helper/browsers/browserManager";
import {getEnv} from "../../helper/env/env";
import {createLogger} from "winston";
import {options} from "../../helper/util/Logger";

let browser: Browser
let browserContext: BrowserContext;
let apiContext: APIRequestContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id;

    await setApiProperties();
    await setApiDetails(scenarioName);
    //fixture.api = apiContext;

    await setBrowserProperties();
    await setBrowserPageDetails(scenarioName);
});

After(async function ({pickle, result}) {
    let videoPath: string;
    let img: Buffer;
    console.log(pickle.name, "--->", result?.status);
    if (result?.status == Status.FAILED) {
        img = await fixture.page.screenshot(
            {path: `./test-results/screenshots/${pickle.name}.png`, type: "png"});
        videoPath = await fixture.page.video().path();
    }

    await fixture.page.close();
    await browserContext.close();

    if (result?.status == Status.FAILED) {
        this.attach(img, "image/png");
    }
});

AfterAll(async function () {
    await browser.close();
});

async function setApiProperties() {
    apiContext = await request.newContext({
        baseURL: process.env.BASE_URL_API
    });
}

async function setApiDetails(scenarioName: string) {
    fixture.api = apiContext;
    fixture.logger = createLogger(options(scenarioName));
}

async function setBrowserProperties() {
    browserContext = await browser.newContext({
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        recordVideo: {
            dir: "test-results/videos",
        }
    });
}

async function setBrowserPageDetails(scenarioName: string) {
    fixture.page = await browserContext.newPage();
    await fixture.page.setViewportSize({"width": 2560, "height": 1600});
    fixture.logger = createLogger(options(scenarioName));
}
