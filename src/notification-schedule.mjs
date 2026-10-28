const levels = [[6, ['warehouse']], [7, ['warehouse', 'production']], [7.5, ['warehouse', 'production', 'plant']], [8, ['warehouse', 'production', 'plant']]];

export function dueNotificationLevels(elapsedMinutes) {
  const hours = elapsedMinutes / 60;
  const due = levels.filter(([level]) => hours >= level).map(([level, recipients]) => ({ hours: level, recipients }));
  for (let level = 8.5; hours >= level; level += 0.5) due.push({ hours: level, recipients: ['warehouse', 'production', 'plant'], email: true });
  return due;
}
