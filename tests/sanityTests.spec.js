import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { CartPage } from '../pages/CartPage.js'
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage.js'
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage.js'
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage.js'
import { USERS, URL, CUSTOMER_INFO } from '../data/testData.js'

test.describe('Sanity Tests - Swag Labs', () => {
  test('Full purchase flow with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    await page.goto(URL.base)

    await loginPage.login(
      USERS.standard_user.username,
      USERS.standard_user.password
    )

    await expect(page).toHaveURL(URL.inventory)
    await expect(inventoryPage.pageTitle).toHaveText('Products')

    await inventoryPage.addItemByIndex(0)
    await inventoryPage.addItemByIndex(1)

    await expect(inventoryPage.cartBadge).toHaveText('2')

    await inventoryPage.goToCart()

    await expect(page).toHaveURL(URL.cart)
    await expect(cartPage.pageTitle).toHaveText('Your Cart')
    await expect(cartPage.cartItems).toHaveCount(2)

    await cartPage.clickCheckout()

    await expect(page).toHaveURL(URL.checkoutStepOne)
    await expect(checkoutStepOnePage.pageTitle).toHaveText('Checkout: Your Information')

    await checkoutStepOnePage.fillCustomerFields(
      CUSTOMER_INFO.firstName,
      CUSTOMER_INFO.lastName,
      CUSTOMER_INFO.postalCode
    )

    await checkoutStepOnePage.clickContinue()

    await expect(page).toHaveURL(URL.checkoutStepTwo)
    await expect(checkoutStepTwoPage.pageTitle).toHaveText('Checkout: Overview')
    await expect(checkoutStepTwoPage.cartItems).toHaveCount(2)

    await checkoutStepTwoPage.clickFinish()

    await expect(page).toHaveURL(URL.checkoutComplete)
    await expect(checkoutCompletePage.pageTitle).toHaveText('Checkout: Complete!')
    await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!')
  })
})