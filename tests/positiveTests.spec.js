import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { USERS, URL } from '../data/testData.js'


test.describe('Positive Data Driven Tests - Swag Labs', () => {
  test.setTimeout(70000)

  test.beforeEach(async ({ page }) => {
    await page.goto(URL.base)
  })
  const validUsers = [
    USERS.standard_user,
    USERS.problem_user,
    USERS.performance_glitch_user,
    USERS.error_user,
    USERS.visual_user,
  ]

  validUsers.forEach((user) => {
    test(`Positive data driven login - ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page)
      const inventoryPage = new InventoryPage(page)

      await loginPage.login(user.username, user.password)

      await expect(page).toHaveURL(URL.inventory)
      await expect(inventoryPage.pageTitle).toHaveText('Products')
      await expect(inventoryPage.inventoryItems).toHaveCount(6)
    })
  })

  test('Positive add product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

    await loginPage.login(
      USERS.standard_user.username,
      USERS.standard_user.password
    )

    await expect(page).toHaveURL(URL.inventory)
    await inventoryPage.addItemByIndex(0)

    await expect(inventoryPage.cartBadge).toHaveText('1')
  })
})