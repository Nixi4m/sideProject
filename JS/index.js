balls.addEventListener('click', () => {alert('Опа, твоя мать шлюха!')})

startGame.addEventListener('click', () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("clickerBody").style.display = "flex";
})

let points = 0                     
let clickPoint = 1
let counterPoints = 0
let kakygodno  =  document.querySelectorAll('.firstLvlPlus')

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

setInterval(click, 200 )

function unit(e) {
    let count = parseInt(e.srcElement.textContent);
    for(let i=0;i<count;i++){
        if(unitBoard1.children.length < 320){
            const div = document.createElement('div')  
            unitBoard1.append(div)
            div.classList.add('firstUnit')    
        }
    }
}
