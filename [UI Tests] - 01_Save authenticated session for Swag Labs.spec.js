const { test } = require('@playwright/test');


test('[UI Tests] - 01_Save authenticated session for Swag Labs', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');
  await page.waitForSelector('body');

  //fill in username
  await page.fill('//*[@id="user-name"]', 'standard_user'); 

  //fill in password
  await page.fill('//*[@id="password"]', 'secret_sauce'); 

  // click on login button
  await page.click('//*[@id="login-button"]'); 

  // wait for redirect to inventory page
  await page.waitForURL('**/inventory.html');

  await context.storageState({ path: 'swag_labs_auth.json' });

  console.log("Test [UI Tests] - 01_Save authenticated session for Swag Labs is passed");
});
