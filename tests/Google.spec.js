// // @ts-check
// const { test, expect } = require('@playwright/test');
// const { stat } = require('fs/promises');

// test('ลูกค้าทำการค้นหาคำว่ากินอะไรดี แล้วจะต้องเจอผลการค้นหาตาม Req', async ({ page }) => {
//   await page.goto('https://www.google.com/');

//   //type into search box.
//   const searchField = await page.locator('#APjFqb');
//   await searchField.fill ('กินอะไรดี');
//   await searchField.press('Enter');
  

//   // Expect a title "to contain" a substring.
//   await expect(page.locator('#result-stats')).toHaveText(/Playwright/);
// });
