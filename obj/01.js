const person = {
    firstName: 'john',
    lastName: 'DOE',
    age: 30,
    isEmployed: true,
    greet: function(){
        console.log("Hello")
    }
};
// console.log(person.greet())
// for(let x in person){
//     console.log(`${x} : ${person[x]}`)
//     console.log(x)
// }

for(let key in person){
   if (person.hasOwnProperty(key)){
    console.log(key + `:`+ person[key]);
}
}

// key= "test"
// if (person.hasOwnProperty(key)){
//     console.log(key + `:`+ person[key]);
// }