// const recursion = (n) => {
//   if (n == 0) {
//     return;
//   } else {
//     console.log(n);
//     return recursion(n - 1);
//   }
// };
// console.log(recursion(10));

// const factorialNum = (n) => {
//   if (n === 1 || n === 0) {
//     return 1;
//   }
//   const facNum = factorialNum(n - 1);
//   const result = n * facNum;
//   return result;
// };
// const final = factorialNum(6);
// console.log(final);

// console.log(name1);
// console.log(name2);
// console.log(name3);

//string
//number
//boolean true or false
//array
//null
// undefined

// const cricketer = [
//   {
//     //key:value
//     name: "Tamim",
//     age: "",
//     batingAvg: 36.67,
//     type: "Opener",
//     salary: undefined,
//     country: null,
//     son: {
//       name: "Fahim",
//       age: 10,
//     }, //object
//     hobby: ["Football", "singing", "swimming"], //array
//   },
// ];

/// 1st class
// let
// const
// var
// const num = 400;

// let age = null;

// console.log(age);
// Boolean
// true or false
// const student = {}; //object
// const cricketer = []; //array
// const date = new Date();
// Object
// const singleCricketer = {
//   //key:value
//   name: "Tamim",
//   age: 36,
//   batingAvg: 36.67,
//   type: "Opener",
//   salary: undefined,
//   country: "Bangladesh",
// };

// const singleCricketer2 = {
//   name: "Masrafee",
//   age: 36,
//   batingAvg: 36.67,
//   type: "Bowler",
//   salary: undefined,
//   country: "Bangladesh",
// };
// const singleCricketer3 = {
//   name: "Sakib",
//   age: 36,
//   batingAvg: 36.67,
//   type: "allrounder",
//   salary: undefined,
//   country: "Bangladesh",
//   hobby: { football: "footbal", pet: "pet" },
// };

// const cricketer = [
//   {
//     name: "Sakib",
//     age: 36,
//     batingAvg: 36.67,
//     type: "allrounder",
//     salary: undefined,
//     country: "Bangladesh",
//   },
//   {
//     name: "Masrafee",
//     age: 36,
//     batingAvg: 36.67,
//     type: "Bowler",
//     salary: undefined,
//     country: "Bangladesh",
//   },
//   {
//     name: "Tamim",
//     age: 36,
//     batingAvg: 36.67,
//     type: "Opener",
//     salary: undefined,
//     country: "Bangladesh",
//   },
// ];
// console.log(cricketer);

////2nd class

// const number = [1, 2, 5, 63, 8, 10];
// const hobby = ["Football", "Gardening", "Pet", "Cricket"];
//dynamically access

// console.log(hobby.length);
//looping access

// 3rd class

// function student(name, roll, gpa, age) {
//   // execution block

//   return `${name} is a Good Student with good GPA that is ${gpa} and his age is ${age} and his class roll is ${roll}`;
// }

// console.log(student("Rahim", 100, 5, 25));
// console.log(student("Karim", 101, 4.5, 27));

// console.log(student("Fahim", 303, 3, 30));

// 3 , 5 jog korte cai
// 10,15 jog korte cai

// function sum(a, b) {
//   console.log(a, b);
//   return a + b;
// }

// function multiply(x, y) {
//   return x * y;
// }

// const Fruit = ["Apple", "Mango", "Pepe", "Banana"];
// Fruit[1];
// 1 loop
// 2 dynamic access

// function LoopingArray(array) {
//   for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
//   }
// }
// LoopingArray(Fruit);

// 4th class
// object

// const person = {
//   firstName: "jhon",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// document.getElementById("button").addEventListener("click", () => {
//   document.getElementById("name").innerHTML = person.firstName;
// });

// console.log(person["lastName"]);

// 5th class
// call back function

// function division(para) {
//   console.log(para / 6);
// }
// function mutiplication(x) {
//   console.log(x * 2);
// }
// function sub(y) {
//   console.log(y - 15);
// }
// function sumFunction(a, b, ab, callback) {
//   let sum = a + b + ab;
//   return callback(sum);
// }
// sumFunction(5, 7, 12, division);
// sumFunction(1, 4, 5, mutiplication);
// sumFunction(10, 23, 7, sub);

// looping / traverse
// search
//update
//create
//delete
//

