import indexTemplate from './index.handlebars';
import './styles/index.scss';
import app from './app.js';
import { projects, otherProjects } from './config';

const divElement = document.createElement('div');
divElement.innerHTML = indexTemplate({
    projects
});
document.body.appendChild(divElement);

app();

// fancy console log
console.log('%c Alex' + '%candru' + '%c Cambose', 'background: #222; color: #bada55', 'color: red', 'color: black');