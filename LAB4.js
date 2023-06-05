// B. STRINGS

let firstVariable = "Hello World"; // Assigning a string value to firstVariable
firstVariable = 42; // Changing the value of firstVariable to a number

let secondVariable = firstVariable; // Storing the value of firstVariable in secondVariable
secondVariable = "New String"; // Changing the value of secondVariable to a string

console.log(firstVariable); // Output: 42 (the current value of firstVariable)

let yourName = "Honey"; // Setting the value of yourName variable to your name as a string
let greeting = "Hello, my name is " + yourName; // Concatenating the string "Hello, my name is " with the value of yourName

console.log(greeting); // Output: "Hello, my name is Honey" (the concatenated string)

// C. BOOLEANS

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b); // true (4 is less than 53)
console.log(c > d); // true (57 is greater than 16)
console.log("Name" === "Name"); // true (the string 'Name' is equal to the string 'Name')

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false); // true (at least one operand is true)
console.log(false && false && false && false && false && true); // false (all operands are false except the last one)
console.log(false || false); // false (both operands are false)
console.log(e === "Kevin"); // true (the string 'Kevin' is equal to the value of variable e)

console.log(a < b && b < c); // true (4 is less than 53, and 53 is less than 57)
console.log(a === a && a !== d); // true (a is equal to itself, and a is not equal to d)

console.log(Number(48) == "48"); // true (the number 48 is loosely equal to the string '48')

// D. THE FARM

// Declare a variable animal
let animal = "cow";

// Check if the animal is equal to "cow"
if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// E. DRIVERS ED

// Declare a variable to hold a person's age
let age = 16;

// Check if the age is 16 years or older
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// LOOPS

// A. THE BASICS

// Print numbers from 0 to 10 (inclusive)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Print numbers from 10 to 400 (inclusive)
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

// Print every third number from 12 to 4000 (inclusive)
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. GET EVEN

// Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // Check if the number is even
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  }
}

// C. GIVE ME FIVE

// Print numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  // Check if the number is divisible by 5
  if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  }

  // Check if the number is divisible by 3
  if (i % 3 === 0) {
    console.log("I found a " + i + ". Three is a crowd.");
  }
}

// D. SAVINGS ACCOUNT

let bank_account = 0;

// Add numbers from 1 to 10 to the bank_account
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}

console.log(bank_account); // Output: 55

// Reset bank_account to 0
bank_account = 0;

// Add double the sum of numbers from 1 to 100 to the bank_account
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

console.log(bank_account); // Output: 10100

// ARRAYS AND CONTROL FLOW

// B. EASY DOES IT

const quote = ["Quote 1", "Quote 2", "Quote 3"];

// C. ASSESSING ELEMENTS

const randomThings = [1, 10, "Hello", true];

// Access the 1st element in the array (index 0)
console.log(randomThings[0]);

// Access the 3rd element in the array (index 2)
console.log(randomThings[2]);

// D. CHANGING VALUES

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

console.log(ourClass); // Output: ["Salty", "Zoom", "Sardine", "Slack", "Octocat", "Cloud City"]

// E. MIX IT UP

const myArray = [5, 10, 500, 20];

// Add the string "Aegon" to the end of the array
myArray.push("Aegon");

// Add another string of your choice to the end of the array
myArray.push("Stark");

// Remove the 5 from the beginning of the array
myArray.shift();

// Add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array
myArray.pop();

// Reverse the array
myArray.reverse();

console.log(myArray); // Output: [20, 500, 10, "Aegon", "Bob Marley"]

// F. BIGGIE SMALLS

const number = 85;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. MONKEY IN THE MIDDLE

const myNumber = 7;

if (myNumber < 5) {
  console.log("little number");
} else if (myNumber > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. WHATS IN YOUR CLOSET

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up"
  ],
  ["grey jeans", "jeans", "PJs"],
  ["wool mittens", "wool scarf", "raybans"]
];

// Log what Kristyn is wearing today
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Add "

// IV FUNCTIONS

// A. printGREETING

function printGreeting(name) {
  return "Hello there, " + name + "!";
}

console.log(printGreeting("Slimer")); // Output: Hello there, Slimer!

// B. printCOOL

function printCool(name) {
  console.log(name + " is cool");
}

printCool("Captain Reynolds"); // Output: Captain Reynolds is cool

// C. calculateCOOL

function calculateCube(num) {
  var volume = Math.pow(num, 3);
  console.log(volume);
}

calculateCube(5); // Output: 125

// D. isVOWEL

function isVowel(character) {
  var lowercaseChar = character.toLowerCase();
  return (
    lowercaseChar === "a" ||
    lowercaseChar === "e" ||
    lowercaseChar === "i" ||
    lowercaseChar === "o" ||
    lowercaseChar === "u"
  );
}

console.log(isVowel("a")); // Output: true
console.log(isVowel("E")); // Output: true
console.log(isVowel("x")); // Output: false

// E. getTwoLengths

function getTwoLengths(str1, str2) {
  var length1 = str1.length;
  var length2 = str2.length;
  return [length1, length2];
}

console.log(getTwoLengths("Hank", "Hippopopalous")); // Output: [4, 13]

// F. getMultipleLengths

function getMultipleLengths(arr) {
  var lengths = [];
  for (var i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // Output: [5, 4, 2, 2, 4]

// G. maxOfThree

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(6, 9, 1)); // Output: 9
console.log(maxOfThree(3, 3, 3)); // Output: 3
console.log(maxOfThree(10, 2, 10)); // Output: 10

// H. printLongestWord

function printLongestWord(words) {
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd"
  ])
); // Output: "Peanutbutter"

// OBJECTS

// A. MAKE A USER OBJECT

var user = {
  name: "John Doe",
  email: "johndoe@example.com",
  age: 25,
  purchased: []
};

// B. UPDATE THE USER

// Changing email address
user.email = "johndoe@gmail.com";

// Incrementing age
user.age++;

// C. ADDING KEYS AND VALUES

// Adding location
user.location = "New York";

// D. SHOPAHOLIC!

// Adding purchased items
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

// Accessing "Merino jodhpurs" from purchased array
console.log(user.purchased[2]);

// E. OBJECT WITHIN AN OBJECT

// Adding friend object
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "San Francisco",
  purchased: []
};

// Accessing friend's name
console.log(user.friend.name);

// Accessing friend's location
console.log(user.friend.location);

// Changing friend's age
user.friend.age = 55;

// Adding purchased items for friend
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

// Accessing "A latte" from friend's purchased array
console.log(user.friend.purchased[1]);

// F. LOOPS

// Looping over User's purchased array
for (var i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

// Looping over Friend's purchased array
for (var j = 0; j < user.friend.purchased.length; j++) {
  console.log(user.friend.purchased[j]);
}

// G. FUNCTIONS OPERATING ON OBJECTS

// Function to update user
function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

updateUser();

// Function to modify any person object
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}

oldAndLoud(user);
