import { createSelector } from 'reselect'

const getRestaurant = state => state.food.data

export const restaurantSelector = createSelector(getRestaurant, food =>
  food.map(res => {
    return { label: res.restaurant, value: res.id }
  })
)
