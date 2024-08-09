const div1 = document.getElementById('1');
const div1c = document.getElementById('1c');

const div2 = document.getElementById('2');
const div2c = document.getElementById('2c');
const div3 = document.getElementById('3');
const div3c = document.getElementById('3c');
const div4 = document.getElementById('4');
const div4c = document.getElementById('4c');

const div5 = document.getElementById('5');
const div5c = document.getElementById('5c');
const div6 = document.getElementById('6');
const div6c = document.getElementById('6c');
const div7 = document.getElementById('7');
const div7c = document.getElementById('7c');
const div8 = document.getElementById('8');
const div8c = document.getElementById('8c');
const div9 = document.getElementById('9');
const div9c = document.getElementById('9c');

const div10 = document.getElementById('10');
const div10c = document.getElementById('10c');
const div11 = document.getElementById('11');
const div11c = document.getElementById('11c');
const div12 = document.getElementById('12');
const div12c = document.getElementById('12c');

const div13 = document.getElementById('13');
const div13c = document.getElementById('13c');

const play =  document.getElementById('play');

const divArray = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13];
const divCArray = [div1c, div2c, div3c, div4c, div5c, div6c, div7c, div8c, div9c, div10c, div11c, div12c, div13c]

const runGame = () => {
    let colorArray = [];
    for(let i = 0; i < divArray.length; i++){
        divCArray[i].textContent = "";
        let colors = ['black', 'red', 'blue', 'yellow', 'green', 'gray', 'brown', 'purple', 'pink', 'light blue', 'orange', 'beige', 'dark blue'];
        let random = Math.floor(Math.random()*13);
        let random2 = Math.floor(Math.random()*13);
        let random3 = Math.floor(Math.random()*13);
        let randomBG = 'black';
        colorArray.push(random, random2, random3);
        divArray[i].style.backgroundColor = `${colors[random]}`;
        divArray[i].style.border = `25px solid ${colors[random2]}`;
        divCArray[i].style.backgroundColor = `${colors[random3]}`;
        document.body.style.backgroundColor = colors[randomBG];
        if(random === random2 && random2 === random3 && random3 === randomBG){
            console.log(random, random2, random3, randomBG)
            divCArray[i].textContent = "Win!";
        }    
    }
}

const timeout = () => {
    setTimeout((() => runGame()), 1000);
}

play.addEventListener('click', timeout);

