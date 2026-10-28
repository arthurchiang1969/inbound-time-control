import test from 'node:test';
import assert from 'node:assert/strict';
import { dueNotificationLevels } from '../src/notification-schedule.mjs';

test('dueNotificationLevels assigns escalation and email after 8.5 hours', () => {
  assert.deepEqual(dueNotificationLevels(360), [{ hours: 6, recipients: ['warehouse'] }]);
  assert.equal(dueNotificationLevels(510).at(-1).email, true);
});
