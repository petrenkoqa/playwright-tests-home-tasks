const { test, expect } = require('@playwright/test');

test('[API Tests] - 04_Verify Airport Count', async ({ request }) => {
  const response = await request.get('https://airportgap.com/api/airports');

  // checking status
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // Check that airports array is present and contais 30 elements 
  const airportsResponse = responseBody.data;
  expect(Array.isArray(airportsResponse)).toBe(true);
  expect(airportsResponse.length).toBe(30);

  console.log("Test [API Tests] - 04_Verify Airport Count is passed.");
  console.log(" Response contains exactly 30 airports.");
});