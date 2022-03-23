const hiddenPass = document.getElementById("hidden-pass")
const lettersDiv = document.getElementById("lettersDiv")
const p = document.getElementById("p")
const p1 = document.getElementById("p1")

const passwords = ["polska", "ukraina", "rosja", "niemcy", 
"francja", "nigeria", "etiopia", "kambodża", "wietnam", "erytrea",
 "uzbekistan", "panama"]

const letters = ["a", "ą","b", "c", "ć", "d", "e", "ę", "f", "g",
 "h", "i", "j", "k", "l", "ł", "m", "n", "o", "ó", "p", "r", "s", "ś",
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
var letter = document.createElement("div")  
letter.classList.add("letter")
letter.innerHTML = content 
const letterValue = letter.value = content

lettersDiv.append(letter) 

letter.addEventListener("click", (e)=>{
let char = e.target.value
console.log(char)
password.charAt(0) === char ? answerArray[0] = char :
password.charAt(1) === char ? answerArray[1] = char : 
password.charAt(2) === char ? answerArray[2] = char : 
password.charAt(3) === char ? answerArray[3] = char : 
password.charAt(4) === char ? answerArray[4] = char : 
password.charAt(5) === char ? answerArray[5] = char :  
password.charAt(6) === char ? answerArray[6] = char : 
password.charAt(7) === char ? answerArray[7] = char :  
password.charAt(8) === char ? answerArray[8] = char : 
password.charAt(9) === char ? answerArray[9] = char :  
password.charAt(10) === char ? answerArray[10] = char :  
password.charAt(11) === char ? answerArray[11] = char : 
password.charAt(12) === char ? answerArray[12] = char : 
password.charAt(13) === char ? answerArray[13] = char : 
password.charAt(14) === char ? answerArray[14] = char :  
password.charAt(15) === char ? answerArray[15] = char :  
password.charAt(16) === char ? answerArray[16] = char : 
password.charAt(17) === char ? answerArray[17] = char :
password.charAt(18) === char ? answerArray[18] = char : 
password.charAt(19) === char ? answerArray[19] = char : console.log("ok") 

let answer = answerArray.join("")
console.log(answer)
p.innerHTML = answer

if(answer===password){p1.innerHTML="Brawo, wygrałeś!"}

})})
}

game()

