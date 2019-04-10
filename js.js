const middle = document.getElementById('inner-statement');
const about = document.getElementById('about-me');
const original = document.getElementById('home');
const projects = document.getElementById('mah-projects');
const masterNav = document.getElementById('master-nav');
const button1 = document.getElementById('button1');

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
button1.addEventListener('click', gimmeThreeSteps);


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
            const again = document.getElementById('button1');
            again.addEventListener('click', ()=> {
                gimmeThreeSteps();
            })
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
            // const pullUp = document.getElementById('grace-jones');
            // pullUp.addEventListener('click', ()=>{
            //     passTheDutchie();
            // })
        }
        
    }
    xhr.send();
    
}


// If you want to get that second page in the projects folder...
// function passTheDutchie(){
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'petergabriel.html', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             middle.innerHTML = this.responseText;
//         }
//     }
//     xhr.send();
// }



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


console.log('Hello! :D')