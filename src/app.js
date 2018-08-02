
import header from './scripts/header';
import about from './scripts/about';
import projects from './scripts/projects';
import life from './scripts/life';
import contact from './scripts/contact';
import footer from './scripts/footer';
import {switchTimer} from "./config";
import {inViewport, randomFromInterval} from "./scripts/utils";

export default () => {
    const sections = document.getElementsByTagName('section');
    const navMenu = document.getElementsByClassName('navmenu')[0];
    const menuElements = document.querySelectorAll('.navmenu li');

    const scrollHandler = () => {
        if(window.scrollY > window.innerHeight/2) {
            navMenu.classList.add('inverse');
            for(let i=0;i<sections.length;i++) {
                sections[i].classList.add('inverse');
            }
        } else {
            navMenu.classList.remove('inverse');
            for(let i=0;i<sections.length;i++) {
                sections[i].classList.remove('inverse');
            }
        }
        //navmenu
        if(window.scrollY > window.innerHeight) {
            // for the projects section
            const projectsSection = [...sections].find(e => e.classList.contains('projects'));
            const contactSection = [...sections].find(e => e.classList.contains('contact'));
            if(window.scrollY + window.innerHeight > projectsSection.offsetTop && window.scrollY + window.innerHeight < projectsSection.offsetTop + projectsSection.offsetHeight) { // for the header
                navMenu.style.position = 'absolute';
                navMenu.style.top = window.scrollY - (window.scrollY + window.innerHeight - projectsSection.offsetTop) / 2 + 'px';
            }
            if(window.scrollY + window.innerHeight > contactSection.offsetHeight + contactSection.offsetTop) {
                navMenu.style.position = 'fixed';
                navMenu.style.top = '-' + (window.scrollY + window.innerHeight - (contactSection.offsetHeight + contactSection.offsetTop)) + 'px';
            }
            else {
                navMenu.style.top = '0px';
                navMenu.style.position = 'fixed';
            }

        } else {
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100vh';
        }

        let i;
        for (i=2;i<=sections.length-1 && sections[i].offsetTop < window.scrollY + window.innerHeight/2;i++);
        for(let j = 0;j<menuElements.length;j++) {
            console.log();
            if(j === i-2) {
                menuElements[j].classList.add('active');
                document.querySelector('.navmenu .overlay').style.top = menuElements[j].offsetTop + 'px';
            }
            else menuElements[j].classList.remove('active');
        }
    };

    document.addEventListener('scroll', scrollHandler);
    for(let i = 0;i<menuElements.length;i++) {
        menuElements[i].addEventListener('click', e => {
            window.scrollTo({
                "behavior": "smooth",
                "top": document.getElementsByTagName('section')[i+1].offsetTop
            });
            console.log(document.getElementsByTagName('section')[i+1].offsetTop);
        });
    }

    //SWITCHER
    const switches = document.getElementsByClassName('switcher');
    for(let i = 0; i<switches.length;i++) {
        const children = switches[i].children;
        if(children.length > 1) {
            children[0].classList.add('active');
            setInterval(() => {
                if(inViewport(children[0])) {
                    const activeElementIndex = [...children].findIndex(e => e.classList && e.classList.value.indexOf('active') !== -1);
                    if(activeElementIndex === -1) children[0].classList.add('active');
                    else if(activeElementIndex === children.length-1) {
                        children[0].classList.add('active');
                        children[children.length-1].classList.remove('active');
                    } else {
                        children[activeElementIndex].classList.remove('active');
                        children[activeElementIndex+1].classList.add('active');
                    }
                }
            }, switchTimer + randomFromInterval(0, 500));
        } else {
            children[0].classList.add('active');
        }
    }

    //FORM ADD CLASS FILLED
    [...document.querySelectorAll('input, textarea')].forEach(element => element.addEventListener('change', e => {
        if(e.target.value.trim() !== '') e.target.classList.add('filled');
        else e.target.classList.remove('filled');
    }));

    //console fun
    console.log('%c %c Hi, I see that you are interested in how things work around here... I\'m not going to tell you so you\'ll just have to figure it out by yourself. Meanwhile...\n Type: %crq()%c for a random quote', 'background-color: #A5A5A5; padding: 67px 192px; background-position: center;background-repeat: no-repeat; background-size: 384px 135px; background-image: url(\'https://i.imgur.com/bpiXX2M.png\')', 'padding: 10px 4px; background-color: #A5A5A5; color: #222', 'padding: 10px 0; background-color: #A5A5A5; color: #222; font-weight: bold', 'padding: 10px 10px 10px 4px; background-color: #A5A5A5; color: #222');
    const quotes = [
        ['Stay Hungry. Stay Foolish.', 'Steve Jobs'],
        ['Good Artists Copy, Great Artists Steal.', 'Pablo Picasso'],
        ['Argue with idiots, and you become an idiot.', 'Paul Graham'],
        ['Be yourself; everyone else is already taken.', 'Oscar Wilde'],
        ['Simplicity is the ultimate sophistication.', 'Leonardo Da Vinci'],
        ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'Albert Einstein'],
        ['If you tell the truth, you don\'t have to remember anything.', 'Mark Twain'],
        ['Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi'],
        ['It is better to be hated for what you are than to be loved for what you are not.', 'André Gide'],
        ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Albert Einstein'],
        ['I have not failed. I\'ve just found 10,000 ways that won\'t work.', 'Thomas A. Edison'],
        ['That which does not kill us makes us stronger.', 'Friedrich Nietzsche'],
        ['For every minute you are angry you lose sixty seconds of happiness.', 'Ralph Waldo Emerson'],
    ];
    window.rq = () => {

        const randomq = quotes[randomFromInterval(0, quotes.length - 1)];
        console.log('%c '+randomq[0] + '%c ' + randomq[1], 'font-size: 16px; padding: 10px; background-color: #727272; color: #fff;text-shadow: 5px 5px 5px rgba(0,0,0,.3);', 'font-size: 12px; padding: 14px 12px 11px 4px; background-color: gray; color: #fff');
    };
    scrollHandler();
    header();
    about();
    projects();
    life();
    contact();
    footer();
}
