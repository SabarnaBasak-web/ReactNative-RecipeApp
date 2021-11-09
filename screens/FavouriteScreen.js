import React from 'react';
import {StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';
import {View, Image} from 'react-native';
import Empty from '../assets/img/empty.jpg';
const FavouriteScreen = ({navigation}) => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText style={styles.alertHeader}>Nothing to Show ! </DefaultText>
        <DefaultText style={styles.alertText}>
          Add recipes to your favourite list{' '}
        </DefaultText>
        <Image
          source={require('../assets/img/empty.jpg')}
          style={styles.image}
        />
      </View>
    );
  }
  return <MealList displayedMeals={favouriteMeals} navigation={navigation} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  alertHeader: {
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    marginVertical: 10,
  },
  alert: {
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
