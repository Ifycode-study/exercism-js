
/* Question:

Instructions
Given a word, compute the Scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

Examples
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14
Extensions
You can play a double or a triple letter.
You can play a double or a triple word.

*/


// Helpful resources
// https://stackoverflow.com/a/22410812
// https://stackoverflow.com/a/28191966


const score = (string) => {

  const lettersWithValues = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  };

  let count = 0;
  let newString = '';

  [...string].forEach((s) => {
    const value = Number(
      Object.keys(lettersWithValues).find(key => lettersWithValues[key].filter(letter => letter === s.toUpperCase())[0] === s.toUpperCase())
    );

    let justOne;
    if (newString.includes(s)) {
      newString += '';
      justOne = 0;
    } else {
      newString += s
      justOne = string.split(s).length - 1;
    }

    let multipliedPoint = (justOne) * value;
    count += multipliedPoint;

  });

  return count;

}

console.log(score('cabbage'));


//---------------------------------------

// Other fun experiments:

//----------------------------------------

// 1.

// let letterCount = (string) => {
//   let singleLetters = '';
  
//   [...string].forEach((s) => {
//     let numAlpha = `${string.split(s).length - 1}${s}`;
//     singleLetters.includes(numAlpha) ? singleLetters += '' : singleLetters += numAlpha;
//   });

//   return singleLetters;
// }

// console.log(letterCount('CABBAGEEE')); // 1C2A2B1G3E

//----------------------------------

// 2.

//console.log(Object.keys(lettersWithValues).find(key => lettersWithValues[key].filter(letter => letter === 'Q')[0] === 'Q'));