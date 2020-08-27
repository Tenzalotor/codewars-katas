function score( dice ) {
  let score = 0;
  const one = [];
  const two = [];
  const three = [];
  const four = [];
  const five = [];
  const six = [];

  for(let i = 0; i < dice.length; i++) {
    if(dice[i] == 1) {
      one.push(dice[i]);
    } else if(dice[i] == 2) {
      two.push(dice[i]);
    } else if(dice[i] == 3) {
      three.push(dice[i]);
    } else if(dice[i] == 4) {
      four.push(dice[i]);
    } else if(dice[i] == 5) {
      five.push(dice[i]);
    } else if(dice[i] == 6) {
      six.push(dice[i]);
    }
  }

  if(one.length < 3) {
    score = one.map(el => el * 50).reduce(sum, el => sum + el);
  } else if(one.length < 6) {
    let combo = one.splice(0, 3);
    
  }
}

console.log(score( [2, 4, 4, 5, 4] ));