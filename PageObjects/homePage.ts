import {Page, Locator} from "@playwright/test"
class HomePage{
    readonly page: Page
    readonly registerationLinke: Locator
    readonly loginLinke: Locator
    readonly wishlist: Locator
    readonly cart: Locator



    constructor(page: Page){
        this.page = page
        this.registerationLinke = this.page.locator(".ico-register")
        this.wishlist = this.page.locator(".ico-wishlist")
        this.cart = this.page.locator(".ico-cart")

    }
    async selectProductType(product: string){
        await this.page.locator("li", {hasText: product}).click()
    }
    async selectProduct(product: string, subProduct: string){
        await this.page.locator("a", {hasText: product}).hover()
        await this.page.locator("a", {hasText: subProduct}).click()
    }
}


export default HomePage;