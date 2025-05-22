const { test, expect } = require('@playwright/test');

test('[API Tests] - 06_Verify Distance Between Airports', async ({ request }) => {
  const response = await request.post('https://airportgap.com/api/airports/distance', {
    data: {
      from: 'KIX',
      to: 'NRT'
    }
  });

  // checking status
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // checking distance
  const distance = responseBody.data.attributes.kilometers;

  // check that distance is greater than 400
  expect(distance).toBeGreaterThan(400);

  console.log("Test [API Tests] - 06_Verify Distance Between Airports is passed.");
  console.log("Distance Between KIX and NRT is " + distance + " kilometers.");

});