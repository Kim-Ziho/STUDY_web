const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto("https://news.daum.net/digital#1");
  // evaluate 를 이용해서 browser에서 쓸수있게 한다.
  const data = await page.evaluate(() => {
    const itnewsLists = document.querySelectorAll(".list_newsmajor a");
    const titles = Array.from(itnewsLists).map((li) => li.textContent);
    return titles;
  });

  console.log(data);

  await browser.close();
};

main();
