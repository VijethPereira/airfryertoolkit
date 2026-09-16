/**
 * Step arrays for the /chart printable tables. Single source of truth —
 * imported by ChartBody.astro and by tests/e2e/chart.spec.ts so a change
 * here can't silently desync the page from the test that guards it.
 */

/** Oven °F values shown in the temperature table, 250–475°F in 25°F steps. */
export const TEMP_STEPS = [250, 275, 300, 325, 350, 375, 400, 425, 450, 475];

/** Oven minutes shown in the time table. */
export const TIME_STEPS = [10, 15, 20, 25, 30, 35, 40, 45, 60];
