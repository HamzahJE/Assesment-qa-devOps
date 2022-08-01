
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Choices show up when draw button is clicked', async ()=> {
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choices= await driver.findElement(By.id('choices'))
    const displayed= await choices.isDisplayed()
    expect(displayed).toBeTruthy()
})
test( 'Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async ()=> {
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBeTruthy()
})