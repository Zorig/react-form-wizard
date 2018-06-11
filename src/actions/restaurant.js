import { RESTAURANT } from './types'

export const setRestaurant = restaurant => {
  return {
    type: RESTAURANT,
    restaurant
  }
}
