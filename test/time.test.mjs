import test from 'node:test';
import assert from 'node:assert/strict';
import { elapsedMinutes } from '../src/time.mjs';

test('elapsedMinutes uses server timestamps across an eight-hour boundary', () => {
  assert.equal(elapsedMinutes(new Date('2026-10-28T00:00:00.000Z'), new Date('2026-10-28T08:00:00.000Z')), 480);
});
