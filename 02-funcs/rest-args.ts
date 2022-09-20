const arr1 = [1, 2, 3]
const arr22 = [11, 22, 33]
arr1.push(...arr22)
console.log(arr1)

const args = [8, 5] as const
const angle = Math.atan2(...args)
