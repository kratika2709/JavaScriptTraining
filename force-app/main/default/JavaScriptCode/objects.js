
// objects are key-value pairs in java script.
const student = {
    name: "Kratika",
    age: 22,
    isPresent : true,
    fees : undefined,

    //An objects can store arrays.
    datesWhenAbsent:[1,2,3],
    //An object can store other objects as well.
    address:{
        street:"Bombay street",
        pincode: '65879',
        city :"Bombay",
    },
}


const students = [student,{
    name: "abc",
    age:"33",
    fees: undefined,
    isPresent : true,
    datesWhenAbsent:[4,2,8],
    address:{
        street:"chennai street",
        pincode: '98980',
        city :"Chennai",
    },
}];

console.log(Object.entries(student));

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(student.age);

console.log(student["age"]);

console.log(student);

delete student.fees;
console.log(student);

console.log("jhon was absent on",student["datesWhenAbsent"]);

console.log(students);