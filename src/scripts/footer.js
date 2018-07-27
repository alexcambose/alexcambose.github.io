export default () => {
    //apple style
    const offset = 65;
    const socialLinks = document.getElementsByClassName('social-links')[0];
    document.addEventListener('mousemove', e => {
        // if(enabled) {
            const { clientX, clientY } = e;
            for(let i=0;i<socialLinks.children.length;i++) {
                const link = socialLinks.children[i];
                const linkRect = link.getBoundingClientRect();
                const distanceX =  Math.abs(linkRect.x + linkRect.width/2 - clientX);
                const distanceY =  Math.abs(linkRect.y + linkRect.height/2 - clientY);
                if(distanceX <= offset && distanceY <= offset) {
                    link.getElementsByTagName('img')[0].style.transform = `scale(${.9 + (offset - Math.max(distanceX, distanceY))*.012}) translateY(${(Math.max(distanceX, distanceY) - offset)*.1}px)`;
                }else{
                    link.getElementsByTagName('img')[0].style.transform = `scale(.9) translateY(0)`;
                }
            }
        // }
    });
    document.querySelector('.go-up').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}