import {Page, Locator} from "@playwright/test"

class RegisterationPage{
    readonly page: Page
    readonly socialTitleRadioBtn: Locator
    readonly firstNameInputField: Locator
    readonly lastNameInputField: Locator
    readonly emailInputField: Locator
    readonly passwordInputField: Locator
    readonly showPasswordBtn: Locator
    readonly birthDateInputField: Locator
    readonly receiveOffersCheckBox: Locator
    readonly agreeToTermnsCheckBox: Locator
    readonly signForNewsLetterCheckBox: Locator
    readonly saveBtn: Locator



    constructor(page:Page){
        this.page = page
        this.socialTitleRadioBtn = this.page.locator('.radio-inline')
        this.firstNameInputField = this.page.locator("#field-firstname")
        this.lastNameInputField = this.page.locator("#field-lastname")
        this.emailInputField = this.page.locator("#field-email")
        this.passwordInputField = this.page.locator("#field-password")
        this.showPasswordBtn = this.page.locator('[data-action="show-password"]')
        this.birthDateInputField = this.page.locator('#field-birthday')
        this.receiveOffersCheckBox = this.page.getByLabel('Receive offers from our partners')
        this.agreeToTermnsCheckBox = this.page.getByLabel('I agree to the terms and conditions and the privacy policy')
        this.signForNewsLetterCheckBox = this.page.getByLabel('Sign up for our newsletter')
        this.saveBtn = this.page.locator('button[type="submit"]')
    }
    async selectTitle(title: string){
        await this.socialTitleRadioBtn.getByLabel(title).click()
    }
    async enterFirstName(firstName: string){
        await this.firstNameInputField.fill(firstName)
    }
    async enterLastName(lastName: string){
        await this.lastNameInputField.fill(lastName)
    }
    async enterEmail(email: string){
        await this.emailInputField.fill(email)
    }
    async enterPassword(password: string){
        await this.passwordInputField.fill(password)
    }
    async clickOnShowPassword(){
        await this.showPasswordBtn.click()
    }
    //birthday format -> MM/DD/YYYY
    async enterBirthDate(birthDate: string){
        await this.birthDateInputField.fill(birthDate)
    }
    async receiveOffersFromPartners(){
        await this.receiveOffersCheckBox.click()  
    }
    async agreeToTerms(){
        await this.agreeToTermnsCheckBox.click()
    }
    async signUpForNewsletter(){
        await this.signForNewsLetterCheckBox.click()
    }
    async clickOnSaveBtn(){
        await this.saveBtn.click()
    }

}
export default RegisterationPage;