import { createSelector } from 'reselect'

const getMeal = state => state.food.dishes

export const mealSelector = createSelector(getMeal, dishes => dishes)
