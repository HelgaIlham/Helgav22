const puppeter = require('puppeteer');
const cheerio = require('cheerio');


async function nowm(url) {
	try {
		const browsers = await puppeter.launch();
		const page = await browsers.newPage();
		await page.goto('https://musicallydown.com/');
		await page.type('#link_url', `${url}`)
		await page.click('#submit-form > div > div:nth-child(2) > button');
		await page.waitForTimeout(5000)
		const bodyHandler = await page.$('body');
		const html = await page.evaluate(body => body.innerHTML, bodyHandler);
		await bodyHandler.dispose();
		const $ = cheerio.load(html);
		const video = $('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(4)').attr('href');
		const video2 = $('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(6)').attr('href');
		const directLink = $('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(8)').attr('href');
		let result = {
		video: video,
		video2: video2,
		dirlink: directLink
	}
	await browsers.close();
	return result
		} catch (err) {
			await browsers.close();
			return err
		}
}

module.exports.nowm = nowm