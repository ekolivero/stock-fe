describe("Test Tickers Page", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
    await page.setViewport({ width: 1920, height: 1080 });
  });

  it('Should correctly render the page without errors', async() => {
    await expect(page.title()).resolves.toMatch('Stock FE')
  })

  it('Should render not found message where there are no tickers', async() => {
    await page.waitForSelector('input')
    await page.focus('input')

    await page.keyboard.type("asdgfsfsfds", { delay: 20 })

    await page.waitForSelector('.container__master__empty')
    let notFound = await page.$('.container__master__empty')
    let notFoundText = await page.evaluate(notFound => notFound.textContent, notFound)

    expect(notFoundText).toBe(' There are no tickers for your search :( ')

  })
});
