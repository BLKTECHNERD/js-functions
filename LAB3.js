const personOne = {
    name: {
      first: 'Timmy',
      last: 'Timtim'
    },
    age: 30,
    location: {
      city: 'New York',
      state: 'New York',
      zip: 10001
    }
  };
  
  const personTwo = {
    name: {
      first: 'Julie',
      last: 'July'
    },
    age: 28,
    location: {
      city: 'Albany',
      state: 'New York',
      zip: 12201
    }
  };
  
  // Task 1: moveLocation()
  function moveLocation(person, location) {
    person.location = location;
  }
  
  const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
  };
  
  moveLocation(personTwo, nLoc);
  console.log(personTwo.location.city); // Rochester
  
  nLoc.city = 'Buffalo';
  nLoc.zip = 14201;
  
  // Task 2: Set Julie's location to Timmy's location by reference
  moveLocation(personOne, personTwo.location);
  console.log(personOne.location.city); // Rochester
  console.log(personTwo.location.city); // Rochester
  
  // Task 3: Create personThree and set their properties
  const personThree = {
    name: {
      first: 'Michael',
      last: personOne.name.last + '-' + personTwo.name.last
    },
    age: 0,
    location: personOne.location
  };
  
  // Task 4: Increment everyone's age values by 20
  personOne.age += 20;
  personTwo.age += 20;
  personThree.age += 20;
  
  // Create a copy of personThree's location
  const personThreeLocationCopy = {
    ...personThree.location
  };
  
  // Set personThree's location to the copy
  personThree.location = personThreeLocationCopy;
  
  // Move personThree to a new location
  const newLocation = {
    city: 'San Francisco',
    state: 'California',
    zip: 94101
  };
  
  moveLocation(personThree, newLocation);
  
  // Task 5: Increment everyone's age values by 300
  personOne.age += 300;
  personTwo.age += 300;
  personThree.age += 300;
  
  // Task 6: Create a clonePerson() function to deep copy a person object
  function clonePerson(person) {
    return JSON.parse(JSON.stringify(person));
  }
  
  // Create clones of persons
  const cloneOne = clonePerson(personOne);
  const cloneTwo = clonePerson(personTwo);
  const cloneThree = clonePerson(personThree);
  
  // Move clones to different locations
  const cloneOneLocation = {
    city: 'Los Angeles',
    state: 'California',
    zip: 90001
  };
  const cloneTwoLocation = {
    city: 'Seattle',
    state: 'Washington',
    zip: 98101
  };
  const cloneThreeLocation = {
    city: 'Chicago',
    state: 'Illinois',
    zip: 60601
  };
  
  moveLocation(cloneOne, cloneOneLocation);
  moveLocation(cloneTwo, cloneTwoLocation);
  moveLocation(cloneThree, cloneThreeLocation);
  
  // Task 7: Create thoughts object and link it to all persons and clones
  const thoughts = {
    message: 'This is a shared thought.'
  };
  
  personOne.thoughts = thoughts;
  personTwo.thoughts = thoughts;
  personThree.thoughts = thoughts;
  cloneOne.thoughts = thoughts;
  cloneTwo.thoughts = thoughts;
  cloneThree.thoughts = thoughts;
  
  // Modify everyone's thoughts with a single line of code
  thoughts.message = 'New shared thought!';
  
  console.log(personOne.thoughts.message);
  console.log(personTwo.thoughts.message);
  console.log(personThree.thoughts.message);
  console.log(cloneOne.thoughts.message);
  console.log(cloneTwo.thoughts.message);
  console.log(cloneThree.thoughts.message);
  