import { createSelector } from 'reselect'

const getDish = state => state.food

export const dishOptionSelector = createSelector(getDish, meals => {
  return meals.data.filter(
    meal =>
      meal.availableMeals.includes(meals.meal) &&
      meal.restaurant === meals.restaurant.restaurant
  )
})
