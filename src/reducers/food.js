import {
  MEAL_TYPE,
  NUMBER_PEOPLE,
  RESTAURANT,
  DISH,
  ADD_DISH,
  REMOVE_DISH,
  NUMBER_SERVINGS
} from '../actions'

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: 'Chicken Burger',
      restaurant: 'Mc Donalds',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 2,
      name: 'Ham Burger',
      restaurant: 'Mc Donalds',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 3,
      name: 'Cheese Burger',
      restaurant: 'Mc Donalds',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 4,
      name: 'Fries',
      restaurant: 'Mc Donalds',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 5,
      name: 'Egg Muffin',
      restaurant: 'Mc Donalds',
      availableMeals: ['breakfast']
    },
    {
      id: 6,
      name: 'Burrito',
      restaurant: 'Taco Bell',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 7,
      name: 'Tacos',
      restaurant: 'Taco Bell',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 8,
      name: 'Quesadilla',
      restaurant: 'Taco Bell',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 9,
      name: 'Steak',
      restaurant: 'BBQ Hut',
      availableMeals: ['dinner']
    },
    {
      id: 10,
      name: 'Yakitori',
      restaurant: 'BBQ Hut',
      availableMeals: ['dinner']
    },
    {
      id: 11,
      name: 'Nankotsu',
      restaurant: 'BBQ Hut',
      availableMeals: ['dinner']
    },
    {
      id: 12,
      name: 'Piman',
      restaurant: 'BBQ Hut',
      availableMeals: ['dinner']
    },
    {
      id: 13,
      name: 'Vegan Bento',
      restaurant: 'Vege Deli',
      availableMeals: ['lunch']
    },
    {
      id: 14,
      name: 'Coleslaw Sandwich',
      restaurant: 'Vege Deli',
      availableMeals: ['breakfast']
    },
    {
      id: 15,
      name: 'Grilled Sandwich',
      restaurant: 'Vege Deli',
      availableMeals: ['breakfast']
    },
    {
      id: 16,
      name: 'Veg. Salad',
      restaurant: 'Vege Deli',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 17,
      name: 'Fruit Salad',
      restaurant: 'Vege Deli',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 18,
      name: 'Corn Soup',
      restaurant: 'Vege Deli',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 19,
      name: 'Tomato Soup',
      restaurant: 'Vege Deli',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 20,
      name: 'Minestrone Soup',
      restaurant: 'Vege Deli',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 21,
      name: 'Pepperoni Pizza',
      restaurant: 'Pizzeria',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 22,
      name: 'Pepperoni Pizza',
      restaurant: 'Pizzeria',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 23,
      name: 'Hawaiian Pizza',
      restaurant: 'Pizzeria',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 24,
      name: 'Seafood Pizza',
      restaurant: 'Pizzeria',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 25,
      name: 'Deep Dish Pizza',
      restaurant: 'Pizzeria',
      availableMeals: ['dinner']
    },
    {
      id: 26,
      name: 'Chow Mein',
      restaurant: 'Panda Express',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 27,
      name: 'Mapo Tofu',
      restaurant: 'Panda Express',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 28,
      name: 'Kung Pao',
      restaurant: 'Panda Express',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 29,
      name: 'Wontons',
      restaurant: 'Panda Express',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 30,
      name: 'Garlic Bread',
      restaurant: 'Olive Garden',
      availableMeals: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 31,
      name: 'Ravioli',
      restaurant: 'Olive Garden',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 32,
      name: 'Rigatoni Spaghetti',
      restaurant: 'Olive Garden',
      availableMeals: ['lunch', 'dinner']
    },
    {
      id: 33,
      name: 'Fettucine Pasta',
      restaurant: 'Olive Garden',
      availableMeals: ['lunch', 'dinner']
    }
  ],
  meal: '',
  numberOfPeople: 1,
  restaurant: '',
  dishes: {
    dish: {},
    numberOfServings: 1
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MEAL_TYPE:
      return {
        ...state,
        meal: action.meal
      }
    case NUMBER_PEOPLE:
      return {
        ...state,
        numberOfPeople: action.numberOfPeople
      }
    case RESTAURANT:
      return {
        ...state,
        restaurant: action.restaurant
      }
    case DISH:
      return {
        ...state,
        dishes: {
          dish: action.dish.dish,
          numberOfServings: action.dish.numberOfServings
        }
      }
    case NUMBER_SERVINGS:
      console.log('dishset number', action)
      let number = (state.dishes[action.index].numberOfServings = action.number)
      return {
        ...state,
        dishes: number
      }
    case ADD_DISH:
      const dish = state.dishes
      return {
        ...state,
        dishes: dish.concat({ dish: '', numberOfServings: 1 })
      }
    case REMOVE_DISH:
      const dishes = state.dishes.splice(action.index)
      return {
        ...state,
        dishes
      }
    default:
      return state
  }
}
