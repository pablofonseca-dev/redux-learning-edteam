import { createStore } from 'redux'
import { ADD_TO_CAR, REMOVE_FROM_CAR } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStore = {
  car: [],
  courses: [],
}

const rootReducer = (state = initialStore, { id, type }) => {
  if (type === ADD_TO_CAR) {
    //if (!state.car.includes(action.id)) return state;
    if (state.car.find((product) => product == id)) return state
    return {
      ...state,
      car: state.car.concat(id),
    }
  }

  if (type === REMOVE_FROM_CAR) {
    if (state.car.find((product) => product == id)) {
      return {
        ...state,
        car: state.car.filter((product) => product !== id),
      }
    }
  }

  return state
}

export default createStore(rootReducer, composeWithDevTools())
