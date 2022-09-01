// values

window.onload = choosePic;

const myPix = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png"]

function choosePic() {
     let randomNum = Math.floor(Math.random() * myPix.length)
     document.getElementById("robotPicture").src = myPix[randomNum]

}

const playerOneName = "Holy Knight"
const playerTwoName = "Dark Lord"

let nameOneEl = document.getElementById("nameOne")
let nameTwoEl = document.getElementById("nameTwo")

nameOneEl.innerHTML = playerOneName
nameTwoEl.innerHTML = playerTwoName

let playerOneHp = 100
let playerTwoHp = 100

let playerOneAlive = true
let playerTwoAlive = true
// who goes first

let firstMove = false
let gameStatus = true
//get elements

let userOneHpEl = document.getElementById("userOneHp")

let healthElOne = document.getElementById("healthOne")
let healthElTwo = document.getElementById("healthTwo")

let userTwoHpEl = document.getElementById("userTwoHp")

let playerMove = document.getElementById("player-move")

const hitBtn = document.getElementById("attack-head")

let footerMsgEl = document.getElementById("footerMsg")


// attack checkbox

// defence checkbox


// functions
let playerAttackDmg = 0
let robotAttackDmg = ""

let headAcheck = document.getElementById("headA")


function clearChecks() {
    document.getElementById("headA").checked = false;
    document.getElementById("bodyA").checked = false;
    document.getElementById("headD").checked = false;
    document.getElementById("bodyD").checked = false;
}

function checkAttack(attack) {

    let attackEl = document.getElementsByClassName("attack")
    for (let i = 0; i < attackEl.length; i++) {
        attackEl[i].checked = false
    }
    attack.checked = true
}


function checkDefence(defence) {
    let defenceEl = document.getElementsByClassName("defence")
    for (let i = 0; i < defenceEl.length; i++) {
        defenceEl[i].checked = false
    }
    defence.checked = true
}


function renderHp() {
    userOneHpEl.innerHTML = "HP " + playerOneHp
    userTwoHpEl.innerHTML = "HP " + playerTwoHp

    healthElTwo.value = playerTwoHp
    healthElOne.value = playerOneHp

    if (playerOneHp < 0) {
        playerMove.innerHTML = "you're dead, go home"
        userOneHpEl.innerHTML = `DEAD`
        gameStatus = false
    } else if (playerTwoHp <0) {
        playerMove.innerHTML = "you won, congrats"
        userTwoHpEl.innerHTML = `DEFEATED`
        gameStatus = false
    }

}

renderHp()


function renderFooterMsg() {
        footerMsgEl.innerHTML = `<ul> This round
        ${playerOneName} did ${playerAttackDmg} damage to ${playerTwoName}
        while ${playerTwoName} did ${robotAttackDmg} to ${playerOneName}</ul>`
}


hitBtn.addEventListener("click", function() {

    let headDdmg = document.getElementById("headD").checked
    let bodyDdmg = document.getElementById("bodyD").checked
    
    let headAdmg = document.getElementById("headA").checked
    let bodyAdmg = document.getElementById("bodyA").checked

if (gameStatus) {

    let roboA = Math.floor(Math.random() * 2 + 1)

    if (roboA === 2) {
        console.log("robot tries to hit Head")
        if (headDdmg) {
            console.log("Robot couldn't hit Head as it's protected")
            robotAttackDmg = 0
        } else {
            console.log("robot managed to hit Head")
            robotAttackDmg = Math.floor(Math.random() * 10 + 1)
            playerOneHp -= robotAttackDmg
        }
        } 
        else {
            console.log("robot tries to hit Body")
            if (bodyDdmg) {
                console.log("Robot couldn't hit Body as it's protected")
                robotAttackDmg = 0
            } else {
                console.log("robot managed to hit Body")
                robotAttackDmg = Math.floor(Math.random() * 10 + 1)
                playerOneHp -= robotAttackDmg
            }
        }

    // robot decides what to protect / player chooses what to hit
    // if player didn't choose what to hit = 0 damage to any place
    let robotD = Math.floor(Math.random() * 2 + 1)

        if (headAdmg) {
            console.log("Cotton tries to hit robot's Head")
            if (robotD === 2) {
                console.log("Robot tries to protect it's Body")
                playerAttackDmg = Math.floor(Math.random() * 10 + 1)
                playerTwoHp -= playerAttackDmg
                console.log("Cotton managed to hit robot's Head")
            } else {
                console.log("Cotton failed to hit robot's head as it's protected")
                playerAttackDmg = 0
            }
        } 

        if (bodyAdmg) {
            console.log("Cotton tries to hit robot's Body")
            if (robotD === 1) {
                console.log("Robot tries to protect it's Head")
                playerAttackDmg = Math.floor(Math.random() * 10 + 1)
                playerTwoHp -= playerAttackDmg
                console.log("Cotton managed to hit robot's Body")
            } else {
                console.log("Cotton failed to hit robot's Body as it's protected")
                playerAttackDmg = 0
            }
        } 

        healthElOne.value = playerOneHp

renderFooterMsg()
renderHp()


}
})