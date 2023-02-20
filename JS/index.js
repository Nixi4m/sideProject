balls.addEventListener('click', () => {alert('Опа, твоя мать шлюха!')})

startGame.addEventListener('click', () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("clickerBody").style.display = "flex";
})

let points = 0;                     
let clickPoint = 1
let counterPoints = 0
let kakygodno  =  document.querySelectorAll('.firstLvlPlus')
let income = 0;
let dps = 0;
let incomeScore = 0;
let power = 1;

for (let i=0;i<kakygodno.length;i++) {
    kakygodno[i].addEventListener('click', unit)
}

function click(){
    points = points + clickPoint
    pointCounter.textContent = points + "p"

    counterPoints++
    clickCounter.textContent = counterPoints  
}

ebalo.addEventListener('click', click )

function cockAndBallTorture() {
    let maksim = 1
    let cock = document.getElementById("firstLvl");
    let and = cock.querySelectorAll("div");
    let ball = and.length;
    let incomeScore = (ball * maksim).toFixed(2)
    incomeCounter.textContent = incomeScore + ' p/s'
}

function calculateDps() {
    incomeBlock = document.getElementById('incomeCounter')
    incomeCount = parseInt(incomeBlock.textContent)
    points += incomeCount
    pointCounter.textContent = points + "p"
    if (points > 100000){
        alert('ИДИ НАХУЙ')
    }
}

function unit(e) {
    let count = 0
    if(e.srcElement.textContent == "+1" || e.srcElement.textContent == "+10"){
        count = parseInt(e.srcElement.textContent);
    }else if(e.srcElement.textContent == '10%' || e.srcElement.textContent == '50%'){
        console.log('проценты')
        //математика процентов
    }else{
        console.log('max')
        count = 100
    }for(let i=0;i<count;i++){
        const div = document.createElement('div')  
        e.srcElement.parentElement.parentElement.children[0].append(div)
        div.classList.add('firstUnit')    
    }
    cockAndBallTorture()
}

calculateDps()
setInterval(calculateDps, 1000)