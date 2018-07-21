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
}