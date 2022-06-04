let receiptInfo = receipt()
console.log(receiptInfo);

let sum = 0
let delivery = 9000
let order = 'you ordered '

for (let key in receiptInfo) {
    sum += receiptInfo[key].price
    order += `${key} ${receiptInfo[key].info}, `
}

let result = `${order} the whole sum is ${sum+delivery}, delivery is ${delivery}`

console.log(result);


//console.log(`You ordered ${key} ${receiptInfo[key].info} ${receiptInfo[key].price}`);