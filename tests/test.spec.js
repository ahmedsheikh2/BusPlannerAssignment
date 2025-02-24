const { test, expect } = require('@playwright/test');
const data = require('../dataFiles/data.json');
const HomePage = require('../pages/HomePage');
const baseURL = "https://www.saucedemo.com";

let page;
let homePage;
let context

test.describe('Sanity tests', () => {

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    await page.goto(baseURL);
    await expect(page).toHaveURL(baseURL)
    await homePage.login(data.User.userName, data.User.password)
    await expect(page).toHaveURL(`${baseURL}/inventory.html`)

  });


  test('it should add product to cart and verify button change', async () => {

    const productName = await homePage.getProductName();
    const productPrice = await homePage.getProductPrice();

    // Adding item to cart
    await homePage.addToCart();

    // Verify button text changes to "Remove"
    const buttonText = await homePage.getButtonText();
    expect(buttonText).toBe('Remove');

    // Verify Item appears correctly
    await homePage.goToCart()
    expect(await homePage.cartItemName.textContent()).toEqual(productName)

    // Perform Checkout
    await homePage.performCheckout(data.checkoutInfo.firstName, data.checkoutInfo.lastName, data.checkoutInfo.zipCode)
    await page.waitForTimeout(2000);
    expect(await homePage.cartItemName.textContent()).toEqual(productName)
    expect(await homePage.checkoutPrice.textContent()).toEqual(productPrice)

    await homePage.finishButton.click()

    //  Confirm order completion message
    expect(await page.locator('.complete-header')).toHaveText(data.checkoutInfo.completionMessage);
    await homePage.backToProducts.click()

  });


  test('it should verify error message for blank fields', async () => {

    // Adding item to cart
    await homePage.addToCart();
    await homePage.goToCart()

    // Perform Checkout
    await homePage.checkout.click()
    await homePage.continueButton.click()
    await page.waitForTimeout(2000);
    expect(await homePage.errorMessage).toContainText('Error');

  });
});

