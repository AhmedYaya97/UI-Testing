import {test, expect, Page} from "@playwright/test";
import PageManager from "../PageManager/PageManager"
import generalTestData from "../test-data/generalData.json"
import testData from "../test-data/Login.json"

test("Login with data", async({page})=>{
    const pageManager = new PageManager(page)
    await test.step("1) Open website", async()=>{
        await pageManager.commonFunctions.navigateToUrl(generalTestData.url)
    })
    await test.step("2) Navigate to sign in page", async()=>{
        await pageManager.headersPage.clickOnSignInLink()
    })
    await test.step("3) Enter email", async()=>{
        await pageManager.loginPage.enterEmail(testData.email)
    })
    await test.step("4) Enter password", async()=>{
        await pageManager.loginPage.enterPassword(testData.password)
    })
    await test.step('5) Click on sign in button', async()=>{
        await pageManager.loginPage.clickOnSignInButton()
    })
    await test.step("6) Verify first/last name as expected", async()=>{
        await pageManager.headersPage.VerifyLoggedInUser(testData.firstName, testData.lastName)
    })
    await test.step("7) Click on sign out button", async()=>{
        await pageManager.headersPage.clickOnSignOutButton()
    })
})