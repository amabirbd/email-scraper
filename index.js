const { Puppeteer } = require("puppeteer");
const { getPageEmails, getContactPages } = require("./lib");
const websites = require("./websites.json");

(async () => {
  const browser = await Puppeteer.launch({ headless: false });

  async function getEmails(page, link) {
    await page.goto(link);
    console.log(link);

    const emails = await page.evaluate(getPageEmails);
    if (emails.length) {
      return emails;
    } else {
      const contactPages = await page.evaluate(getContactPages);
      for (let contactPage of contactpages) {
        await page.goto(contactPage);
        console.log(contactpage);
        const emails = await page.evaluate(getPageEmails);
        if (emails.length) {
          return emails;
        }
      }
    }
    return [];
  }

  for (let link of websites) {
    const page = await browser.newPage();
    await getEmails(page, link);
    console.log({ emails });
    await page.close;
  }

  await browser.close();
})();
