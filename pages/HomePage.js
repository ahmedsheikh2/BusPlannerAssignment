
class HomePage {
    
    constructor(page) {
      this.page = page;
      this.userName               = page.locator("#user-name");
      this.password               = page.locator("#password");
      this.loginButton            = page.locator("#login-button");
      this.firstProduct           = page.locator('.inventory_item:first-child');
      this.productName            = page.locator('.inventory_item:first-child .inventory_item_name');
      this.productPrice           = page.locator('.inventory_item:first-child .inventory_item_price');
      this.addToCartButton        = page.locator('.inventory_item:first-child .btn_inventory');
      this.goToCartButton         = page.locator('.shopping_cart_link');
      this.cartItemName           = page.locator('.inventory_item_name');
      this.checkoutPrice           = page.locator('.inventory_item_price');
      this.checkout               = page.locator('#checkout');
      this.firstNameInput         = page.locator('#first-name');
      this.lastNameInput          = page.locator('#last-name');
      this.postalCodeInput        = page.locator('#postal-code');
      this.continueButton         = page.locator('#continue');
      this.finishButton           = page.locator('#finish');
      this.errorMessage           = page.locator('.error-message-container error');
      this.backToProducts           = page.locator('#back-to-products');
    }

    async login(username, password) {
      await this.userName.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    }

     async getProductName() {
    return await this.productName.textContent();
    }

    async getProductPrice() {
      return await this.productPrice.textContent();
    }

    async addToCart() {
    await this.addToCartButton.click();
    }

    async getButtonText() {
    return await this.addToCartButton.textContent();
    }

    async goToCart() {
    return await this.goToCartButton.click();
    }

    async performCheckout(firstName, lastName, zipCode) {
      await this.checkout.click();
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.postalCodeInput.fill(zipCode);
      await this.continueButton.click();
    }

   
    
  }
  
  module.exports = HomePage;
  