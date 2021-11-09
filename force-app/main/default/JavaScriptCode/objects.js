
// objects are key-value pairs in java script.
const student = {
    name: "Kratika",
    age: 22,
    isPresent : true,
    fees : undefined,
    datesWhenAbsent:[1,2,3]
}
console.log(Object.entries(student));

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(student.age);

console.log(student["age"]);

console.log(student);

delete student.fees;
console.log(student);

console.log("jhon was absent on",student["datesWhenAbsent"]);