import { randomFromInterval } from './utils.js';
import { header as headerConfig } from '../config';

export default () => {
    const backgroundContainer = document.querySelector(headerConfig.shapesContainer);
    const title = document.querySelector('.header .title');

    let elements = []; // contains an object with the shapes

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

    const createShape = (x = null, y = null, avoidTitle = true) => {
        const elementType = types[randomFromInterval(0, types.length - 1)];

        let posX = (!x ? randomFromInterval(10, ww) : x);
        let posY = (!y ? randomFromInterval(10, wh) : y);

        if(avoidTitle) {
            const titleRect = title.getBoundingClientRect();
            while (posX > titleRect.x - 100 && posX < titleRect.x + titleRect.width + 100
            && posY > titleRect.y - 100 && posY < titleRect.y + titleRect.height + 100) {
                posX = randomFromInterval(10, ww - 100);
                posY = randomFromInterval(10, wh - 100);
            }
        }


        const rotation = randomFromInterval(0, 360);

        const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // create <svg/> container for the shape
        svgContainer.setAttribute('viewBox', `0 0 100 100`);
        svgContainer.setAttribute('height', headerConfig.shapeSize);
        svgContainer.setAttribute('width', headerConfig.shapeSize);
        svgContainer.style.transform = `rotate(${rotation}deg)`; // set random rotation from the beginning
        svgContainer.style.position = 'absolute';
        svgContainer.style.top = posY + 'px';
        svgContainer.style.left = posX + 'px';
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', elementType.type); // create the shape
        Object.keys(elementType)
            .filter(e => e !== 'type')
            .forEach(e => svgElement.setAttribute(e, elementType[e]));
        svgElement.style.stroke = headerConfig.shapesColorLight[randomFromInterval(0, headerConfig.shapesColorLight.length - 1)];
        svgElement.style.strokeWidth = headerConfig.shapeStrokeWidth;
        svgElement.style.fill = 'transparent';
        svgElement.style.transition = 'fill .1s';

        if (elementType.type !== 'path') {
            svgContainer.addEventListener('mouseover', () => svgElement.style.fill = svgElement.style.stroke);
            svgContainer.addEventListener('mouseleave', () => svgElement.style.fill = 'transparent');
        }
        svgContainer.appendChild(svgElement); // add svg shape to <svg/> container
        backgroundContainer.appendChild(svgContainer); // add <svg/> to the container div
        elements.push({
            elementContainer: svgContainer,
            element: svgElement,
            rotation,
            posX,
            posY,
            divider: randomFromInterval(9, 10),
        });
    };

    for (let i = 1; i <= headerConfig.shapesCount; i++) {
        createShape();
    }
    let mouseX = null;
    let mouseY = null;
    const calcShapesPosition = e => {
        if(e.clientX) mouseX = e.clientX;
        if(e.clientY) mouseY = e.clientY;
        // console.log('mx', mouseX, 'my', mouseY, elements[0].posX, elements[0].posY);
        for (let i = 0; i < elements.length; i++) {
            let {elementContainer, divider, rotation, posX, posY} = elements[i];
            rotation += (rotation % 2 === 0 ? -window.scrollY : window.scrollY) / 4;
            elementContainer.style.transform = `rotate(${rotation}deg) translate(${(mouseX - ww / 2) / divider}px, ${(mouseY - wh / 2) / divider}px)`;
            const distance = Math.sqrt(parseInt(elementContainer.getBoundingClientRect().x + headerConfig.shapeSize/2 -mouseX)**2 + (elementContainer.getBoundingClientRect().y + headerConfig.shapeSize/2-mouseY)**2);
            // if(distance > 200)
                elementContainer.style.transform += `scale(${1-distance*.0005})`;
        }
    };
    document.addEventListener('mousemove', calcShapesPosition);
    document.addEventListener('scroll', calcShapesPosition);
    document.addEventListener('click', e => {
        createShape(event.clientX, event.clientY+window.scrollY, false);
        calcShapesPosition(e);
        check();
    });

    // Click event for mouse icon
    const mouseIcon = document.getElementById('mouse-icon');
    mouseIcon.addEventListener('click', () => {
        window.scrollTo({
            "behavior": "smooth",
            "top": wh
        });
    });

    //invert colors after user scrolled half of the viewport height
    let isDarkened = false;
    const check = () => {
        const header = document.querySelector('.header');
        if(window.scrollY > window.innerHeight/2) {
            if (!isDarkened) {
                header.classList.add('inverse');
                elements.forEach(({element}) => {
                    element.style.stroke = headerConfig.shapesColorDark[randomFromInterval(0, headerConfig.shapesColorDark.length - 1)]
                });
                isDarkened = true;
            }
        } else if(isDarkened) {
            isDarkened = false;
            elements.forEach(({element}) => {
                element.style.stroke = headerConfig.shapesColorLight[randomFromInterval(0, headerConfig.shapesColorLight.length - 1)]
            });
            header.classList.remove('inverse');
        }
    };
    check();
    document.addEventListener('scroll', () => {
        check();
    })
};