import { test, expect } from '@playwright/test';

test('ผู้ใช้งาน โพส Facebook คำว่า สวัสดี Playwright!', async ({ page }) => {
  //  Step 1 :: go to web facebook.
  await page.goto('https://www.facebook.com/');

  //  Step 2 :: login web facebook.
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('');
  await page.locator('#passContainer').click();
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('');
  await page.getByTestId('royal_login_button').click();

  //  Step 3 ::  Facebook post with the word สวัสดี Playwright! .
  await page.getByRole('button', { name: 'โปรไฟล์ของคุณ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'Bumeizwe Jamjung' }).click();
  await page.getByRole('button', { name: 'คุณกำลังคิดอะไรอยู่' }).click();
  await page.getByLabel('คุณกำลังคิดอะไรอยู่').fill('สวัสดี Playwright!');
  await page.getByLabel('โพสต์', { exact: true }).click();

});
