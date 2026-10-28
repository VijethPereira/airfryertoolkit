// Regenerates tests/fixtures/no-model-baseline.json: every page-level number the engine produces today
// (preset values, round trips and size rows; temperature-page values and rows; chart grid; raw engine grid).
// Committed once before the optional maxF input landed; engine-baseline.spec.ts requires it to stay identical.
import { writeFileSync } from 'node:fs';
import { PRESETS } from '../../src/data/presets';
import { presetValues, presetRoundTrip, presetSizeRows, presetOven, presetFan } from '../../src/lib/presets';
import { TEMP_LANDINGS, tempLandingValues, tempLandingRows } from '../../src/lib/temp-landings';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import {
  FOODS, FROZEN_FOODS, computeAirFryerSetting, computeAirFryerSettingFromConvection, computeAirFryerSettingFromFrozen,
  type FoodKey, type FrozenFoodKey,
} from '../../src/lib/converter';

const styles = ['basket', 'oven'] as const;
export function buildBaseline() {
const out = {
  presets: Object.fromEntries(PRESETS.map((p) => [p.slug, {
    values: presetValues(p, 'en'), basket: presetRoundTrip(p, 'basket'), oven: presetRoundTrip(p, 'oven'),
    sizes: presetSizeRows(p), ovenEq: presetOven(p), fanEq: presetFan(p),
  }])),
  temps: Object.fromEntries(TEMP_LANDINGS.map((l) => [l.tempF, { values: tempLandingValues(l, 'en'), rows: tempLandingRows(l.tempF) }])),
  grid: [] as unknown[],
};
for (const food of Object.keys(FOODS) as FoodKey[]) for (const style of styles) for (const t of [...TEMP_STEPS, 500, 550]) for (const m of [10, 25, 45]) {
  const input = { ovenTemp: t, unit: 'F' as const, ovenMinutes: m, food, style };
  out.grid.push([food, style, t, m, computeAirFryerSetting(input), computeAirFryerSettingFromConvection(input)]);
}
for (const food of Object.keys(FROZEN_FOODS) as FrozenFoodKey[]) for (const style of styles) for (const t of TEMP_STEPS) for (const m of [10, 25, 45]) {
  out.grid.push([food, style, t, m, computeAirFryerSettingFromFrozen({ ovenTemp: t, unit: 'F', ovenMinutes: m, food, pack: 'conventional', style })]);
}
return out;
}

// Run directly (npx tsx tests/fixtures/make-baseline.ts) to rewrite the fixture.
if (process.argv[1]?.endsWith('make-baseline.ts')) {
  writeFileSync(new URL('./no-model-baseline.json', import.meta.url), JSON.stringify(buildBaseline()));
}
