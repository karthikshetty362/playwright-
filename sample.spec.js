const { test, expect } = require('@playwright/test');

test("My First Test", async function({ page }) {
    expect(12).toBe(12)
})



test.skip("My Third Test", async function({ page }) {
    expect(2.0).toBe(2.0)
})
test("My Fourth Test", async function({ page }) {
    expect(Guru).toBe(Gurukiran)
})
test("My Fifth Test", async function({ page }) {
    expect(Guru).toBe(Gk)
})
test("My Sixth Test", async function({ page }) {
    expect(Gurukiran).tocontain(Gurukiran)
    expect(truthy).toBeTruthy()
})