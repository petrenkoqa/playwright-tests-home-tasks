// @ts-check
const { test, expect } = require('@playwright/test');

test('[UI Tests] - 02_Verify Inventory Items', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'swag_labs_auth.json' });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.waitForSelector('body');
  
  //check inventory-items count inside inventory_container
  const inventoryItem = page.locator('[data-test="inventory-item"]');
  await expect(inventoryItem).toHaveCount(6);


  console.log("Test [UI Tests] - 02_Verify Inventory Items is passed.");
  console.log("Inventory page contains exactly 6 items");

});


