/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MealNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers} from 'redux';
import mealReducer from './store/reducers/mealReducer';
import {Provider} from 'react-redux';
import {Text} from 'react-native';

const rootReducer = combineReducers({
  meals: mealReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
};

export default App;
