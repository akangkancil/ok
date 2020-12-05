// -----header----- //

let header = document.querySelector('.header');
let menu   = document.querySelectorAll('.header nav ul li a')
var sections = document.querySelectorAll("section");


// active navigation scroll //

window.addEventListener('scroll', function(){
  menu.forEach(ok=>{
    let section = document.querySelector(ok.hash);
    let scrollPosition = document.documentElement.scrollTop;

    if(
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.20 &&
      scrollPosition <
      section.offsetTop + section.offsetHeight - section.offsetHeight * 0.20
    ){
      ok.classList.add('active');
    }else{
      ok.classList.remove('active');
    }
  })
})

window.addEventListener('scroll',change);
function change(){
    if(window.pageYOffset>500){
        header.style.background="#073984";
    }else{
        header.style.background="transparent";
    }
    if(window.pageYOffset>2150){
        header.style.background="#05285b";
    } 
}