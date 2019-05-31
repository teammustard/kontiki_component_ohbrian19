const sum = require('./sum.js')
const puppeteer = require('puppeteer');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Hello', () => {
    let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://52.15.160.112:3001/tours/1');
  })

  it('should be titled "kontiki"', async () => {
    await expect(page.title()).resolves.toMatch('kontiki');
  });
})