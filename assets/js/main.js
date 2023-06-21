const nav = document.querySelector('nav');
const container = document.querySelector('#removeMargin');
const contentSkills = document.querySelector('.content__skills'); 
const contentSkillsSoft = document.querySelector('.content__skills__soft'); 
const myBody = document.querySelector('body');
const circle = document.getElementById("circle");
const presentationText = document.querySelector('#presentationText');



function writeText(element) {
    
    const textToArray = element.innerHTML.split('');
    element.innerHTML = '';
    textToArray.forEach((letra,i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 85 * i);
    });
}

writeText(presentationText);




circle.addEventListener('click', () => {
    
    if (circle.style.width != '20px'){

        circle.style.width = '20px';
        circle.style.height = '20px';

        setTimeout(() => {
            circle.style.width = '30px';
            circle.style.height = '30px';
        }, 150);
        return true;
    }
         
});

    window.onscroll = () => {scrollFunction()};

function scrollFunction(){
    if(document.documentElement.scrollTop > 0){
        nav.classList.add('navbar__scroll');
        nav.classList.remove('navbar');
        console.log(document.documentElement.scrollTop);
    }else if (document.body.scrollTop <= 0) {
        nav.classList.remove('navbar__scroll');
        nav.classList.add('navbar');
    }
}

function revealSections() {
    window.scrollReveal = ScrollReveal({ reset: true });

    scrollReveal.reveal('.presentaion__section', {
        opacity: 0,
        duration: 2000
    });

        scrollReveal.reveal('.about__me__section',{
            duration: 3000
        });
}

    revealSections();

function showContent(){
    if(contentSkills.classList.contains('content__skills')){
        contentSkills.classList.add('maxHeigth');
    }
}
function hideContent(){
    contentSkills.classList.remove('maxHeigth');
}
function showContentSoft(){
    if(contentSkillsSoft.classList.contains('content__skills__soft')){
        contentSkillsSoft.classList.add('maxHeigth');
    }
}
function hideContentSoft(){
    contentSkillsSoft.classList.remove('maxHeigth');
}

function isTouchDevice() {
    try {

        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

 const move = (e) => {

    try {

        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}

    circle.style.left = x - 0 + "px";
    circle.style.top = y - 0 + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

document.addEventListener("touchmove", (e) => {
  move(e);
}); 






