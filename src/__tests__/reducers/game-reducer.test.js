import gameReducer from "../../reducers/game-reducer";

describe('gameReducer', () => {
  let action;
  test("Should return default new game state", () =>{
    action = {
      type: 'START_GAME',
      w: 16,
      h:16,
      mineCount:40
    };
    expect(gameReducer({}, action)).toEqual({
      w: 16,
      h: 16,
      mineCount:40,
      lost: false,
      won: false,
      minesPlaced: false,
      grid: range(16).map((y) => range(16).map((x) => { // create a 2d grid of cells
        return {
          id: `cell-${x}-${y}`,
          x, y,
          flagged: false,
          mine: false,
          revealed: false
        };
      }))
    })
  })
});

function range(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}