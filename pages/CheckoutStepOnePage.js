export class CheckoutStepOnePage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.firstNameInput = page.locator('[data-test="firstName"]')
    this.lastNameInput = page.locator('[data-test="lastName"]')
    this.postalCodeInput = page.locator('[data-test="postalCode"]')
    this.continueButton = page.locator('[data-test="continue"]')
    this.cancelButton = page.locator('[data-test="cancel"]')
    this.errorMessage = page.locator('[data-test="error"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async fillCustomerFields(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName)
    await this.lastNameInput.fill(lastName)
    await this.postalCodeInput.fill(postalCode)
  }

  async clickContinue() {
    await this.continueButton.click()
  }

  async clickCancel() {
    await this.cancelButton.click()
  }

  async getErrorMessage() {
    return await this.errorMessage.innerText()
  }
}