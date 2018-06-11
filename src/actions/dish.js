import { DISH, ADD_DISH } from './types'

export const setDISH = dishes => {
  return {
    type: DISH,
    dishes
  }
}

export const addDish = () => {
  return {
    type: ADD_DISH
  }
}
