/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
*/

const path = require("path");
const { JSDOM } = require("jsdom");
const pluralize = require("pluralize");
const quotes = require("./quotes.js");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // do this so students can use element.innerText which jsdom does not implement
  // TODO: Work out a nice way to share this shim across projects and weeks.
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

afterEach(() => {
  page = null;
});

test("should load a quote on first load", () => {
  const quote = page.window.document.querySelector("#quote");
  const author = page.window.document.querySelector("#author");

  expect(quote).toBeInTheDocument();
  assertAuthorCorrect(quote, author);
});

test("pressing button should change quote", () => {
  // Random chance means we may some times get repeats.
  // Make sure we never show the same quote consecutively twice.
  let lastQuote = page.window.document.querySelector("#quote").textContent;

  for (let i = 0; i < 100; i++) {
    page.window.document.querySelector("#new-quote").click();
    const quote = page.window.document.querySelector("#quote");
    const author = page.window.document.querySelector("#author");
    assertAuthorCorrect(quote, author);
    if (lastQuote === quote.textContent) {
      throw new Error(`Clicking the button should always change the quote, but after pressing it ${pluralize("time", i + 1, true)}, the same quote was show twice in a row.`);
    }
    lastQuote = quote.textContent;
  }
})

function assertAuthorCorrect(quoteElement, authorElement) {
  const quoteText = quoteElement.textContent;

  let foundQuoteObject = quotes.find(q => q.quote === quoteText);
  if (foundQuoteObject === undefined) {
    throw new Error(`Quote in the page was not found in the array of quotes we supplied you with. Quote in the page was: ${quoteText}`);
  }
  expect(authorElement).toHaveTextContent(foundQuoteObject.author);
}
