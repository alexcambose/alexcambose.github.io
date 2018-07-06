import indexTemplate from './index.handlebars';
import './styles/index.scss';
import app from './app.js';

const divElement = document.createElement('div');
divElement.innerHTML = indexTemplate({});
document.body.appendChild(divElement);

app();