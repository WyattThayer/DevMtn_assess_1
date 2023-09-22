// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  let sum = x + y
  return sum / 2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
if (Math.round(x) == Math.round(y)){
  return true
} else {
  return false
}

}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  //First name to capital
  let firstLetter = firstName[0]
    firstLetter = firstLetter.toUpperCase()
  let otherLetters = firstName.slice(1);
    otherLetters = otherLetters.toLowerCase()
  firstName = firstLetter + otherLetters
// last name to capital
  let lFirstLetter = lastName[0]
    lFirstLetter = lFirstLetter.toUpperCase()
  let lOtherLetters = lastName.slice(1);
    lOtherLetters = lOtherLetters.toLowerCase()
  lastName = lFirstLetter + lOtherLetters
  //combine name with a space
  return `${firstName} ${lCapName}`
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {

  return `${person} was drinking ${beverage} at ${location}`

}

// Return the given string with all vowels replaced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) { 
  let pain = string.replace(/[aeiou]/gi, '*')
  return pain
  }


// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  let splitStr= string.split(' ')
  let newArr = []


  for (i=0; i < splitStr.length; i += 2){
    let letters = splitStr[i].split("");
    for (j = 0; j < letters.length; j ++){
      if (letters.indexOf(letters[j]) % 2 === 1){
        letters[j] = letters[j].toUpperCase()
      }
  }newArr.push(letters.join(''))
}return newArr
} // this one was really rough...

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
