import { test } from '@playwright/test';

const data = [
  {
    title: "Latest beach news",
    place: "Philipines",
    id: "en-beach-philipines"
  },
  {
    title: "Dernières nouvelles de la plage",
    place: "Philipines",
    id: "fr-beach-philipines"
  },
  {
    title: "Another banner",
    place: "Moon",
    id: "en-other-moon"
  }
]

data.map(async ({place, title, id}) => {
test(id, async ({ page }) => {
    const url = new URL("http://localhost:3000");
    url.searchParams.set("title", title);
    url.searchParams.set("place", place);
    await page.goto(url.toString());
    await page.locator('.screenshot-wrapper').screenshot({ path: `__generated__/${id}.jpg`, quality: 100 });
  })
})