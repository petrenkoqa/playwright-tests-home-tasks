// @ts-check
const { test, expect } = require('@playwright/test');

test('[UI Tests] - 03_Add item to the Cart', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'swag_labs_auth.json' });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.waitForSelector('body');

  // click on the "Add to cart" of the first item
  const firstAddToCartButton = page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]');
  await firstAddToCartButton.click();
  
  // check that cart badge correctly displays the number 1.
  const cartBadge = page.locator('//*[@id="shopping_cart_container"]/a');
  await expect(cartBadge).toHaveText('1');

  console.log("[UI Tests] - 03_Add item to the Cart.");
  console.log("Cart badge correctly displays the number 1");

 // remove added item from the cart
 const removeFromCartButton = page.locator('//*[@id="remove-sauce-labs-backpack"]');
 await removeFromCartButton.click();
  
});


