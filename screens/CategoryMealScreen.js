import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {CATEGORIES} from '../Data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = ({route, navigation}) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const catId = route.params.categoryid;

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryid.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText style={{fontSize: 15}}>
          No Meals found! Please check the filters
        </DefaultText>
      </View>
    );
  }
  return <MealList navigation={navigation} displayedMeals={displayedMeals} />;
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
