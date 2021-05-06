const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));


        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

window.onload = function() {
  setTimeout (function () {
   scrollTo(0,0);
  }, 10); //100ms for example
 }


 window.onload = ( function() {        
  getDateTime();
   })(); 

function getDateTime() {
  var now     = new Date(); 
  var hour    = now.getHours(); 
 if (hour < 5){  
    document.getElementById('greeting').innerHTML = "Good Night!";
 }
 else if (hour < 12){
       document.getElementById('greeting').innerHTML = "Good Morning!";
  }
  else if (hour < 19){
      document.getElementById('greeting').innerHTML = "Good Afternoon!";
  }
  else if (hour < 23){
      document.getElementById('greeting').innerHTML = "Good Evening!";
  }
  else{
      document.getElementById('greeting').innerHTML = "Good Night!";
  }
}


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML ="Skopje " + h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

  