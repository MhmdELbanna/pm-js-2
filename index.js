// Problem 1:

// ####################################

// function number(num){
//     let str = num.toString();
//       return str.slice(0,1)
// }
// console.log(number(prompt()));
// ####################################

// Problem 2:

// ####################################
// function countNumbers(arr) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let evenCount = 0;
//     let oddCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         positiveCount++;
//       } else if (arr[i] < 0) {
//         negativeCount++;
//       }
//       if (arr[i] % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     }
//     console.log('positive: ' +positiveCount)
//     console.log(negativeCount)
//     console.log(evenCount)
//     console.log(oddCount)
//   }
//   let numbers = [5,7,-2,0,4,-8,-3,6];
//  countNumbers(numbers)

// ####################################

// Problem 3:

// ####################################

// function test(arr) {
//     let x = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0 ){
//             x.push(arr[i]);}
//         else {console.log("error");}
//     }
//     console.log(x);
// }
// test([1, , 2, "a", "aba"]);

// ####################################

// Problem 5:

// ####################################

// function lg_num(arrays) {
//     map==forloop //
//     let result = arrays.map(subarray => Math.max(/**...Spread Operator */...subarray));
//     return result;
// }

// let input = [[1, 2, 3, 4], [45, 73, 12], [13, 13, 10]];

// console.log(lg_num(input)); 

// ####################################

// Problem 9:

// ####################################
// function check_char(arr, char) {
//     let x = -1;
//     let y = -1;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === char) {
//         if (x=== -1) {
//           x = i;
//         }
//         y = i;
//       }
//     }
  
//     console.log([x, y]) ;
//   }
// let array =['h', 'e', 'l', 'l', 'o'] ;
// let character = 'l';

// console.log(check_char(array, character)); // Output: [2, 3]