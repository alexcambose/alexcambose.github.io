export const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const inViewport = element => Math.abs(element.getBoundingClientRect().y) < element.offsetHeight;