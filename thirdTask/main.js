let array = []
let addArray

for(let i = 0; i < Infinity; i++){
    message = prompt('type your command', 'del, add, stop')
    addArray = message.split(', ')
    if(addArray[0] == 'add'){
        array.push(addArray[1])
    } else if(addArray[0] == 'del'){
        array.pop(addArray[1])
    }
    else if(message == 'stop'){
            break;
        }
    console.log(array);
}






// if (message == `add, ${message}`){
//     array.push(array)
// } else if(message == `del, ${message}`){
//     array.pop(array)
// } else if(message == 'stop'){
//     break;
// }

// if (message == `add, ${message}`) {
//     array.push(message)
// } else if(message == `del, ${message}`){
//     array.pop(message)
// } else if(message == 'stop'){
//     break;
// } else{}