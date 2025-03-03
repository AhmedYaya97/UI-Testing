import {Page, Locator, expect} from "@playwright/test";

class HeadersPage{
    readonly page: Page
    readonly contactUs: Locator
    readonly clothes: Locator
    readonly accessories: Locator
    readonly art: Locator
    readonly signIn: Locator
    readonly cart: Locator
    readonly signOutBtn: Locator

    constructor(page: Page){
        this.page = page
        this.contactUs = this.page.getByLabel('Contact us')
        this.clothes = this.page.getByLabel('Clothes')
        this.accessories = this.page.getByLabel('Accessories')
        this.art = this.page.getByLabel('Art')
        this.signIn = this.page.locator('span', {hasText: 'Sign in'})
        this.cart = this.page.locator('span', {hasText:'Cart'})
        this.signOutBtn = this.page.getByRole('link', {name: "Sign out", exact: true} )

    }
    async clickOnSignInLink(){
        await this.signIn.click()
    }
    async clickOnContackUs(){
        await this.contactUs.click()
    }
    async selectClothesCategory(category: string){
        await this.clothes.hover()
        await this.page.getByLabel(category).click()
    }
    async selectAccessoriesCategory(category: string){
        await this.accessories.hover()
        await this.page.getByLabel(category).click()
    }
    async clickOnArt(){
        await this.art.click()
    }
    async VerifyLoggedInUser(firstName: string, lastName: string){
        expect(await this.page.locator('[class="account"] span').textContent()).toEqual(`${firstName} ${lastName}`)
    }
    async clickOnSignOutButton(){
        await this.signOutBtn.click()
    }
    
}

export default HeadersPage;