// class 6th
// function printPlayerName(firstName, lastName) {
//   let fullName = firstName + " " + lastName;

//   console.log(fullName);
// }

// function printAllinfo(callback) {
//   console.log({ age: 34, national: "Bangladesh" });

//   const bdCricketTeam = ["Sakib", "tamim", "Soriful", "musfiq"];
//   for (let i = 0; i < bdCricketTeam.length; i++) {
//     console.log(bdCricketTeam[i]);
//   }

//   callback("Tamim", "Iqbal");
// }

// printAllinfo(printPlayerName);

// 7th class

// function readyName(fn) {
//   let firstName = "Shamim";
//   let lastName = "Reza";
//   let fullName = firstName + " " + lastName;

//   return fn(fullName);
// }

// function printName(name) {
//   console.log(name);
// }

// readyName(printName);

// Array pop()
// Array push()
// Array shift()
// Array unshift()

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);
// Array push()
// const pushData = fruits.push("Pepe");
// console.log(pushData);
// fruits.unshift("Grape");
// const poppedData = fruits.pop();
// fruits.shift();
// fruits.shift();
// fruits[2] = { name: "sm akbor" };
// delete fruits[2];
// let numbers = [2, 4, 53, 65, 3];
// const player = ["Tamim", "musfiq", "Liton"];
// let resultArray = numbers.concat(fruits, player, "Pepe", {
//   name: "Sm akbor",
//   age: 24,
// });

// console.log(resultArray);

// 8th class

//splice
// remove an element
// add an element
// at the same time
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const returnArray = fruits.splice(1, 2, "Grape");
// console.log(returnArray);
// console.log(fruits);

// slice

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pepe", "Guava"];

// const slicedArray = fruits.slice(2, 4);
// console.log(slicedArray);

// let data = [3, 4, 6, 2, 56, 45, 23, 1, 45, 98];

// function Numeric_sort(ar) {
//   let i = 0,
//     j;
//   while (i < ar.length) {
//     j = i + 1;
//     while (j < ar.length) {
//       if (ar[j] > ar[i]) {
//         let temp = ar[i];
//         ar[i] = ar[j];
//         ar[j] = temp;
//       }
//       j++;
//     }
//     i++;
//   }
// }

// Numeric_sort(data);
// console.log(data);

// let data = [3, 4, 6, 2, 56, 45, 23, 1, 45, 98];
// for (let i = 0; i < data.length; i++) {
//   for (let j = 1; j < data.length; j++) {
//     let temp;
//     if (data[i] > data[j]) {
//       temp = data[i];
//       data[i] = data[j];
//       data[j] = temp;
//     }
//   }
// }
// console.log(data);

// const N = 3332323;
// const ab = "434352";
// console.log(+ab);

// const newN = "" + N;
// const ar = [...newN].reduce((acc, curr) => {
//   return acc.concat(+curr);
// }, []);
// console.log(ar);

// const isPrime = (n) => {
//   if (n < 2) {
//     return false;
//   }
//   if (n == 0) {
//     return true;
//   }
//   let maxNum = Math.sqrt(n);
//   for (let i = 2; i < maxNum; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrime(12));

// 9th class
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// let number = [4, 6, 7, 9, 3, 23, 45, 12];
// number.sort(sorted);
// function sorted(a, b) {
//   return a - b;
// }
// console.log(number);

// normal function
// function printName() {
//   console.log("SM AKBOR");
// }
// printName();
// /// arrow function
// let printName2 = (name) => {
//   console.log(name);
// };
// printName2("Mehedy");

// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(3, 5);

//10th class

// const array = [3, 5, 6, 7, 8, 9];

// const sliced = array.slice(1, 4);
// console.log(sliced);

// let number = 67;
// number = 45;
// console.log(number);

// let person = "John Doe";

// let info = {
//   name: "Rahim",
//   age: 24,
//   eat(name, age) {
//     return `${name} can eating and his age is ${age}`;
//   },
//   play() {
//     return `${this.name} can play football and cricket`;
//   },
// };

// console.log(info);

// info.gpa = 5;

// console.log(info);

// const array = [3, 5, 6, 7, 8, 9];

// console.log(array);
// const splicedArr = array.splice(1, 3, "Rahim");
// // console.log(splicedArr);
// console.log(array);

