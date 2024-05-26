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
