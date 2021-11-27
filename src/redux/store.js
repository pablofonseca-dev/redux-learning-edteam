import { createStore } from "redux";
import { ADD_TO_CAR, REMOVE_FROM_CAR} from "./actions";

const initialStore = {
  car: [],
};

const rootReducer = (state = initialStore, { id, type }) => {
  if (type === ADD_TO_CAR) {
    //if (!state.car.includes(action.id)) return state;
    if (state.car.find((product) => product == id)) return state;
    return {
      ...state,
      car: state.car.concat(id),
    };
  }

  if (type === REMOVE_FROM_CAR) {
    if (state.car.find((product) => product == id)) {
      state.car.splice(state.car.indexOf(id), 1)
      return {
        ...state,
        car: state.car
      };
    }
  }

  return state;
};

export default createStore(rootReducer);
