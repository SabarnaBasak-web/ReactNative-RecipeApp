import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({displayedMeals, navigation}) => {
  const renderedMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        img={itemData.item.imageUrl}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onSelectMeal={() => {
          navigation.navigate('MealDetails', {
            categoryid: itemData.item.id,
            categoryName: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderedMealItem}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%'}}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
