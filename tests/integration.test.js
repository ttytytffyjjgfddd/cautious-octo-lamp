const { Builder, By, until } = require('selenium-webdriver');

describe('Integration Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Should display categories when location button is clicked', async () => {

        await driver.get('http://127.0.0.1:5500/index.html');

        const locationButton = await driver.findElement(By.css('.location-selector button'));
        await locationButton.click();

        const categories = await driver.findElement(By.css('#location1-categories'));
        const isDisplayed = await categories.isDisplayed();
        expect(isDisplayed).toBe(true);
    });
});
