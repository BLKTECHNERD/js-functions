const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog"
];

// EVERY
const everyNums = nums.every((num) => num >= 0);
const everyWords = panagram.every((word) => word.length < 8);

console.log(everyNums); // false
console.log(everyWords); // true

// FILTER
const filteredNums = nums.filter((num) => num < 4);
const filteredWords = panagram.filter((word) => word.length % 2 === 0);

console.log(filteredNums); // [1, 2, 3, 0]
console.log(filteredWords); // ['over', 'lazy']

// FIND
const firstDivisibleBy5 = nums.find((num) => num % 5 === 0);
const firstLongerThan5 = panagram.find((word) => word.length > 5);

console.log(firstDivisibleBy5); // 5
console.log(firstLongerThan5); // 'quick'

// FIND INDEX
const indexDivisibleBy3 = nums.findIndex((num) => num % 3 === 0);
const indexShorterThan2 = panagram.findIndex((word) => word.length < 2);

console.log(indexDivisibleBy3); // 2
console.log(indexShorterThan2); // -1 (no word found)

// FOR EACH
nums.forEach((num) => console.log(num * 3));
panagram.forEach((word) => console.log(word + "!"));

// MAP
const multipliedBy100 = nums.map((num) => num * 100);
const uppercaseWords = panagram.map((word) => word.toUpperCase());

console.log(multipliedBy100); // [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 0]
console.log(uppercaseWords); // ['THE', 'QUICK', 'BROWN', 'FOX', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG']

// SOME
const someDivisibleBy7 = nums.some((num) => num % 7 === 0);
const someHasLetterA = panagram.some((word) => word.includes("a"));

console.log(someDivisibleBy7); // true
console.log(someHasLetterA); // true
