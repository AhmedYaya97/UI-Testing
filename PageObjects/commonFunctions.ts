import {Locator, Page} from "@playwright/test"

class CommonFunctions {
    readonly page: Page
    


    constructor(page: Page){
        this.page = page
        


    }
    async navigateToUrl(url: string){
        await this.page.goto(url)
    }
    async clickOnButtonByName(buttonName: string){
        await this.page.getByRole("button", {name: buttonName, exact: true}).click()
    }

}
export default CommonFunctions;