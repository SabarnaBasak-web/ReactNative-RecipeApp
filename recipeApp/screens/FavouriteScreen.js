import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../Data/dummy-data';

const FavouriteScreen = ({navigation}) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList displayedMeals={favMeals} navigation={navigation} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
