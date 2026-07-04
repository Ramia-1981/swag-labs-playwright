export class CheckoutCompletePage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.completeHeader = page.locator('[data-test="complete-header"]')
    this.completeText = page.locator('[data-test="complete-text"]')
    this.backHomeButton = page.locator('[data-test="back-to-products"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async getCompleteHeader() {
    return await this.completeHeader.innerText()
  }

  async getCompleteText() {
    return await this.completeText.innerText()
  }

  async clickBackHome() {
    await this.backHomeButton.click()
  }
}