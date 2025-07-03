// 1
// let num1 =5
// let num2 = 10
// let num3 = 15

// let result = num1 * num2 * num3
// console.log("The result is", result)

// 2
// let name="Alaa"
// let name2="bargita"
// let swap=name
// name = name2
// name2 = swap
// console.log("Name 1 is", name)
// console.log("Name 2 is", name2)

// 3
// let fullname = "Alaa Bargita"
// let updatename= fullname.replace(" ", "*")
// console.log("Updated name is", updatename)

// 4
// let num1=5
// let num2=2
// let result = num1** num2
// console.log("The result is", result)

// 5
// let word="r"
// let words="wonderful"
// let middleIndex = Math.floor(words.length / 2)
// let firstHalf = words.slice(0, middleIndex)
// let secondHalf = words.slice(middleIndex)
// let result = word+firstHalf + word + secondHalf+word
// console.log("The result is", result)

// 6
// let num1 = 5
// let num2 = 10
// let num3 = 15
// let num4 = 20   
// let num5 = 25
// let result = num1 * num2 * num3 * num4 * num5
// console.log("The result is", result)

// let unit1=num1%10
// let unit2=num2%10
// let unit3=num3%10
// let unit4=num4%10
// let unit5=num5%10
// let sum = unit1 + unit2 + unit3 + unit4 + unit5
// console.log("The sum of the units is", sum)
  

// 7

// let str="World"
// let srt2="Guys"
// let result = str.slice(0, 5) + " " + srt2.slice(0)
// console.log("The result is", result)
// let length = result.length
// console.log("The length of the result is", length)

// 8
// let fullName = "Alaa Bargita"
// let name= fullName.slice(0, fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ") + 1)
// namelength = name.length
// lastnamelength = lastName.length
// let result = "The length of your first name is " + namelength + " and the length of your last name is " + lastnamelength
// console.log(result)

// 9
//  מהו מהדר (Compiler)?
// מהדר הוא תוכנה שלוקחת את כל הקוד שכתבנו בשפת תכנות מסוימת (למשל: C, C++, Java) ומתרגמת אותו בבת אחת לקובץ בינארי או קובץ הרצה עצמאי (למשל .exe). לאחר ההידור, ניתן להריץ את התוכנה מבלי להזדקק למהדר שוב.

// מאפיינים עיקריים:

// תרגום של כל הקוד לפני הרצה.
// מהיר יותר בזמן הריצה (לא צריך לפרש כל שורה תוך כדי).
// דורש שלב הידור – כלומר צריך "לקמפל" לפני שניתן להריץ.
// בד"כ מקשה על איתור שגיאות – כי הן מופיעות כולן בזמן הידור.
// דוגמאות לשפות עם מהדרים:
// C, C++, Rust, Go, Java (ל-bytecode)

//  מהו מפרשן (Interpreter)?
// מפרשן הוא תוכנה אשר מריצה את קוד המקור שורה אחר שורה תוך כדי ביצוע. כלומר, אין שלב תרגום לקובץ הרצה – כל פעם שמריצים את התוכנית, המפרש קורא, מתרגם ומבצע את השורות בזמן אמת.

// מאפיינים עיקריים:

// הרצה ישירה של הקוד – לא נדרש הידור.
// קל ונוח לדיבוג – קל לראות באיזו שורה התוכנית נתקעה.
// איטי יותר בזמן הריצה – כל שורה מתורגמת תוך כדי.
// קל לשינויים מהירים וניסויים בקוד.
// דוגמאות לשפות עם מפרשנים:
// Python, JavaScript, Ruby, PHP

// 10
// let a = 7;
// let b = 3;

// // שלב 1: חיבור שני הערכים ושמירה ב-a
// a = a + b; // a = 10

// // שלב 2: הפחתת b מהערך החדש של a → כך נקבל את הערך המקורי של a בתוך b
// b = a - b; // b = 10 - 3 = 7

// // שלב 3: הפחתת הערך החדש של b (7) מהערך החדש של a (10) → נקבל את הערך המקורי של b בתוך a
// a = a - b; // a = 10 - 7 = 3

// console.log("a:", a); // 3
// console.log("b:", b); // 7