// const obj1 = {};
// const obj2 = {};

// console.log(obj1 === obj2);

// const num1 = 3;
// const num2 = 3;
// console.log(num1 == num2);

// const arr1 = [3];
// const arr2 = [3];
// console.log(arr1 == arr2);

// class 11th

// let number1 = 5;

// let number2 = number1;

// number1 = 10;
// console.log(number2);

// let info1 = { name: "Rahim" }; // 123 reference
// info1 = {}; //23
// let info2 = info1; //23 reference
// info1.name = "Karim";

// console.log(info2);

// console.log(info2);
// console.log(info1);

// let number = 3;
// let number1 = 3;
// console.log(number == number1);
// let obj1 = {}; //34
// let obj2 = {}; // 45

// let student = { name: "Torun Kumar", age: 50 }; //1111
// let teacher = { name: "Torun Kumar", age: 50 }; //2222

// console.log(obj1 == obj2);

// task
/// make five array and looping through over that array

// 12th class
// let num1 = 7;
// let num2 = 7;
// // console.log(num1 == num2);
// let student1 = {}; //[]  reference ////0000
// // reference //0000
// console.log(student1);
// let student3 = student1; //reference //0000
// student3.age = 36;
// student3.gpa = 4;
// console.log(student3);
// let student4 = student3; //reference // 0000
// // console.log(student1 == student3);
// console.log(student4);
// student1 = { name: "Tamim" }; //suruj bhai //kawser bhai same //momin///1212
// console.log(student1);

// let student2 = {}; //[]  reference ////1111

// function printStudent(obj3, obj2) {
//   console.log(obj3 == obj2);
// }

// printStudent(student1, student3);

// 13th class
// const player = {
//   name: "Tamim",
// };

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
// };

// person.fullName = function (firstName, lastName) {
//   return firstName + " " + lastName;
// };
// console.log(person.fullName("Masrafee", "Mortaza"));

//14th class
//array map method

// Array.map()
//Return a new array
//array.map(function(currentValue, index, arr))

// const element = (item, index, arr) => {
//   console.log(item);
// };
// const newNumbers = numbers.map((item) => {
//   console.log(item);
// });
// console.log(newNumbers);
const numbers = [3, 2, 1, 6, 7, 8, 9];
// const element = (item) => {
//   console.log(item);
// };
// function myMap(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// myMap(numbers, element);

// let myFunc = (value) => {
//   return value * 2;
// };
// let newArr = numbers.map(myFunc);
// console.log(newArr);

// let students = [
//   { id: 1, name: "Momin", age: 19, roll: 101 },
//   { id: 2, name: "Maruf", age: 20, roll: 102 },
//   { id: 3, name: "Kawser", age: 21, roll: 103 },
//   { id: 4, name: "Thafujul", age: 21, roll: 104 },
//   { id: 4, name: "Thafujul", age: 21, roll: 104 },
//   { id: 4, name: "Thafujul", age: 21, roll: 104 },
//   { id: 4, name: "Thafujul", age: 21, roll: 104 },
// ];

// let updatedStudents = students.map((obj) => {
//   if (obj["age"] === 21) {
//     obj["age"] = 24;
//   }
//   return obj;
// });
// console.log(updatedStudents);

// // map
// let printNameAndAge = students.map((item) => {
//   //manual way
//   let obj = {};
//   obj.name = item.name;
//   obj.age = item.age;
//   //return obj
//   //rest operator
//   let { id, roll, ...rest } = item;
//   return rest;
// });
// // console.log(printNameAndAge);
// // let filteredStudents = students.filter((item) => {
// //   if (item.age !== 20) {
// //     return item;
// //   }
// // });
// // console.log(filteredStudents);

// const filtered = students.filter((x) => {
//   return x.age > 20;
// });
// console.log(filtered);

//15th class
// const student = [
//   { id: 101, firstNsame: "Mominul", lastName: "Shimanto" },
//   { id: 102, firstNsame: "Labib", lastName: "Aziz" },
//   { id: 103, firstNsame: "Abdullah", lastName: "Naiem" },
//   { id: 104, firstNsame: "Ibrahim", lastName: "Molla" },
//   { id: 105, firstNsame: "Mahibul", lastName: "Afrid" },
// ];

