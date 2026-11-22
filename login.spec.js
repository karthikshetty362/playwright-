const{test,expect}=require("@playwright/test")

test("valid login",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/);
})

