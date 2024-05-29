// Take an object and increment its age field.

function incrementAge(obj){
    if (obj.age !== undefined) { obj.age += 1;}

}
const person ={ id: "42", name: "Bruce", occupation: "Knight", age: 41}

incrementAge(person)

console.log(person);

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

function incrementAge(obj) {
  newObj = { ...obj };
  if (newObj.age !== undefined) {
    newObj.age += 1;
  }
  return newObj;
}

const person2 = { id: "42", name: "Bruce", occupation: "Knight", age: 41 };
const NewPerson = incrementAge(person2);

console.log(NewPerson);
