describe('E2E Google', () => {
    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should be titled "Google"', async () => {
        await expect(page.title()).resolves.toMatch('Google');
    });
});


// What is the difference between 'it' and 'test' in Jest? https://stackoverflow.com/questions/45778192/what-is-the-difference-between-it-and-test-in-jest