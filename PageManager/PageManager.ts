import CommonFunctions from "../PageObjects/commonFunctions";
import HomePage from "../PageObjects/homePage";
import RegisterationPage from "../PageObjects/RegisterationPage";
import LoginPage from "../PageObjects/LoginPage"
import HeadersPage from "../PageObjects/headersPage"

import {Page} from "@playwright/test"

class PageManager {
    readonly page: Page
    readonly homePage: HomePage
    readonly commonFunctions: CommonFunctions
    readonly headersPage: HeadersPage
    readonly registerationPage: RegisterationPage
    readonly loginPage: LoginPage

    constructor(page:Page){
        this.page = page
        this.homePage = new HomePage(page)
        this.commonFunctions = new CommonFunctions(page)
        this.registerationPage = new RegisterationPage(page)
        this.loginPage = new LoginPage(this.page)
        this.headersPage = new HeadersPage(this.page)

    }
}
export default PageManager;