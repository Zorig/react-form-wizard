import { DISH } from '../actions'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISH:
      return {
        ...state,
        dish: action.dish
      }
    default:
      return state
  }
}
