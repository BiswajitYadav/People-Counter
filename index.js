// document.getElementById("count").innerText=5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function counter(){
    count +=1
    countEl.innerText=count
}

let counterStr = " - "

function save(){
    counterStr+= count + " - "
    saveEl.textContent=counterStr
    countEl.innerText=0
    count=0
    console.log(count)  
}




// let welcomeEl = document.getElementById("welcome-el")
// console.log(welcomeEl)

// let uName = "Biswajit"
// let greeting = "Hii, My name is "

// let myGreetings = greeting+uName
// welcomeEl.innerText=myGreetings

// myGreetings = myGreetings + "👋"
// welcomeEl.innerText = myGreetings