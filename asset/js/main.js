// menu header active //

let menuA = document.querySelectorAll(".header nav ul li a");
let navbox = document.querySelector(".header nav");
menuA.forEach(ok=>{
    ok.addEventListener('click', function(){
        navbox.querySelector('.active-menu').classList.remove('active-menu');
        ok.classList.add('active-menu');
    })
})

// produk //

let face1 = document.querySelectorAll(".interface1");
let face2 = document.querySelectorAll(".interface2");
let btndp1 = document.querySelectorAll(".interface1 .btn-detail");
let btndhp1 = document.querySelectorAll(".interface2 .btn-hidden-detail ");

btndp1.forEach(a=>{
    a.addEventListener('click',function(){
        face1.forEach(b=>{
            let value=b.getAttribute('data-id');
            if(a.getAttribute('data-id')===value){
                b.style.display ="none";
                face2.forEach(c=>{
                   c.style.display ="flex";
                })
            }
        })
    })
})

btndhp1.forEach(d=>{
    d.addEventListener('click',function(){
        face1.forEach(e=>{
            let value=e.getAttribute('data-id');
            if(d.getAttribute('data-id')===value){
                e.style.display ="flex";
                face2.forEach(f=>{
                    let valueb=f.getAttribute('data-id');
                    if(d.getAttribute('data-id')===valueb)
                   f.style.display ="none";
                })
            }
        })
    })
})

// button pagination //

let content = document.querySelector('.content')
let back = document.querySelector('.btn-page .icon-back')
let next = document.querySelector('.btn-page .icon-next')
let boxpovr = document.querySelectorAll('.content .overlay');
let btnpage = document.querySelectorAll('.btn-page span');

btnpage.forEach(g=>{
    g.addEventListener('click',function(){
        content.querySelector('.active-btn').classList.remove('active-btn');
        g.classList.add('active-btn');
        boxpovr.forEach(h=>{
            let valueh = h.getAttribute('data-id');
            if(g.getAttribute('data-id')===valueh){
                content.querySelector('.activetes').classList.remove('activetes');
                content.querySelector('.active-btn').classList.remove('active-btn');
                h.classList.add('activetes');
                g.classList.add('active-btn');
            }
        })
    })
})

