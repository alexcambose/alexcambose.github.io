import indexTemplate from './index.handlebars';
import './styles/index.scss';
import './app.js';

const divElement = document.createElement('div');
divElement.innerHTML = indexTemplate({});
console.log(indexTemplate);
document.body.appendChild(divElement);
