const p = document.getElementById("p")
const p1 = document.getElementById("p1")
const restartBtn = document.getElementById("restartBtn")

const passwords = ["polska", "ukraina", "rosja", "niemcy", 
"francja", "nigeria", "etiopia", "kambodża", "wietnam", "erytrea",
 "uzbekistan", "panama", "finlandia", "szwecja", "watykan", "stany zjednoczone"]

const letters = [" ", "a", "ą","b", "c", "ć", "d", "e", "ę", "f", "g",
 "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś",
  "t", "u", "v", "q", "w", "y", "z", "ź", "ż" ]

const randomPassword = () => Math.floor(Math.random() * passwords.length)

let answerArray = []

function getPassword(){
let passGen = randomPassword()
let password = passwords[passGen]
return password
}

function game(){
let password = getPassword()
console.log(password)

letters.forEach((content, index)=>{
let letter = document.createElement("div")
letter.id = index  
letter.innerHTML = content 
letter.value = content // very important line!
letter.classList.add("letter")
lettersDiv.append(letter) 
let space = document.getElementById("0")
space.classList.add("space")

letter.addEventListener("click", (e)=>{
let char = e.target.value // We get it from line 31
for (let i=0; i<password.length; i++) 

password.charAt(i) === char ? answerArray[i] = char : 
answerArray[i] === undefined ? answerArray[i] = "-" : ""
if (char === password.charAt(0)) {answerArray[0] = char.toUpperCase()}

console.log(answerArray)

let answer = answerArray.join("")
console.log(answer)
p.innerHTML = answer

if(answer===password.charAt(0).toUpperCase() + password.slice(1).toLowerCase()){
p1.innerHTML="Brawo, wygrałeś!";
let answer1 = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
p.innerHTML = answer1;
restartBtn.style.visibility = "visible"
}

})})
}
function restart(){
  location.reload()
}

restartBtn.addEventListener("click", restart)

game()
