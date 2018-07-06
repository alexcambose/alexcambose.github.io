import header from './scripts/header';
export default () => {
    document.addEventListener('scroll', () => {
        console.log(window.scrollY, window.innerHeight);
    });
    header();
}
