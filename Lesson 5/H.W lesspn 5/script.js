
// H.W lesson 5 t1
// function PrintTheSmallNum(NUM,NUM2){
//     if (NUM < NUM2) {
//         console.log("the small number is",NUM);
//     } else {
//         console.log("the small number is", NUM2 );
//     }
// }

// PrintTheSmallNum(5, 10);

// H.W lesson 5 t2
// function StringCheck(str1,str2,str3,str4){
//     let count = 0;
//     if (str1.length > 3) {
//         count++;
//     }
//     if (str2.length > 3) {
//         count++;
//     }
//     if (str3.length > 3) {
//         count++;
//     }
//     if (str4.length > 3) {
//         count++;
//     }
//     return count;
// }

// console.log("the number of string bigger then 3 is:",StringCheck("hello", "hi", "world", "otk")); 

// H.W lesson 5 t3
// function CheckAndReplaceA(input){
//     if(input.includes("A")){
//         let modified = input.replace("A", "a");
//         console.log("The modified string is:", modified);
//     }
//     else {
//         console.log("The string does not contain 'A'.", input);
//     }
// }
// CheckAndReplaceA("Ala ma kota");
// CheckAndReplaceA("alA Aa kota");

// H.W lesson 5 t4
// function NumberCheck(num){
//     if (num>=0 && num%2==0) {
//         console.log("The number is positive and even.");
//     }
//     else if (num>=0 && num%2!=0) {
//         console.log("The number is positive and odd.");
//     }
//     else if (num<0 && num%2==0) {
//         console.log("The number is negative and even.");
//     }
//     else if (num<0 && num%2!=0) {
//         console.log("The number is negative and odd.");
//     }
// }

// NumberCheck(10);
// NumberCheck(-5);

// H.W lesson 5 t5
// function CheckStringFirstAndLastW(str){
//     if(str[0] == str[str.length-1]){
//         let Newstr= str.slice(1, str.length-1);
//         console.log("The new string is:", Newstr);
//     }
//     else {
//         console.log("The first and last characters are not the same.");
//     }
// }
// CheckStringFirstAndLastW("hello");
// CheckStringFirstAndLastW("level");

// H.W lesson 5 t6
// function CheckTheString(str){
//     if (str.includes("*")){
//         let modified = str.replace("*", " ");
//         console.log("The modified string is:", modified);
//     }
//     else if( str.includes("@")){
//         let modified = "*" + str+ "*";
//         console.log("The modified string is:", modified);
//     }
//     else if(str.includes("₪")){
//         console.log("new shekel.");
//     }
// }
// CheckTheString("hello*world");
// CheckTheString("hello@world");
// CheckTheString("hello₪world");

// H.W lesson 5 t7
function calc(){
    let coin = document.getElementById("coin").value;
    let input = document.getElementById("amount").value;
    if(isNaN(input)){
        alert(`${input} is not a number`);
    }
    else if(coin == "USD"){
        alert(`${input} ${coin} in shekels is ${input * 3.4} ILS`);
    }
    else if(coin == "EUR"){
        alert(`${input} ${coin} in shekels is ${input * 4.2} ILS`);
    }
    else if(coin == "POUND"){
        alert(`${input} ${coin} in shekels is ${input * 4.6} ILS`);
    }
    else if(coin == "JPY"){
        alert(`${input} ${coin} in shekels is ${input * 2.4} ILS`);
    }
}