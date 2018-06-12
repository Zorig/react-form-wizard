import { createSelector } from 'reselect'

const getRestaurant = state => state.food

export const restaurantSelector = createSelector(getRestaurant, food => {
  return food.data.filter(res => res.availableMeals.includes(food.meal))
})
