// Sort the array by age.

const myArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

function sortbyAge(arr) {
  let sortedArray = arr.sort((a, b) => a.age - b.age);
  return sortedArray;
}

const sortedData = sortbyAge(myArray);
console.log(sortedData);

// Filter the array to remove entries with an age greater than 50.

function filterbyAge(arr) {
  return arr.filter((item) => item.age <= 50);
}
const filterdData = filterbyAge(myArray);
console.log(filterdData);

// Map the array to change the “occupation” key to “job” and increment every age by 1.

function manipulateJobandAge(arr) {
  return arr.map((item) => {
    return {
      id: item.id,
      name: item.name,
      job: item.occupation,
      //to prevent act as string:
      age: parseInt(item.age) + 1,
    };
  });
}
const mappedData = manipulateJobandAge(myArray);
console.log(mappedData);
// Use the reduce method to calculate the sum of the ages:

function sumOfAges(arr) {
  return arr.reduce((age, item) => {
    return age + parseInt(item.age);
  }, 0);
}

const totalAge = sumOfAges(myArray);
console.log(totalAge);

// Then use the result to calculate the average age:

function AverageAge(arr) {
  const averageAge = totalAge / arr.length;
  return averageAge;
}

const avgAge = AverageAge(myArray);
console.log(avgAge);
