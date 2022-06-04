let infoUsers = {
    
}

for (i = 1; i <= 3; i++) {
    infoUsers[i] = {}
    infoUsers[i].infoUserName = prompt('Type user name')
    infoUsers[i].infoUserAge = +prompt('Type the age')
}

for(let key in infoUsers){
    console.log(`User ${key}`);
    console.log(`Name ${infoUsers[key].infoUserName}`);
    console.log(`Age ${infoUsers[key].infoUserAge}`);
}

console.log(infoUsers);


