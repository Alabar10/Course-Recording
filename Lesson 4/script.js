console.log("Hello World")
// alert("Hello Guys and Girls!")

// document.getElementById("header").innerHTML = "Eitan"


let playerPoints = 10
playerPoints += 1
playerPoints++
console.log("Player Points",playerPoints)

const enemeyPoints = 5
// enemeyPoints = enemeyPoints + 1
// console.log(enemeyPoints)

// console.log(Math.PI) // 3.141
// console.log(Math.floor(7.9)) // 7
// console.log(Math.round(7.2)) // 7

console.log(Math.floor(Math.random() * 8)) // 0 ~ 7
console.log(Math.floor(Math.random() * 9) + 2) // 2 ~ 9

// תרגיל כיתה
// צרו משתנה שיכיל מספר רנדומלי בין 25 ל28 כולל
let randomNumber = Math.floor(Math.random() * 4 ) + 25

//1
" תרגיל כיתה"
" צרו משתנה שיכיל את השם שלכם, הדפיסון את האינדקס האמצעי שלו"
let fullName = "Eitan Leiberman"
console.log(Math.floor(fullName.length / 2))

//2
 "תרגיל כיתה"
"צרו מחרוזת המחזיקה בשם המלא שלכם"
"החזירו למשתנה חדש את השם הפרטי שלכם והדפיסו אותו"

let index = fullName.indexOf(" ")
let result = fullName.slice(0,index)
console.log(result)

//3
 "תרגיל כיתה"
"צרו משתנה שיחזיק בגיל שלכם"
"צרו משתנה נוסף שיחזיק את המלל"
"I am ___ years old"
"הכניסו את משתנה הגיל שלכם לאותו הקו תחתון והדפיסו את זה"

let age = 27
let helper = "I am ___ years old"

let answer = helper.replace("___",age)
console.log(answer)
