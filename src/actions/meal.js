import { MEAL_TYPE, NUMBER_PEOPLE } from './types'

export const setMealType = meal => {
  return {
    type: MEAL_TYPE,
    meal
  }
}

export const setNumberOfPeople = numberOfPeople => ({
  type: NUMBER_PEOPLE,
  numberOfPeople
})
