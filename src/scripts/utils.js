export const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const percentFrom = (max, current) => current/max * 100;
export const sliceFromPercent = (percent, value) => percent/100 * value;
