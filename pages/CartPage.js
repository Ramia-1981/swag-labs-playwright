export class CartPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.cartItems = page.locator('.cart_item')
    this.checkoutButton = page.locator('[data-test="checkout"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async getItemsCount() {
    return await this.cartItems.count()
  }

  async clickCheckout() {
    await this.checkoutButton.click()
  }
}