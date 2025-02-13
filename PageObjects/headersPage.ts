import {Page, Locator} from "@playwright/test";

class HeadersPage{
    readonly page: Page
    readonly contactUs: Locator
    readonly clothes: Locator
    readonly accessories: Locator
    readonly art: Locator
    readonly signIn: Locator
    readonly cart: Locator

    constructor(page: Page){
        this.page = page
        this.contactUs = this.page.getByLabel('Contact us')
        this.clothes = this.page.getByLabel('Clothes')
        this.accessories = this.page.getByLabel('Accessories')
        this.art = this.page.getByLabel('Art')
        this.signIn = this.page.locator('span', {hasText: 'Sign in'})
        this.cart = this.page.locator('span', {hasText:'Cart'})

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
    async clickOnArt(category: string){
        await this.art.click()
    }
    
    
}

export default HeadersPage;