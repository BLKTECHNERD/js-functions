// 2. maxOfThree (function expression)
const maxOfThree = function (num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  };
  
  console.log(maxOfThree(5, 10, 3)); // Expected output: 10
  
  // 3. isCharAVowel (function declaration)
  function isCharAVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log(isCharAVowel("a")); // Expected output: true
  console.log(isCharAVowel("b")); // Expected output: false
  
  // 4. sumArray (function expression)
  const sumArray = function (numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };
  
  console.log(sumArray([2, 4, 5])); // Expected output: 11
  
  // 5. multiplyArray (function declaration)
  function multiplyArray(numbers) {
    let product = 1;
    for (let number of numbers) {
      product *= number;
    }
    return product;
  }
  
  console.log(multiplyArray([2, 4, 5])); // Expected output: 40
  
  // 7. reverseString (function declaration)
  function reverseString(string) {
    return string.split("").reverse().join("");
  }
  
  console.log(reverseString("rockstar")); // Expected output: "ratskcor"
  
  // 9. stringsLongerThan (function declaration)
  function stringsLongerThan(strings, length) {
    return strings.filter((str) => str.length > length);
  }
  
  console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
  // Expected output: ["hello", "morning"]
  