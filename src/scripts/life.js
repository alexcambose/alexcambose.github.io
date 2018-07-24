export default () => {
    const aliveDays = document.getElementsByClassName('alive-days')[0];
    const alivePercent = document.getElementsByClassName('alive-percent')[0];
    const bornDate = new Date(2000, 4, 27);
    setInterval(() => {
        const currentDate = new Date();
        aliveDays.innerHTML = ((currentDate - bornDate)/1000/60/60/24).toFixed(5);
        alivePercent.innerHTML = ((new Date()-bornDate)/(dieDate-bornDate)*100).toFixed(7) + '%';
    }, 1000);
    const dieDate = new Date(2080, 1, 1); // :'(

    //TIMELINE
    const timeline = document.getElementsByClassName('timeline')[0];
    const startYear = 2000;
    const endYear = 2019;

    const events = [
        {
            color: 'transparent',
            date: new Date(2000, 3, 27),
            description: "I was born",
            icon: "hands",
        },
        {
            color: '#4D6608',
            date: new Date(2013, 0, 0),
            description: "My first website",
            icon: "window-maximize",
        },
        {
            color: '#3F2A63',
            date: new Date(2014, 4, 0),
            description: "Graduated \"Vasile Alecsandri\" Middle school",
            icon: 'graduation-cap',
        },
        {
            color: '#3F2A63',
            date: new Date(2018, 4, 0),
            description: "Graduated \"Garabet Ibraileanu\" High school",
            icon: 'graduation-cap',
        },
        {
            color: 'red',
            date: new Date(2018, 7, 1),
            description: "Started Faculty of Computer Science",
            icon: 'user-graduate',
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



    for(let { date, color, description, icon } of events) {
        const event = document.createElement('div');
        event.classList.add('event');
        event.style.backgroundColor = color;
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('event-icon');
        const iconElement = document.createElement('i');
        iconElement.className = 'fa fa-'+icon;

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