// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let newNum = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      newNum.push(numbers[i])

    }
  } return newNum

}
//console.log(greaterThanTen([1, 2, 3, 11, 12, 13]))

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let result = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    if (word[0] === 'b') {
      result.push(word);
    } else if (word[0] === 'B') {
      result.push(word)
    }
  } return result

}
//console.log(bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']))

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {

  return originalArray.concat(additionalItems)
}
//console.log(extend([1, 2, 3], [4, 5, 6]))

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {

  let matches = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (items[i].length === length) matches.push(items[i])
  }
  return matches
}

//console.log(itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3))

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let result = []
  for (let i = 0; i < items.length; i += 2) {
    result.push(items[i])
  } return result

}
//console.log(everyOtherItem(['a', 'b', 'c', 'd', 'e']))

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {

  let arr1 = []

  for (let index = 0; index < words.length; index++) {
    let word = words[index]

    if (word[0] === letter) {
      arr1.push(index);
    }

  } return arr1
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000, 2], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  // return Array.from(new Float64Array(items).sort().slice(0, n).reverse())
  // return items.sort((a, b) => a - b).slice(0, n).reverse()

  for (let i = 1; i < items.length; i++) {
    for (let j = 0; j < i; j++) {
      if (items[i] < items[j]) {
        var x = items[i];
        items[i] = items[j];
        items[j] = x;
      }
    }
  }
  return items.slice(0, n).reverse()
}
// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let index = 0; index < items.length; index++) {
    if (items[index] === value) {
      return index
    }
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {

  if (start > stop) {
    return []
  }

  let count = []

  for (let i = start; i <= stop; i++) {
    count.push(i)
  }

  return count

}
//console.log(range(1,5))
export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
