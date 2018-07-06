import { randomFromInterval } from './utils.js';
import { header } from '../config';

export default () => {
    const backgroundContainer = document.querySelector(header.shapesContainer);
    const title = document.querySelector('.header .title');

    const wh = window.innerHeight;
    const ww = window.innerWidth;

    const types = [
        {
            type: 'polygon',
            points: '5,95 50,5 95,95',
        },
        {
            type: 'polygon',
            points: '5,5 5,95 95,95 95,5',
        },
        {
            type: 'circle',
            cx: 50,
            cy: 50,
            r: 46,
        },
        {
            type: 'path',
            d: 'M 5 50 Q 25 75 50 50 Q 75 25 95 50',
        }
    ];

    let elements = [];
    for (let i = 1; i <= header.shapesCount; i++) {
        const elementType = types[randomFromInterval(0, types.length - 1)];
        let posX = randomFromInterval(10, ww);
        let posY = randomFromInterval(10, wh);

        const titleRect = title.getBoundingClientRect();
        while (posX > titleRect.x - 100 && posX < titleRect.x + titleRect.width + 100
            && posY > titleRect.y - 100 && posY < titleRect.y + titleRect.height + 100) {
            posX = randomFromInterval(10, ww - 100);
            posY = randomFromInterval(10, wh - 100);
        }

        const rotation = randomFromInterval(0, 360);

        const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // create <svg/> container for the shape
        svgContainer.setAttribute('viewBox', `0 0 100 100`);
        svgContainer.setAttribute('height', header.shapeSize);
        svgContainer.setAttribute('width', header.shapeSize);
        svgContainer.style.transform = `rotate(${rotation}deg)`; // set random rotation from the beginning
        svgContainer.style.position = 'absolute';
        svgContainer.style.top = posY;
        svgContainer.style.left = posX;

        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', elementType.type); // create the shape
        Object.keys(elementType)
            .filter(e => e !== 'type')
            .forEach(e => svgElement.setAttribute(e, elementType[e]));
        svgElement.style.stroke = header.shapesColor[randomFromInterval(0, header.shapesColor.length - 1)];
        svgElement.style.strokeWidth = header.shapeStrokeWidth;
        svgElement.style.fill = 'transparent';

        if (elementType.type !== 'path') {
            svgContainer.addEventListener('mouseover', () => svgElement.style.fill = svgElement.style.stroke);
            svgContainer.addEventListener('mouseleave', () => svgElement.style.fill = 'transparent');
        }
        svgContainer.appendChild(svgElement); // add svg shape to <svg/> container
        backgroundContainer.appendChild(svgContainer); // add <svg/> to the container div

        elements.push({
            element: svgContainer,
            rotation,
            posX,
            posY,
            divider: randomFromInterval(9, 10),
        });
    }

    const calcShapesPosition = e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        for (let i = 0; i < elements.length; i++) {
            const {element, divider, rotation} = elements[i];
            element.style.transform = `rotate(${rotation}deg) translate(${(mouseX - ww / 2) / divider}px, ${(mouseY - wh / 2) / divider}px)`;
        }
    };
    document.addEventListener('mousemove', calcShapesPosition);


    const mouseIcon = document.getElementById('mouse-icon');
    mouseIcon.addEventListener('click', () => {
        window.scrollTo({
            "behavior": "smooth",
            "top": wh
        });
    })
};