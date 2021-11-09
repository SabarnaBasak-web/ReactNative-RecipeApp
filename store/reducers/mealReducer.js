import {MEALS} from '../../Data/dummy-data';
import {TOGGLE_FAVOURITE, SET_FILTERS} from '../actions/mealActions';

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
    case SET_FILTERS:
      const appliedFilters = action.payload;
      console.log('Reducer page', appliedFilters);
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals};
  }

  return state;
};

export default mealReducer;
