const express = require('express');

const app = express();
const port = 3000;

describe('E2E this page', () => {
    beforeAll(async () => {
        // Open web server
        await app.listen(port);

        // Serve static files
        await app.use(express.static('.'));

        // Open page
        await page.goto(`http://localhost:${port}`);
    });

    it('should be titled "Exemple Suma"', async () => {
        await expect(page.title()).resolves.toMatch('Exemple Suma');
    });

    afterAll(async () => {
        await app.close();

    })
});
