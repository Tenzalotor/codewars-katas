function findShort(s){
  let min = Infinity;
  const stringsArr = s.split(' ');
  console.log(stringsArr);

  for(let i = 0; i < stringsArr.length; i++) {
    if(stringsArr[i].length < min) {
      min = stringsArr[i].length;
    }
  }
  return min;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));