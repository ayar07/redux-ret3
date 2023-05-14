import { RESET_GAME, GUESS_NUMBER, GUESS_NUMBER2, GUESS_NUMBER3, WIN_GAME } from '../types/types'

const getNumber = (state = {}, action) => {
  switch (action.type) {
    case GUESS_NUMBER: {
        return {
          title: "Поздравляем вы отгадали число",
          description: "играть заново",
          completed: true,
        };
      }

    case GUESS_NUMBER2: {
      return {
        title: "Не правильно берите ниже",
        completed: false
      }
    }

    case GUESS_NUMBER3: {
      return {
        title: "Не правильно берите выше",
        completed: false
      }
    }

    case WIN_GAME: {
      return {
        title: "Вы выиграли!",
        description: "",
        completed: false,
      };
    }

    case RESET_GAME: {
      return {
        title: "",
        description: "",
        completed: false,
      };
    }
    default:
      return state;
  }
};

export default getNumber;