//use an enhance to shorten the code

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}


//Rewrite the code using Computed Propery Names

const favoriteNumber = 42;
const instructor =  {
    firstName : "Colt",
    [favoriteNumber] : "That's my favorite number!"
};

//Update these object methods 
// I used "teacher" in this problem to clear the error of having instructor twice.

const teacher = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
};

//Write a function that gnerates animal object with 3 arguments

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }