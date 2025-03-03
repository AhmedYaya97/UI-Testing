import {test, expect, Page} from "@playwright/test";
import PageManager from "../PageManager/PageManager"
import generalTestData from "../test-data/generalData.json"
import testData from "../test-data/Create new account.json"


test("Create new account", async({page})=>{
    const pageManager = new PageManager(page)

    await test.step("1) Open website", async()=>{
        await pageManager.commonFunctions.navigateToUrl(generalTestData.url)
        console.log("Website opened successfully!")
    })
    await test.step("2) Click on the sign in button", async()=>{
        await pageManager.headersPage.clickOnSignInLink()
    })
    await test.step("3) Click on create a new account", async()=>{
        await pageManager.loginPage.clickOnCreateNewAccount()
    })
    await test.step("4) Select social title", async()=>{
        await pageManager.registerationPage.selectTitle(testData.title)
    })
    await test.step("5) Enter first name", async()=>{
        await pageManager.registerationPage.enterFirstName(testData.title)
    })
    await test.step("6) Enter last name", async()=>{
        await pageManager.registerationPage.enterFirstName(testData.firstName)
    })
    await test.step("5) Enter last name", async()=>{
        await pageManager.registerationPage.enterLastName(testData.lastName)
    })
    await test.step("6) Enter email", async()=>{
        await pageManager.registerationPage.enterEmail(testData.email)
    })
    await test.step("7) Enter password", async()=>{
        await pageManager.registerationPage.enterPassword(testData.password)
    })
    await test.step("8) Enter birthdate", async()=>{
        await pageManager.registerationPage.enterBirthDate(testData.birthDate)
    })
    await test.step("9) Check box agree to terms", async()=>{
        await pageManager.registerationPage.agreeToTerms()
    })
    await test.step("10) Click on save button", async()=>{
        await pageManager.registerationPage.clickOnSaveBtn()
    })
})
