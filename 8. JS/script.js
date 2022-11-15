console.log("Heloo World!")

console.log(
    "Šī ir teksta rinda".toUpperCase()
)

console.log(
    "Šī ir TEKSTA rinda".toLowerCase()
)

console.log(
    1+2*3/1
)

console.log( //Masīvs
    ['teksts1','teksts2',123,'teksts3']
)

const prieksmeti = ['karote','dakša','ņazis'] // Masīvs 

console.log(prieksmeti[1])

console.log( //Objekts
    {
    vards: "Jānis",
    uzvards: "Ozols",
    vecums: 18
    }
)

const adrese = {
    valsts:"Latvija",
    pilseta:"Liepāja",
    iela: "Lielā iela 1B"
}

console.log(adrese.iela)

//var skaitlis = 1 (var - old style variablle definition)
let skaitlis1 = 1
let skaitlis2 = 2

console.log(skaitlis1 + skaitlis2)

skaitlis2 = 5

console.log(skaitlis1 + skaitlis2)

const Pi = 3.14
console.log(Pi)


//Function
function saskaitit(skaitlis1,skaitlis2){
    console.log(skaitlis1*skaitlis2)
}

saskaitit(skaitlis1,skaitlis2)

const box = document.querySelector('.js-box')
console.log(box)

//Events

//1.veids ar peles notikumu
box.addEventListener('mouseenter',() => {
    console.log("Iegāju kastē")
    box.style.background='red';
})

box.addEventListener('mouseleave',() => {
    console.log("Izgāju no kastes")
    box.style.background='';
})

//2.veids ar funkcijam
function enter(x){
    x.style.background="green"
}

function leave(x){
    x.style.background=""
}

let vecums = 15

if(vecums>18){
    console.log("Pilngadīgs")
}else{
    console.log("Nepilngadīgs")
}

//FOR cycle
const nodarbibas = ['matemātika','sports','angļu valoda']

for (let i = 0; i < nodarbibas.length; i=i+1){
    console.log(nodarbibas[i])
}

//TimeOut

// setTimeout(function(){
//     console.log("Info,kas parādas pēc 2 sekundēm")
// },2000)

// setInterval(function(){
//     console.log("Info,kas parādas ik pēc 2 sekundēm")
// },2000)

// JS in HTML

// let rindkopa = document.getElementById('rindkopa')
// setInterval(function(){
//     console.log("Info,kas parādas ik pēc 2 sekundēm")
//     rindkopa.innerHTML += "Info,kas parādas ik pēc 2 sekundēm<br>"
// },2000)


// function myFn(){
//     console.log("Info,kas parādas ik pēc 2 sekundēm")
//     rindkopa.innerHTML += "Info,kas parādas ik pēc 2 sekundēm<br>"
// }

// const intervals = setInterval(myFn,1000)
// setTimeout(function(){
//     clearInterval(intervals)
//     console.log("1 sekundes intervāls ir beidzies!")
// },3000)

const body = document.querySelector('body')
const pink = document.querySelector('.js-pink')
const gray = document.querySelector('.js-gray')

const gaisi =document.querySelector('.js-gaisi')
const tumsi =document.querySelector('.js-tumsi')



body.style.backgroundColor = localStorage.fonaKrasa
body.style.color = localStorage.textColor

pink.addEventListener('click',function(){
    body.style.backgroundColor = "pink"  
    localStorage.fonaKrasa = "pink"
})

gray.addEventListener('click',function(){
    body.style.backgroundColor = "gray" 
    localStorage.fonaKrasa = "gray"
})

gaisi.addEventListener('click',function(){
    document.documentElement.style.setProperty('--burtuKrasa','#777')
    localStorage.textColor = '#777'
    location.reload()
})

tumsi.addEventListener('click',function(){
    document.documentElement.style.setProperty('--burtuKrasa','#333')
    localStorage.textColor = '#333'
    location.reload()
})
