import { DISH, ADD_DISH, NUMBER_SERVINGS, REMOVE_DISH } from './types'

export const setDish = dish => {
  return {
    type: DISH,
    dish
  }
}

export const setNumberOfServings = (number, index) => {
  console.log(number, index)
  return {
    type: NUMBER_SERVINGS,
    number,
    index
  }
}

export const addDish = () => {
  return {
    type: ADD_DISH
  }
}

export const removeDish = index => {
  return {
    type: REMOVE_DISH,
    index
  }
}
