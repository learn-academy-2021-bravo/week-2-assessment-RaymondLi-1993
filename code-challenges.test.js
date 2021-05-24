// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

//PESUDO CODE
//Create a function that takes in a number and checks if its evenly divisble by 3
//use the moduluo and check if the remainder is = 0
//if it is 0 then I want to console.log("num is divisible by three")
//else console.log(num is not divisible by three)


// b) Create the function that makes the test pass.

describe ("divisbleByThree", ()=>{
    test ("returns if the number divides into three evenly", () =>{
        expect(divisbleByThree(num1)).toEqual(`15 is divisible by three`)
        expect(divisbleByThree(num2)).toEqual(`0 is divisible by three`)
        expect(divisbleByThree(num3)).toEqual(`-7 is not divisible by three`)
    })
})

const divisbleByThree = (num) => {
    if(num % 3 === 0){
       return `${num} is divisible by three` 
    } else {
        return `${num} is not divisible by three`
    }
 }



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


//PESUDO CODE
//I would iterate over the entire array
//for each element use the built in method ToUpperCase();
//the map method would allow me to access each element and I would need to target the first letter
//capitalized the first letter
//use slice method
//return the function which would return an array with all the first letters capitalized

describe ("toUpperCase", ()=>{
    test ("return first character of each word capitalized", () =>{
        expect(toUpperCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(toUpperCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
      
    })
})


// b) Create the function that makes the test pass.

const toUpperCase = (array) => {
    return array.map((elem) => {
        return elem.charAt(0).toUpperCase() + elem.slice(1);
    }) 
 }





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2


//I can create an array of vowels that will be checked against the string
//I will than iterate through every single variable of the string
//at the first instance the string character is a vowel I will return the index;

describe ("vowelChecker", ()=>{
    test ("return first instance a vowel is found", () =>{
        expect(vowelChecker(vowelTester1)).toEqual(1)
        expect(vowelChecker(vowelTester2)).toEqual(0)
        expect(vowelChecker(vowelTester3)).toEqual(2)
    })
})




// b) Create the function that makes the test pass.


const vowelChecker = (array) => {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < array.length; ++i){
      if(vowels.includes(array[i])){
          return i;
      }
  }
}





