// Lesson 6: T1
// function isValidID(id) {
//     id= id.trim();
//     const isNineDigits = /^\d{9}$/.test(id);
//     return isNineDigits; 
// }
// function checkID() {
//     const input = document.getElementById("amount").value;
//     const result = isValidID(input);
//     document.getElementById("result").innerText = result ? "Valid ID" : "Invalid ID";
// }
// Lesson 6: T2
// function isPrime(num){
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(12)); 

// Lesson 6: T3
// function addSpaceBeforeCapital(str) {
//     return str.replace(/([A-Z])/g, ' $1').trim();
// }
// console.log(addSpaceBeforeCapital("HelloWorld")); 

// Lesson 6: T4

// function smallStrInBigStr(Bigstr, Smallstr) {
//     if(!Smallstr) return 0;
//     let counter = 0;
//     for (let i = 0; i <= Bigstr.length - Smallstr.length; i++) {
//         if (Bigstr.substring(i, i + Smallstr.length) === Smallstr) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(smallStrInBigStr("HelloWorldHello", "Hello")); 

// Lesson 6: T5

// function isSorted(str) {
//     debugger
//     if (str.length <= 1) return true;
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i]);
//     }
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = 0; j < arr.length- 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr.join('');
// }
// console.log(isSorted("fcab")); 

// Lesson 6: T6 calculate 

// let firstNumber = '';
// let secondNumber = '';
// let operator = '';  
// let isSecond =false;

// function appendToDisplay(value) {
//   const display = document.getElementById('display');

//   if (!isSecond) {                 
//     firstNumber += value;
//     display.value = firstNumber;
//   } else {                         
//     secondNumber += value;
//     display.value = secondNumber;
//   }
// }


// function setOperator(op) {
//     if (firstNumber === '') return;
//     operator = op;
//     isSecond = true;
// }
// function calculate() {
//   const display = document.getElementById("display");

//   if (operator === '' || secondNumber === '') {
//     display.value = 'Enter operation';
//     return;
//   }

//   const x = Number(firstNumber);
//   const y = Number(secondNumber);
//   let result;

//   switch (operator) {
//     case '+': result = x + y; break;
//     case '-': result = x - y; break;
//     case '*': result = x * y; break;
//     case '/': result = y === 0 ? 'Error' : x / y; break;
//   }

//   display.value = result;
//   if (result === 'Error') {
//     clearDisplay();
//   } else {
//     firstNumber = result.toString();
//     secondNumber = '';
//     operator = '';
//     isSecond = false;
//   }
// }

// function clearDisplay() {
//   firstNumber = "";
//   secondNumber = "";
//   operator = "";
//   isSecond = false;
//   document.getElementById("display").value = "";
// }
