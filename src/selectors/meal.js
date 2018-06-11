import { createSelector } from 'reselect'

const getMeal = state => state.food

export const mealSelector = createSelector(getMeal, food => food)
