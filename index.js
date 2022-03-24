const hiddenPass = document.getElementById("hidden-pass")
const lettersDiv = document.getElementById("lettersDiv")
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
letter.classList.add("letter")
letter.innerHTML = content 
letter.value = content // very important line!

lettersDiv.append(letter) 

letter.addEventListener("click", (e)=>{
let char = e.target.value // We get it from line 32
console.log(char)
password.charAt(0) === char ? answerArray[0] = char : console.log("niet this")
password.charAt(1) === char ? answerArray[1] = char : console.log("niet this")
password.charAt(2) === char ? answerArray[2] = char : console.log("niet this") 
password.charAt(3) === char ? answerArray[3] = char : console.log("niet this") 
password.charAt(4) === char ? answerArray[4] = char : console.log("niet this") 
password.charAt(5) === char ? answerArray[5] = char : console.log("niet this") 
password.charAt(6) === char ? answerArray[6] = char : console.log("niet this") 
password.charAt(7) === char ? answerArray[7] = char : console.log("niet this") 
password.charAt(8) === char ? answerArray[8] = char : console.log("niet this") 
password.charAt(9) === char ? answerArray[9] = char : console.log("niet this") 
password.charAt(10) === char ? answerArray[10] = char : console.log("niet this") 
password.charAt(11) === char ? answerArray[11] = char : console.log("niet this") 
password.charAt(12) === char ? answerArray[12] = char : console.log("niet this") 
password.charAt(13) === char ? answerArray[13] = char : console.log("niet this") 
password.charAt(14) === char ? answerArray[14] = char : console.log("niet this") 
password.charAt(15) === char ? answerArray[15] = char : console.log("niet this") 
password.charAt(16) === char ? answerArray[16] = char : console.log("niet this") 
password.charAt(17) === char ? answerArray[17] = char : console.log("niet this") 
password.charAt(18) === char ? answerArray[18] = char : console.log("niet this") 
password.charAt(19) === char ? answerArray[19] = char : console.log("niet this") 

let answer = answerArray.join("")
console.log(answer)
p.innerHTML = answer

if(answer===password){
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
