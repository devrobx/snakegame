//Load high scores
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const name4 = document.getElementById('name4');
const name5 = document.getElementById('name5');

const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const score3 = document.getElementById('score3');
const score4 = document.getElementById('score4');
const score5 = document.getElementById('score5');

let num1;
let num2;
let num3;
let num4;
let num5;


// Set high scores to zero if values are null
if(localStorage.getItem('score1') == null) localStorage.setItem('score1', '0')
if(localStorage.getItem('score2') == null) localStorage.setItem('score2', '0')
if(localStorage.getItem('score3') == null) localStorage.setItem('score3', '0')
if(localStorage.getItem('score4') == null) localStorage.setItem('score4', '0')
if(localStorage.getItem('score5') == null) localStorage.setItem('score5', '0')

// Set high score names to zero if values are null
if(localStorage.getItem('name1') == null) localStorage.setItem('name1', 'no one')
if(localStorage.getItem('name2') == null) localStorage.setItem('name2', 'no one')
if(localStorage.getItem('name3') == null) localStorage.setItem('name3', 'no one')
if(localStorage.getItem('name4') == null) localStorage.setItem('name4', 'no one')
if(localStorage.getItem('name5') == null) localStorage.setItem('name5', 'no one')


// set high scores 
score1.innerHTML =  parseInt(localStorage.getItem('score1'))
score2.innerHTML =  parseInt(localStorage.getItem('score2'))
score3.innerHTML =  parseInt(localStorage.getItem('score3'))
score4.innerHTML =  parseInt(localStorage.getItem('score4'))
score5.innerHTML =  parseInt(localStorage.getItem('score5'))

//set high score names
name1.innerHTML = localStorage.getItem('name1')
name2.innerHTML = localStorage.getItem('name2')
name3.innerHTML = localStorage.getItem('name3')
name4.innerHTML = localStorage.getItem('name4')
name5.innerHTML = localStorage.getItem('name5')

//local values for high scores
num1 =  parseInt(localStorage.getItem('score1'))
num2 =  parseInt(localStorage.getItem('score2'))
num3 =  parseInt(localStorage.getItem('score3'))
num4 =  parseInt(localStorage.getItem('score4'))
num5 =  parseInt(localStorage.getItem('score5'))

//local values for names
let p1 = localStorage.getItem('name1')
let p2 = localStorage.getItem('name2')
let p3 = localStorage.getItem('name3')
let p4 = localStorage.getItem('name4')
let p5 = localStorage.getItem('name5')



// if(localStorage.getItem('name1') != null) name1.innerHTML =  localStorage.getItem('name1')
// if(localStorage.getItem('name2') != null) name2.innerHTML =  localStorage.getItem('name2')
// if(localStorage.getItem('name3') != null) name3.innerHTML =  localStorage.getItem('name3')
// if(localStorage.getItem('name4') != null) name4.innerHTML =  localStorage.getItem('name4')
// if(localStorage.getItem('name5') != null) name5.innerHTML =  localStorage.getItem('name5')
