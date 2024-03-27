// document.getElementById("count-el").innerText=5
// let count=0
// console.log(count)
// let Myage=20
// console.log(Myage)
// let firstbatch=5
// let secondbatch=7
// let count=firstbatch + secondbatch
// console.log(count)

// let myage=20
// let dogratio=7
// let myDogAge=myage*dogratio
// console.log(myDogAge)

// let bonusPoints= 50

// bonusPoints=bonusPoints+100

// bonusPoints=bonusPoints-25

// bonusPoints=bonusPoints+70

// console.log(bonusPoints)

// let bonuspoint=50
// console.log(bonuspoint)
// bonuspoint=bonuspoint+50
// console.log(bonuspoint)

// bonuspoint=bonuspoint-75
// console.log(bonuspoint)

// bonuspoint=bonuspoint+45
// console.log(bonuspoint)

// function countdown(){
//     console.log(42)
// }
// countdown()

// let lap1= 34
// let lap2=33
// let lap3=37
// function laps(){
//     totalLaps=lap1+lap2+lap3
//     console.log(totalLaps)
// }
// laps()

// let lapsCompleted=0
// function incrementLaps(){
//     lapsCompleted=lapsCompleted+1
// }
// incrementLaps()
// incrementLaps()
// incrementLaps()
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


