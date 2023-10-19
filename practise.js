// let array = [3, 4, 5, 67, 2, 3, 4, 6];

// function slicedArr(arr, target) {
//   let final = [];
//   let tTarget = target;

//   for (let i = 0; i < arr.length; i += target) {
//     console.log(i);
//     let t = arr.slice(i, tTarget);
//     final.push(t);
//     tTarget += target;
//   }

//   return final;
// }
// console.log(slicedArr(array, 2));

// slice(start, end)
// substring(start, end)
// substr(start, length)

// let ru = "Rajshahi University";
// let sliced = ru.slice(-ru.length, -7);
// console.log(sliced);
// let arr = ru.split(" ")[1];
// console.log(arr);

// for (let i = 0; i < ru.length; i++) {
//   console.log(ru[i]);
// }

let myString = "Hello, World";
myString = myString.replace("World", "Universe")
console.log(myString)