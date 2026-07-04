export class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.cartItems = page.locator('.cart_item')
    this.paymentInfoValue = page.locator('[data-test="payment-info-value"]')
    this.shippingInfoValue = page.locator('[data-test="shipping-info-value"]')
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]')
    this.taxLabel = page.locator('[data-test="tax-label"]')
    this.totalLabel = page.locator('[data-test="total-label"]')
    this.cancelButton = page.locator('[data-test="cancel"]')
    this.finishButton = page.locator('[data-test="finish"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async getItemsCount() {
    return await this.cartItems.count()
  }

  async getPaymentInfo() {
    return await this.paymentInfoValue.innerText()
  }

  async getShippingInfo() {
    return await this.shippingInfoValue.innerText()
  }

  async getSubtotal() {
    return await this.subtotalLabel.innerText()
  }

  async getTax() {
    return await this.taxLabel.innerText()
  }

  async getTotal() {
    return await this.totalLabel.innerText()
  }

  async clickFinish() {
    await this.finishButton.click()
  }

  async clickCancel() {
    await this.cancelButton.click()
  }
}