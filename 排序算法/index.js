const insertSort = require('./03insert')
const quickSort = require('./04quick')
const mergeSort = require('./06merge')
const countingSort = require('./08counting')

const arr = []
for (let i = 0; i < 10000000; i++) {
  arr.push(Math.ceil(Math.random() * 10000000))
}

// const arr1 = JSON.parse(JSON.stringify(arr))
const arr2 = JSON.parse(JSON.stringify(arr))
// const arr3 = JSON.parse(JSON.stringify(arr))
const arr4 = JSON.parse(JSON.stringify(arr))
// console.time('insert')
// insertSort(arr1)
// console.timeEnd('insert')

console.time('quick')
quickSort(arr2)
console.timeEnd('quick')

// console.time('merge')
// mergeSort(arr3)
// console.timeEnd('merge')

console.time('count')
countingSort(arr4)
console.timeEnd('count')
