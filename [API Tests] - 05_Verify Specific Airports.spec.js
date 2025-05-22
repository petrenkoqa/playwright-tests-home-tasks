const { test, expect } = require('@playwright/test');

test('[API Tests] - 05_Verify Specific Airports', async ({ request }) => {
  const response = await request.get('https://airportgap.com/api/airports');

  // checking status
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  const airports = responseBody.data;

  // Get the names of the airports
  const airportNames = airports.map(airport => airport.attributes.name);

  // expected airports
  const expectedAirports = [
    'Akureyri Airport',
    'St. Anthony Airport',
    'CFB Bagotville'
  ];

  // checked that all expected airports are present
  expectedAirports.forEach(name => {
    expect(airportNames).toContain(name);
  });

  console.log("Test [API Tests] - 05_Verify Specific Airports is passed.");
  console.log("Specific airports are present in the API response: Akureyri Airport - St. Anthony Airport - CFB Bagotville");

});