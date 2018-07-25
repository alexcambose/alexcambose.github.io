import {randomFromInterval} from "./utils";
import {header} from "../config";

export default () => {
    const aliveDays = document.getElementsByClassName('alive-days')[0];
    const alivePercent = document.getElementsByClassName('alive-percent')[0];
    const bornDate = new Date(2000, 4, 27);
    const dieDate = new Date(2080, 1, 1); // :'(

    const getLifeStatus = () => {
        const currentDate = new Date();
        aliveDays.innerHTML = ((currentDate - bornDate)/1000/60/60/24).toFixed(5);
        aliveDays.style.textShadow = '0px 0px 10px ' + [...header.shapesColorDark, ...header.shapesColorLight][randomFromInterval(0, header.shapesColorDark.length+header.shapesColorLight.length-2)];
        alivePercent.innerHTML = ((new Date()-bornDate)/(dieDate-bornDate)*100).toFixed(7) + '%';
        alivePercent.style.textShadow = '0px 0px 10px ' + [...header.shapesColorDark, ...header.shapesColorLight][randomFromInterval(0, header.shapesColorDark.length+header.shapesColorLight.length-2)];
    };
    getLifeStatus();
    setInterval(getLifeStatus, 1000);

    //TIMELINE
    const timeline = document.getElementsByClassName('timeline')[0];
    const startYear = 2000;
    const endYear = 2019;

    const events = [
        {
            color: 'transparent',
            date: new Date(2000, 0, 1),
            description: "I was born",
            icon: "hands",
        },
        {
            color: '#4D6608',
            date: new Date(2013, 0, 1),
            description: "My first website",
            icon: "window-maximize",
        },
        {
            color: '#3F2A63',
            date: new Date(2014, 0, 1),
            description: "Graduated \"Vasile Alecsandri\" Middle school",
            icon: 'graduation-cap',
        },
        {
            color: '#003f30',
            date: new Date(2014, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> HTML & CSS 6 weeks training",
            icon: 'html5',
            iconPrefix: 'fab',
        },
        {
            color: '#003f30',
            date: new Date(2014, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> Javascript 6 weeks training",
            icon: 'js',
            iconPrefix: 'fab',
        },
        {
            color: '#003f30',
            date: new Date(2014, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> PHP 6 weeks training",
            icon: 'php',
            iconPrefix: 'fab',
        },
        {
            color: '#003f30',
            date: new Date(2015, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> CSS 6 weeks training",
            icon: 'css3-alt',
            iconPrefix: 'fab',
        },
        {
            color: '#632a00',
            date: new Date(2017, 0, 1),
            description: "Went to Bucharest with the <a href='https://openingopportunities.ro/' target='_blank'>Opening Opportunities</a> program",
            icon: 'graduation-cap',
        },
        {
            color: '#003f30',
            date: new Date(2017, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> Meteor & React 6 weeks training",
            icon: 'rocket',
        },
        {
            color: '#003f30',
            date: new Date(2017, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> Angular 6 weeks training",
            icon: 'angular',
            iconPrefix: 'fab',
        },
        {
            color: '#5f3f95',
            date: new Date(2018, 0, 1),
            description: "Graduated \"Garabet Ibraileanu\" High school",
            icon: 'graduation-cap',
        },
        // {   Ar fi trebuit...
        //     color: '#895bd6',
        //     date: new Date(2018, 0, 1),
        //     description: "Started Faculty of Computer Science",
        //     icon: 'user-graduate',
        // },
        {
            color: '#003f30',
            date: new Date(2018, 0, 1),
            description: "Won 1st place at <a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> 24 hours hackathon",
            icon: 'trophy',
        },
        {
            color: '#003f30',
            date: new Date(2018, 0, 1),
            description: "Won 2nd place at <a href='http://itmarathon.lsaciasi.ro/web.php' target='_blank'>ITMarathon</a> 12 hours hackathon",
            icon: 'trophy',
        },
        {
            color: '#003f30',
            date: new Date(2018, 0, 1),
            description: "<a href='https://fiipractic.asii.ro/hackathon' target='_blank'>FiiPractic</a> Embedded 6 weeks training",
            icon: 'microchip',
        },
    ].sort((a, b) => a.date > b.date);

    for(let i=startYear;i<=endYear;i++) {
        const yearContainer = document.createElement('div');
        yearContainer.classList.add('year-container');
        const yearLabel = document.createElement('div');
        yearLabel.classList.add('year-label');
        yearLabel.innerHTML = i;
        yearContainer.append(yearLabel);
        timeline.append(yearContainer);
    }



    for(let { date, color, description, icon, iconPrefix } of events) {
        const event = document.createElement('div');
        event.classList.add('event');
        event.style.backgroundColor = color;
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('event-icon');
        const iconElement = document.createElement('i');
        iconElement.className = (iconPrefix ? iconPrefix : 'fa') + ' fa-' + icon;

        iconContainer.append(iconElement);
        const info = document.createElement('div');
        info.classList.add('event-info');
        info.innerHTML = description;
        const year = date.getFullYear();
        const currentNode = year-startYear+3;

        // event.style.marginLeft = -15 + month*3 + 'px';


        event.append(info);
        event.append(iconContainer);
        timeline.childNodes[currentNode].append(event);

        // event.style.marginLeft = 30 * (timeline.childNodes[currentNode].getElementsByClassName('event').length - 1) + 'px';
    }
}