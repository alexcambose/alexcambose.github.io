export default () => {
    const contactSection = document.querySelector('section.contact');
    const animation1HoverElement = document.querySelector('.contact #hover-style-1');
    const animation2HoverElement = document.querySelector('.contact #hover-style-2');
    let isFormSubmitted = false;
    const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const colors = ['#000d09', '#001e14', '#002f20',      '#00402b'   , '#005136', '#006242', '#00734d', '#008459', '#009564', '#00a66f'];
    const container = document.getElementsByClassName('box-animation')[0];
    const height = 50;
    const width = 50;
    const countW = contactSection.offsetWidth/width;
    const countH = contactSection.offsetHeight/height;
    let divs = [];
    const render = () => {
        divs = [];
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
    };
    render();
    let intervals = [];
    const animate = (type = 0) => {
        for(let i =0;i<countW*countH;i++) {
            const interval = setInterval(() => {
                divs[i].style.backgroundColor = colors[randomFromInterval(0, colors.length-1)];
                if(type === 1)
                    divs[i].style.transform = `translate(${randomFromInterval(-100, 100)}px,${randomFromInterval(-100, 100)}px)`;
            }, randomFromInterval(1000, 1400));
            intervals.push(interval);
        }
    };
    const eraseAnimation = () => {
        for(let i =0;i<countW*countH;i++) {
            divs[i].style.backgroundColor = 'inherit';
        }
        intervals.forEach(e => clearInterval(e));
        intervals = [];
    };
    animation1HoverElement.addEventListener('mouseenter', () => {
        animate()
    });
    animation1HoverElement.addEventListener('mouseleave', () => {
        eraseAnimation();
    });
    animation2HoverElement.addEventListener('mouseenter', () => {
        animate(1)
    });
    animation2HoverElement.addEventListener('mouseleave', () => {
        eraseAnimation();
        setTimeout(render, 200);
    });

    // document.getElementById('contact').addEventListener('submit', e => {
    //     const firstName = document.getElementById('fname').value.trim();
    //     const lastName = document.getElementById('lname').value.trim();
    //     const email = document.getElementById('email').value.trim();
    //     const message = document.getElementById('message').value.trim();
    //     const form = new FormData();
    //     form.append('firstName', firstName);
    //     form.append('lastName', lastName);
    //     form.append('email', email);
    //     form.append('message', message);
    //     e.target.classList.add('loading');
    //     fetch('https://formspree.io/alexcambose1@gmail.com', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //             'Referrer': 'http://localhost:8080',
    //         },
    //         body: form
    //     }).then(res => res.json())
    //         .then(res => {
    //             e.target.classList.add('submitted');
    //             e.target.classList.remove('loading');
    //             isFormSubmitted = true;
    //         })
    //         .catch(err => {
    //             alert('Oh f#%k, the was an error!');
    //             console.log(err);
    //         });
    //     e.preventDefault();
    // })

};