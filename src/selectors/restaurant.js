import { createSelector } from 'reselect'

const getRestaurant = state => state.food

export const restaurantSelector = createSelector(
  getRestaurant,
  restaurant => restaurant
)
