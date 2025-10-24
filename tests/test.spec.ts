import {test} from '@playwright/test';

test('playwright boilerplate test', async ({page}) => {
    await page.goto('https://playwright.dev');
});
