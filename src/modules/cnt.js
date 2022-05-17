const INCREASE = "cnt/INCREASE";
const DECREASE = "cnt/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const init = {
  number: 0,
};

function cnt(state = init, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };

    case DECREASE:
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
}

export default cnt;
