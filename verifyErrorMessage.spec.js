const { test, expect } = require('@playwright/test');
test("verifyErrorMessage", async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("input[name='username']").fill("Admin");
await page.locator("input[name='password']").fill("admiasdas");
await page.locator("//button[@type='submit']").click();
const ErrorMessage = await page
.locator("//p[contains(@class,'alert-content-text')]")
.textContent();
console.log("Error Message is: " + ErrorMessage);
expect(ErrorMessage.includes("Invalid")).toBeTruthy();

});