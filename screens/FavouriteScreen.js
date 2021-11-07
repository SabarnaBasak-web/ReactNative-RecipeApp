import React from 'react';
import {StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';

const FavouriteScreen = ({navigation}) => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
  return <MealList displayedMeals={favouriteMeals} navigation={navigation} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
