import { RESET_GAME, GUESS_NUMBER, GUESS_NUMBER2, GUESS_NUMBER3, WIN_GAME } from '../types/types'

export const dedNum = (num, randomNum) => ({
  type: GUESS_NUMBER,

});
export const dedNum2 = (num, randomNum) => ({
  type: GUESS_NUMBER2,


});
export const dedNum3 = (num, randomNum) => ({
  type: GUESS_NUMBER3,

});

export const winGame = (num, randomNum) => ({
  type: WIN_GAME,
    
});

export const resetEl = () => ({
  type: RESET_GAME,
});