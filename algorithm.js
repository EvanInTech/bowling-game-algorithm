const rolls = [4, 3, 7, 5, 2, 8, 1, 4, 6, 2, 4, 8, 0, 8, 0, 8, 2, 10, 1, 7]; // 110

function calculateBowlingScore(rolls){
  let score = 0;
  let rollIndex = 0;

  for(let i = 0; i < 10; i++){
    if(rolls[rollIndex] === 10){ // strike
      score += 10 + (rolls[rollIndex + 1] + rolls[rollIndex + 2]);
      rollIndex += 1;
    }
    else if((rolls[rollIndex] + rolls[rollIndex + 1]) === 10){ // spare
      score += 10 + rolls[rollIndex + 2];
      rollIndex += 2;
    }else{
      score += rolls[rollIndex] + rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }

  return score;
}


console.log(calculateBowlingScore(rolls));
