import {fixture} from "../../test/hooks/fixture";
import apiEndpoints from "../../helper/util/apiEndpoints";
import {expect} from "@playwright/test";

export default class ListUsersPage {

    private responseDataJson: any;
    private responseDataCode: number;

    constructor() {
        this.responseDataJson = null;
        this.responseDataCode = null;
    }

    async getUserDetails(): Promise<any> {
        try {
            const requestListUsers = fixture.api;
            const response = await requestListUsers.get(apiEndpoints.listUsers.get, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            this.responseDataJson = await response.json();
            this.responseDataCode = response.status();

        } catch (error) {
            console.error('Error fetching user list : ', error);
            throw error;
        }
    }
    verifyResponseCode(code: number) {
        expect(this.responseDataCode).toBe(code);
    }

    verifyResponseName(firstName: any, lastName: any) {
        expect(this.responseDataJson.data[0].first_name).toContain(firstName);
        expect(this.responseDataJson.data[0].last_name).toContain(lastName);
    }
}
