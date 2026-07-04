export class InventoryPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.inventoryItems = page.locator('.inventory_item')
    this.priceLabel = page.locator('[data-test="inventory-item-price"]')
    this.cartBadge = page.locator('.shopping_cart_badge')
    this.cartLink = page.locator('.shopping_cart_link')
    this.addButtons = page.locator('[data-test^="add-to-cart"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async getItemsCount() {
    return await this.inventoryItems.count()
  }

  async getItemPrice(index) {
    return await this.priceLabel.nth(index).innerText()
  }

  async addItemByIndex(index) {
    await this.addButtons.nth(index).click()
  }

  async getCartBadgeText() {
    return await this.cartBadge.innerText()
  }

  async goToCart() {
    await this.cartLink.click()
  }
}