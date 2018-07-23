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
    const endYear = 2018;

    const events = [
        {
            color: 'red',
            date: new Date(2004, 12, 1),
        },
        {
            color: 'green',
            date: new Date(2014, 12, 1),
        },
        {
            color: 'blue',
            date: new Date(2003, 12, 1),
        }
    ].sort((a, b) => a.date > b.date);

    for(let i=0;i<=(endYear - startYear);i++) {
        const separator = document.createElement('div');
        separator.classList.add('year-separator');
        separator.style.left = 100/(endYear - startYear+2) * (i+1)+ '%';

        const yearIndicator = document.createElement('div');
        yearIndicator.classList.add('year-indicator');
        yearIndicator.style.left = separator.style.left;
        yearIndicator.innerHTML = startYear + i;

        timeline.append(separator);
        timeline.append(yearIndicator);
    }
    for(let [index, { date, color }] of events.entries()) {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        const year = date.getFullYear();
        eventElement.style.left = 100/(endYear - startYear+2)*(year-startYear+1) + '%';
        eventElement.style.width = timeline.querySelectorAll('.year-separator')[1].offsetLeft - timeline.querySelectorAll('.year-separator')[0].offsetLeft +1+ 'px';
        eventElement.style.backgroundColor = color;

        const eventElementAnimation = document.createElement('div');
        eventElementAnimation.classList.add('event-animation');
        eventElementAnimation.style.animationDelay = index/2 + 's';
        eventElement.append(eventElementAnimation);
        timeline.append(eventElement);
    }
}