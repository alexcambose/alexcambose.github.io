export default () => {
    const contactSection = document.querySelector('section.contact');
    const animationHoverElement = document.querySelector('.contact .section-title');
    const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const colors = ['#000d09', '#001e14', '#002f20',      '#00402b'   , '#005136', '#006242', '#00734d', '#008459', '#009564', '#00a66f'];
    const container = document.getElementsByClassName('box-animation')[0];
    const height = 50;
    const width = 50;
    const countW = contactSection.offsetWidth/width;
    const countH = contactSection.offsetHeight/height;
    let divs = [];
    for(let i=0;i<countH;i++) {
        for(let j=0;j<countW;j++){
            const newDiv = document.createElement('div');
            newDiv.style.position = 'absolute';
            newDiv.style.width = width + 'px';
            newDiv.style.height = height + 'px';
            newDiv.style.top = height * i + i + 'px';
            newDiv.style.left = width * j + j + 'px';
            container.append(newDiv);
            divs.push(newDiv);
        }
    }
    let intervals = [];
    animationHoverElement.addEventListener('mouseenter', () => {
        for(let i =0;i<countW*countH;i++) {
            const interval = setInterval(() => {
                divs[i].style.backgroundColor = colors[randomFromInterval(0, colors.length-1)];
            }, randomFromInterval(1000, 1400));
            intervals.push(interval);
        }
    });
    animationHoverElement.addEventListener('mouseleave', () => {
        for(let i =0;i<countW*countH;i++) {
            divs[i].style.backgroundColor = 'inherit';
        }
        intervals.forEach(e => clearInterval(e));
        intervals = [];
    });

    document.getElementById('contact').addEventListener('submit', e => {
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const form = new FormData();
        form.append('firstName', firstName)
        form.append('lastName', lastName)
        form.append('email', email)
        form.append('message', message)
        fetch('https://formspree.io/alexcambose1@gmail.com', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            },
            body: form
        }).then(res => res.json())
            .then(res => {
                e.target.classList.add('submitted');
            })
            .catch(err => {
                alert('Oh f#%k, the was an error!');
                console.log(err);
            });
        e.preventDefault();
    })

};