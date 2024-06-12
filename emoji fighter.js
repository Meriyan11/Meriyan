let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl=document.getElementById("stage")
let fightButtonEL=document.getElementById("fightButton")

fightButtonEL.addEventListener("click",function(){
    let randomIndexOne=Math.floor(Math.random()*fighters.length)
    let randomIndexTwo=Math.floor(Math.random()*fighters.length)
    stageEl.textContent=fighters[randomIndexOne]+" VS "+ fighters[randomIndexTwo]
})
