const div1 = document.getElementById('1');
const div2 = document.getElementById('2');
const div3 = document.getElementById('3');

const div4 = document.getElementById('4');
const div5 = document.getElementById('5');
const div6 = document.getElementById('6');

const div7 = document.getElementById('7');
const div8 = document.getElementById('8');
const div9 = document.getElementById('9');

const divArray = [div1, div2, div3, div4, div5, div6, div7, div8, div9];

for(let i = 0; i < divArray.length; i++){
    let colors = ['black', 'red', 'blue', 'yellow'];
    let random = Math.floor(Math.random()*4);
    divArray[i].style.backgroundColor = `${colors[random]}`;
    let random2 = Math.floor(Math.random()*4);
    divArray[i].style.border = `25px solid ${colors[random2]}`;
    if(random === random2){
        divArray[i].textContent = 'Same!'
    }
}