import indexTemplate from './index.handlebars';

const divElement = document.createElement('div');
divElement.innerHTML = indexTemplate({});
console.log(indexTemplate);
document.body.appendChild(divElement);
