const header=document.querySelector('header'),menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
function scrollHeader(){header.classList.toggle('scrolled',scrollY>20)}scrollHeader();addEventListener('scroll',scrollHeader,{passive:true});
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'✕':'☰'});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.textContent='☰'}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>alert('Replace this starter copy in index.html with Jeff’s real story and experiences.')));









const murals = {
    mural1: "./projects.png",
    mural2: "./Technology2.png",
    mural3: "./A Journey of Experiences.png"
};

function openMural(mural) {
    console.log("Opening:", mural);

    const popup = document.getElementById("muralPopup");
    const image = document.getElementById("popupImage");

    if (!popup || !image) {
        alert("We are missing the popup HTML!");
        return;
    }

    image.src = murals[mural];
    popup.style.display = "flex";
}

function closeMural() {
    document.getElementById("muralPopup").style.display = "none";
}