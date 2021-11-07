import {MEALS} from '../../Data/dummy-data';
import {TOGGLE_FAVOURITE} from '../actions/mealActions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};
const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        meal => meal.id === action.payload,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favouriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.payload);
        return {...state, favouriteMeals: state.favouriteMeals.concat(meal)};
      }
  }
  return state;
};

export default mealReducer;
