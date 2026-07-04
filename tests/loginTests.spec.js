import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { USERS, URL, ERROR_MESSAGES } from '../data/testData.js'
import { NEGATIVE_SCENARIOS } from '../data/negativeScenarios.js'

test.describe('Login Tests - Swag Labs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL.base)
  })

  const positiveUsers = [
    USERS.standard_user,
    USERS.problem_user,
    USERS.performance_glitch_user,
    USERS.error_user,
    USERS.visual_user,
  ]

  positiveUsers.forEach((user) => {
    test(`Positive login - ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page)
      const inventoryPage = new InventoryPage(page)

      await loginPage.login(user.username, user.password)

      await expect(page).toHaveURL(URL.inventory)
      await expect(inventoryPage.pageTitle).toHaveText('Products')
    })
  })

  test('Negative login - locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.login(
      USERS.locked_out_user.username,
      USERS.locked_out_user.password
    )

    await expect(loginPage.errorMessage).toHaveText(ERROR_MESSAGES.lockedOut)
  })

  NEGATIVE_SCENARIOS.forEach((scenario) => {
    test(`Negative login - ${scenario.testName}`, async ({ page }) => {
      const loginPage = new LoginPage(page)

      await loginPage.login(scenario.username, scenario.password)

      await expect(loginPage.errorMessage).toHaveText(scenario.expectedError)
    })
  })
})