const middle = document.getElementById('inner-statement');
const about = document.getElementById('about-me');
const original = document.getElementById('home');
const projects = document.getElementById('mah-projects');
const masterNav = document.getElementById('master-nav');

// THIS WILL GIVE YOU THE CURRENT BROWSER SIZE
const dearPrudence = window.innerWidth;

function resizeTest() {
    if(dearPrudence <= 433 ){
        masterNav.classList.add('animated');
        masterNav.classList.add('fadeIn');
    }
}

// So on this function, click on the element, and it will always run this...

projects.addEventListener('click', resizeTest);


about.addEventListener('click', gimmeStrength);
original.addEventListener('click', gimmeDanger);
projects.addEventListener('click', gimmeShelter);
email.addEventListener('click', gimmeThreeSteps);


function gimmeStrength() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'otisredding.html', true);

    xhr.onload = function() {
        if(this.status === 200){
            middle.innerHTML = this.responseText;
        }
    }

    xhr.send();
}


function gimmeDanger(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'daoriginal.html', true);

    xhr.onload = function() {
        if(this.status === 200){
            middle.innerHTML = this.responseText;
        }
    }

    xhr.send();
}

function gimmeShelter() {


    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'thebeatles.html', true);

    xhr.onload = function() {
        if(this.status == 200){
            middle.innerHTML = this.responseText;
            resizeTest;
        }
        
    }
    xhr.send();
    
}

function gimmeThreeSteps() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'myemail.html', true);

    xhr.onload = function(){
        if(this.status == 200){
            middle.innerHTML = this.responseText;
        }
    }
    xhr.send();
}



// TEST 2

const kick = window.innerWidth;
const missingPersons = document.getElementById('window1');
const missingPersonsII = document.getElementById('window2');

// 786 - 601
console.log(missingPersons);
console.log(missingPersonsII)
console.log(kick);

window.onresize = function(){
    const kick = window.innerWidth;
    console.log(kick);
}