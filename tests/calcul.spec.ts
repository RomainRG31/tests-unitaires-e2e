import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Plus" }).click();
  await page.getByRole("button", { name: "1" }).click();
  await page.getByText("=2").click();
});
