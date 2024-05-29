// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function Sum(arr) {
  let sum = 0;

  //use for loop:
  // for(i=0;i<arr.length;i++) {
  //     sum+= arr[i]
  // }

  //use forEach:
  arr.forEach((element) => {
    sum += element;
  });
  // console.log(sum)
  return sum;
}
Sum([2, 1, 11]);

// Take an array of numbers and return the average:

function avg(arr) {
  let sum = 0;
  let average;

  arr.forEach((element) => {
    sum += element;
  });
  average = sum / arr.length;
  //   console.log(average);

  return average;
}
avg([2, 3, 1]);

//Take an array of strings and return the longest string.

function longestString(arr) {
  let maxLength = 0;
  let longestS = "";
  arr.forEach((el) => {
    if (el.length > maxLength) {
      maxLength = el.length;
      longestS = el;
    }
  });
  //   console.log(longestS);
}

longestString(["hello", "bye", "friends"]);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arr, number) {
  let newArray = [];
  arr.forEach((el) => {
    if (el.length > number) {
      newArray.push(el);
    }
  });
  console.log(newArray);
  return newArray;
}

stringsLongerThan(["say", "hello", "in", "the", "morning"], 3);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n, current = 1) {
  if (current > n) {
    return;
  }

  console.log(current);
  printNumbers(n, current + 1);
}

printNumbers(5);
