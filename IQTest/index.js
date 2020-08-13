function iqTest(numbers){
  numArr = numbers.split(' ');
  oddCount = 0;
  evenCount = 0;
  oddNumber = 0;
  evenNumber = 0;

  for(let i = 0; i < numArr.length; i++) {
    if(numArr[i] % 2 == 0) {
      evenNumber = i + 1;
      evenCount++;
    } else {
      oddNumber = i + 1;
      oddCount++;
    }
  }

  if(evenCount == 1) {
    return evenNumber;
  } else {
    return oddNumber;
  }
}

console.log(iqTest("2 4 7 8 10"));
