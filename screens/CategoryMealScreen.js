import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../Data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = ({route, navigation}) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const catId = route.params.categoryid;

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryid.indexOf(catId) >= 0,
  );

  return <MealList navigation={navigation} displayedMeals={displayedMeals} />;
};

export default CategoryMealScreen;

const styles = StyleSheet.create({});
