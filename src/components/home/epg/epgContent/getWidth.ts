export const getEpgItemWidth = (minutes: number, pxByHour: number) =>
  `${(minutes * pxByHour) / 60}px`;
