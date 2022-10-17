 const hourEl = document.getElementById("hour")
 const minuteEl = document.getElementById("minutes")
 const secondEl = document.getElementById("seconds")

 const btn1El = document.querySelector(".btn1");
 const btn2El = document.querySelector(".btn2");
 const btn3El = document.querySelector(".btn3");
 const btn4El = document.querySelector(".btn4");
 const btn5El = document.querySelector(".btn5");
 const btn6El = document.querySelector(".btn6");

 function updateClock() {
     let h = new Date().getHours()
     let m = new Date().getMinutes()
     let s = new Date().getSeconds()

     h = h<10 ? "0" + h : h;
     m = m<10 ? "0" + m : m;
     s = s<10 ? "0" + s : s;

     hourEl.innerText = h;
     minuteEl.innerText = m;
     secondEl.innerText = s;
     setTimeout(()=>{
        updateClock();
     }, 1000);
 }

 updateClock();

 btn1El.addEventListener("mouseover", (event)=>{
     const x = event.pageX - btn1El.offsetLeft;
     const y = event.pageY - btn1El.offsetTop;

     btn1El.style.setProperty("--xPos", x + "px");
     btn1El.style.setProperty("--yPos", y + "px");
 })

 btn2El.addEventListener("mouseover", (event)=>{
    const z = event.pageX - btn2El.offsetLeft;
    const w = event.pageY - btn2El.offsetTop;

    btn2El.style.setProperty("--zPos", z + "px");
    btn2El.style.setProperty("--wPos", w + "px");
 })

 btn3El.addEventListener("mouseover", (event)=>{
     const i = event.pageX - btn3El.offsetLeft;
     const j = event.pageY - btn3El.offsetTop;

     btn3El.style.setProperty("--iPos", i + "px");
     btn3El.style.setProperty("--jPos", j + "px");
 })
 btn4El.addEventListener("mouseover", (event)=>{
    const k = event.pageX - btn4El.offsetLeft;
    const l = event.pageY - btn4El.offsetTop;

    btn4El.style.setProperty("--kPos", k + "px");
    btn4El.style.setProperty("--lPos", l + "px");
 })
 btn5El.addEventListener("mouseover", (event)=>{
     const m = event.pageX - btn5El.offsetLeft;
     const n = event.pageY - btn5El.offsetTop;

     btn5El.style.setProperty("--mPos", m + "px");
     btn5El.style.setProperty("--nPos", n + "px");
 })
 btn6El.addEventListener("mouseover", (event)=>{
    const o = event.pageX - btn6El.offsetLeft;
    const p = event.pageY - btn6El.offsetTop;

    btn6El.style.setProperty("--oPos", o + "px");
    btn6El.style.setProperty("--pPos", p + "px");
})

const inputEl = document.querySelector('.input');

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateButtons();

function updateButtons() {
    if(inputEl.checked){
        btn1El.style.background = "black";
        btn2El.style.background = "black"; 
        btn3El.style.background = "black"; 
        btn4El.style.background = "black"; 
        btn5El.style.background = "black"; 
        btn6El.style.background = "black";     
    } else {
        btn1El.style.background = "lightgray";
        btn2El.style.background = "lightgray";   
        btn3El.style.background = "lightgray";   
        btn4El.style.background = "lightgray";   
        btn5El.style.background = "lightgray";   
        btn6El.style.background = "lightgray";       
    }
}

inputEl.addEventListener("input", ()=>{
    updateButtons();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}