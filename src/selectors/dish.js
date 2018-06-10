import { createSelector } from 'reselect'

const getDish = state => state.food

export const dishSelector = createSelector(getDish, dishes => dishes)
