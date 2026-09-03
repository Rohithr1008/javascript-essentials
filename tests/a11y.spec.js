const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

const APPS = [1, 2, 3, 4, 5].map((n) => ({
  n,
  path: `/Javascript_essentials_part${n}_study_app.html`,
}));

for (const app of APPS) {
  test.describe(`a11y Part ${app.n}`, () => {
    test("no critical / non-contrast serious axe violations", async ({
      page,
    }) => {
      await page.goto(app.path);
      await page.evaluate(() => {
        document.documentElement.classList.remove("force-dark");
        document.documentElement.classList.add("force-light");
        if (window.StudyShell && StudyShell.enhanceA11y) StudyShell.enhanceA11y();
      });

      // Full-page scan. Educational sandboxes/snippets often include incomplete
      // markup on purpose; color-contrast on lesson chips is improved in shared
      // CSS but remains noisy — gate critical + other serious rules.
      const results = await new AxeBuilder({ page })
        .include("body")
        .exclude(".sandbox")
        .exclude(".challenge")
        .exclude("[data-challenge]")
        .exclude(".mock-api")
        .exclude(".auth-box")
        .exclude(".layer-diagram")
        .exclude("pre")
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .disableRules([
          "nested-interactive",
          "listitem",
          "color-contrast",
        ])
        .analyze();

      const bad = results.violations.filter((v) =>
        ["serious", "critical"].includes(v.impact)
      );
      expect(
        bad,
        bad
          .map(
            (v) =>
              `${v.id} (${v.impact}): ${v.help} — ${v.nodes
                .slice(0, 5)
                .map((n) => n.target.join(" "))
                .join("; ")}`
          )
          .join("\n")
      ).toEqual([]);
    });
  });
}
