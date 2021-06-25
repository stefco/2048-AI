function AI(grid) {
  this.grid = grid;
}

// performs a search and returns the best move
AI.prototype.getBest = function(last, last_direction) {
  if (last === undefined || last_direction === undefined || last.moved) {
    return { move: 2 };
  } else if (last_direction.move !== 3) {
    return { move: 3 };
  } else if (last_direction.move !== 1) {
    return { move: 1 };
  } else {
    return { move: 0 };
  }
  //return { move: Math.floor(Math.random()*4) };
}
