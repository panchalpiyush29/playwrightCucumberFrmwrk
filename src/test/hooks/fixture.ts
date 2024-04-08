import {APIRequestContext, Page} from "@playwright/test";
import {Logger} from "winston";

export const fixture = {
    //@ts-ignore
    page: undefined as Page,
    logger: undefined as Logger,
    api: undefined as APIRequestContext
}
