import test from 'node:test';
import assert from 'node:assert/strict';
import { renderApp } from '../src/ui.mjs';

test('renderApp presents vertical login and role choices', () => {
  const page = renderApp();
  assert.match(page, /國森 入庫時間控制/);
  assert.match(page, /user1/);
  assert.match(page, /user2/);
  assert.match(page, /admin/);
});
