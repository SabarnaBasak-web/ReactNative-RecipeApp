import React from 'react';
import {StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../Data/dummy-data';

import MealList from '../components/MealList';
const CategoryMealScreen = ({route, navigation}) => {
  const catId = route.params.categoryid;

  const displayedMeals = MEALS.filter(
    meal => meal.categoryid.indexOf(catId) >= 0,
  );

  return <MealList navigation={navigation} displayedMeals={displayedMeals} />;
};

export default CategoryMealScreen;

const styles = StyleSheet.create({});
