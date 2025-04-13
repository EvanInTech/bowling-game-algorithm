const rolls = [4, 3, 7, 5, 2, 8, 1, 4, 6, 2, 4, 8, 0, 8, 0, 8, 2, 10, 1, 7]; // 110

function calculateBowlingScore(rolls){
  let score = 0;
  let frames = 0;

  for(let i = 0; i < rolls.length; i++){
    if(rolls[i] === 10){ // strike
      score += 10 + (rolls[i + 1] + rolls[i +2]);
      frames++;
    }
    else if((rolls[i] + rolls[i + 1]) === 10){ // spare
      score += 10 + rolls[i + 1];
      frames++;
    }else{
      score += rolls[i] + rolls[i + 1];
      frames++;
    }

    if(frames === 10) break;
  }

  return score;
}
