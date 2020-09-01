var moveZeros = function (arr) {
    let zeroArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            zeroArr.push(Number(arr.splice(i, 1)));
            i--;
        }
    }

    return arr.concat(zeroArr);
}

console.log(moveZeros(["a",0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));