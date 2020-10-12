console.log('This is the tutorial for responsive website');
burger=document.querySelector('.burger');
navBar=document.querySelector('.navbar');
navList=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navBar.classList.toggle('h-nav');
})