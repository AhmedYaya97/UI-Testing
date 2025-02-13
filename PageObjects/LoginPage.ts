import {Page, Locator} from "@playwright/test"


class LoginPage{
    readonly page: Page
    readonly emailInputField: Locator
    readonly passwordInputField: Locator
    readonly forgotPassword: Locator
    readonly createNewAccount: Locator

    constructor(page:Page){
        this.page = page
        this.emailInputField = this.page.locator("#field-email")
        this.passwordInputField = this.page.locator("#field-password")
        this.forgotPassword = this.page.getByLabel("Forgot your password?")
        this.createNewAccount = this.page.locator('a', {hasText: "No account? Create one here"})

    }

    async enterEmail(email: string){
        await this.emailInputField.fill(email)
    }
    async enterPassword(password: string){
        await this.passwordInputField.fill(password)
    }
    async clickOnForgotPassword(){
        await this.forgotPassword.click()
    }
    async clickOnCreateNewAccount(){
        await this.createNewAccount.click()
    }
}
export default LoginPage;