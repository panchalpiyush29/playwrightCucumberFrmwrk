import {After, AfterAll, Before, BeforeAll, Status} from "@cucumber/cucumber";
import {APIRequestContext, Browser, BrowserContext, request} from "@playwright/test";
import {fixture} from "./fixture";
import {invokeBrowser} from "../../helper/browsers/browserManager";
import {getEnv} from "../../helper/env/env";
import {createLogger} from "winston";
import {options} from "../../helper/util/logger";

let browser: Browser
let browserContext: BrowserContext;
let apiContext: APIRequestContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({pickle}) {

    apiContext = await request.newContext({
        baseURL: process.env.BASE_URL_API
    });

    const scenarioName = pickle.name + pickle.id;
    browserContext = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });

    fixture.page = await browserContext.newPage();
    fixture.api = apiContext;
    fixture.logger = createLogger(options(scenarioName));
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
