import indexTemplate from './index.handlebars';
import './styles/index.scss';
import app from './app.js';
import { projects } from './config';

const divElement = document.createElement('div');
divElement.innerHTML = indexTemplate({
    projects
});
document.body.appendChild(divElement);

app();