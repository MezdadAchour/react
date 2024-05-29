///////////////////////////////////////Vowel Count///////////////////////////////////////

function evenOrOdd(number) {
return number % 2 === 0 ? "Even" : "Odd";
}

///////////////////////////////////////Opposite number//////////////////////////////////

function opposite(number) {
  return (number*-1);
}

///////////////////////////////////////Get the Middle Character////////////////////////

function getMiddle(s)
{
  const len = s.length;
  const middleIndex = Math.floor(len / 2);

  if (len % 2 === 0) {
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  
}}

///////////////////////////////////////Mumbling///////////////////////////////////////
function accum(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-';
  }
  return result.slice(0, -1);
}
///////////////////////////////////////You're a square!///////////////////////////////
var isSquare = function(n){
  if (n < 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}

////////////////////////////////////Disemvowel Trolls/////////////////////////////////
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';

  for (const char of str) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }

  return result;
}

/////////////////////////////////Highest and Lowest/////////////////////////////////
function highAndLow(numbers){
  const numArray = numbers.split(' ').map(Number);
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  return `${max} ${min}`;
  
  }


/////////////////////////////////