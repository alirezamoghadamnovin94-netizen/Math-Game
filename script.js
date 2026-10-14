let maxNumber=10
let totalQuestions=10

let current=0
let correct=0
let wrong=0

let num1,num2,op,answer

let timeLeft=0
let timer

function setDifficulty(level){

if(level==="easy") maxNumber=10
if(level==="medium") maxNumber=50
if(level==="hard") maxNumber=100

}

function aiNumbers(){

maxNumber=Math.floor(Math.random()*100)+10
totalQuestions=Math.floor(Math.random()*15)+5

alert(
"AI انتخاب کرد:\n"+
"اعداد تا "+maxNumber+"\n"+
"تعداد سوال "+totalQuestions
)

}

function startGame(){

totalQuestions=Number(document.getElementById("questionCount").value)

current=0
correct=0
wrong=0

timeLeft=Number(document.getElementById("timeInput").value)

clearInterval(timer)

timer=setInterval(function(){

timeLeft--

document.getElementById("timer").innerText="زمان: "+timeLeft

if(timeLeft<=0){

clearInterval(timer)
finishGame()

}

},1000)

generateQuestion()

}

function generateQuestion(){

let ops=["+","-","*","/"]

op=ops[Math.floor(Math.random()*4)]

num1=Math.floor(Math.random()*maxNumber)+1
num2=Math.floor(Math.random()*maxNumber)+1

if(op==="+") answer=num1+num2
if(op==="-") answer=num1-num2
if(op==="*") answer=num1*num2

if(op==="/"){
answer=Math.floor(num1/num2)
num1=answer*num2
}

document.getElementById("question").innerText=
num1+" "+op+" "+num2

}

function checkAnswer(){

let user=Number(document.getElementById("answer").value)

if(user===answer){

correct++
document.getElementById("message").innerText="درست"

}else{

wrong++
document.getElementById("message").innerText="غلط"

}

current++

document.getElementById("answer").value=""

if(current>=totalQuestions){

finishGame()

}else{

generateQuestion()

}

}

function finishGame(){

document.getElementById("report").innerText=

"کل سوال: "+totalQuestions+
" | درست: "+correct+
" | غلط: "+wrong

}

function raceAI(){

let aiCorrect=0
let aiWrong=0

for(let i=0;i<totalQuestions;i++){

if(Math.random()>0.3){

aiCorrect++

}else{

aiWrong++

}

}

alert(

"نتیجه مسابقه\n\n"+
"تو:\n"+
"درست "+correct+"\n"+
"غلط "+wrong+"\n\n"+
"AI:\n"+
"درست "+aiCorrect+"\n"+
"غلط "+aiWrong

)

}

function press(v){

document.getElementById("calc").value+=v

}

function calculate(){

let d=document.getElementById("calc")

d.value=eval(d.value)

}

function clearCalc(){

document.getElementById("calc").value=""

}
