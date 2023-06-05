class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old!`);
    }
  }
  
  class Human extends Animal {
    constructor(name, age, occupation, location) {
      super(name, age);
      this.occupation = occupation;
      this.location = location;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    }
  }
  
  const person = new Human(
    'Honey',
    31,
    'Software Engineer',
    {
      city: 'Los Angeles',
      state: 'California',
      zip: '91401',
    }
  );
  
  person.introduce(); // Output: Hello, my name is Elyan, and I'm a 32-year-old Front-End Developer from Garland, Texas!
  