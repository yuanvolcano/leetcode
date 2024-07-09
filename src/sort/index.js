import { quickSort, quickSort2 } from './04quick.js';

const arr = []
for (let i = 0; i < 1000000; i++) {
  arr.push(Math.ceil(Math.random() * 1000000))
}

// const arr1 = JSON.parse(JSON.stringify(arr))
const arr2 = JSON.parse(JSON.stringify(arr))
// const arr3 = JSON.parse(JSON.stringify(arr))
const arr4 = JSON.parse(JSON.stringify(arr))
// console.time('insert')
// insertSort(arr1)
// console.timeEnd('insert')

console.time('quick1')
quickSort(arr2)
console.timeEnd('quick1')

// console.time('merge')
// mergeSort(arr3)
// console.timeEnd('merge')

console.time('quick1')
quickSort2(arr4)
console.timeEnd('quick1')
