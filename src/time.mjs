export function elapsedMinutes(startedAt, completedAt) {
  return Math.round((completedAt.getTime() - startedAt.getTime()) / 60000);
}