// const myMap = (callback) => {
//   for (let i = 0; i < student.length; i++) {
//     return callback(student[i]);
//   }
// };

// let newArray = student.myMap((item) => {
//   return item * 2;
// });

// let updatedStudent = student.map((obj) => {
//   let fullName = obj.firstNsame + " " + obj.lastName;
//   obj.fullName = fullName;
//   return obj;
// });

// console.log(updatedStudent);

// function myMap(arr, callback) {
//   if (!Array.isArray(arr)) {
//     throw new Error("The first argument must be an array.");
//   }
//   if (typeof callback !== "function") {
//     throw new Error("The second argument must be a function.");
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = callback(arr[i], i, arr);
//   }
//   return result;
// }

// const dobuleArr = myMap(student, (item) => {
//   let d = item.id * 2;
//   let fullName = item.firstNsame + " " + item.lastName;
//   item.fullName = fullName;
//   item.id = d;
//   return item;
// });
// console.log(dobuleArr);

// const student = [
//   { id: 101, firstNsame: "Mominul", lastName: "Shimanto" },
//   { id: 102, firstNsame: "Labib", lastName: "Aziz" },
//   { id: 103, firstNsame: "Abdullah", lastName: "Naiem" },
//   { id: 104, firstNsame: "Ibrahim", lastName: "Molla" },
//   { id: 105, firstNsame: "Mahibul", lastName: "Afrid" },
// ];

// const myMap = (arr, callback) => {
//   if (!Array.isArray(arr)) {
//     throw new Error("please pass an array");
//   }
//   if (typeof callback !== "function") {
//     throw new Error("please pass a callback function");
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = { id: 105, firstNsame: "Mahibul", lastName: "Afrid" ,fullName:"Mahibul afrid" }
//   }
//   return result;
// };

// const updatedArray = myMap(student, (obj,i,arr) => {
//   let fullName = obj.firstNsame + " " + obj.lastName;
//   return {
//     ...obj,
//     fullName,
//   };
// });
// console.log(updatedArray);

//16th class
// const student = [
//   { id: 101, firstNsame: "Mominul", lastName: "Shimanto" },
//   { id: 102, firstNsame: "Labib", lastName: "Aziz" },
//   { id: 103, firstNsame: "Abdullah", lastName: "Naiem" },
//   { id: 104, firstNsame: "Ibrahim", lastName: "Molla" },
//   { id: 105, firstNsame: "Mahibul", lastName: "Afrid" },
// ];

// let number = [3, 4, 6, 8, 10];
// const myMap = (arr, callback) => {
//   if (!Array.isArray(arr)) {
//     throw new Error("Please provide an Array");
//   }
//   if (typeof callback !== "function") {
//     throw new Error("Please provide a Function");
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = callback(arr[i], i, arr);
//   }

//   return result;
// };
// let updatedStudents = myMap(student, (obj, i, arr) => {
//   let name = obj.firstNsame + " " + obj.lastName;
//   return {
//     ...obj,
//     fullName: name,
//   };
// });
// console.log(updatedStudents);
// //output [6,8,12,16,20]

//17th class
// const obj = {
//   name: "Akbor",
//   id: "123",
//   age: 24,
// };
// console.log(obj);
// const updateObj = {
//   ...obj,
//   id: 222,
// };
// console.log(updateObj);

const users = [
  { _id: 101, firstNsame: "Mominul", lastName: "Shimanto" },
  { _id: 102, firstNsame: "Labib", lastName: "Aziz" },
  { _id: 103, firstNsame: "Abdullah", lastName: "Naiem" },
  { _id: 104, firstNsame: "Ibrahim", lastName: "Molla" },
  { _id: 105, firstNsame: "Mahibul", lastName: "Afrid" },
];

//103
// const findInd = users.findIndex((item) => item._id === 103);
// users[findInd] = { _id: 103, firstNsame: "Fahim", lastName: "Naiem" };
// console.log(users);
const UpdateUsers = users.map((item) => {
  // if (item._id === 103) {
  //   // item.firstNsame = "Fahim";
  //   return {
  //     ...item,
  //     firstNsame: "Fahim",
  //     GPA: 5,
  //   };
  // }
  return {
    ...item,
    GPA: 5,
  };
});
console.log(UpdateUsers);
