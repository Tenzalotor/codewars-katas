function XO(str) {
    let xCount = 0;
    let oCount = 0;

    str.split('').map(el => {
      if((/[x]/gi).test(el)) {
        xCount++;
      } else if((/[o]/gi).test(el)) {
        oCount++;
      }
    });

    if(xCount == oCount) {
      return true;
    } else if(str.length == 0) {
      return true;
    } else if(xCount == 0 && oCount == 0) {
      return true;
    } else {
      return false;
    }
}

console.log(XO("xxxm"));
