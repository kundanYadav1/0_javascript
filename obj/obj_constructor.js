const person = new Object();
console.log(person)
person.firstName='john';
person.lastName='Doe';
person.age='30';
person.isEmployed='true';
person.greet = function(){
    console.log("hello");
}
console.log(person)