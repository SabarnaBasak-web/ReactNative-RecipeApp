import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DefaultText from '../components/DefaultText';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {toggleFav} from '../store/actions/mealActions';
import {useSelector, useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

const MealDetailsScreen = ({route, navigation}) => {
  const mealId = route.params.categoryid;
  const availableMeals = useSelector(state => state.meals.meals);
  const favMeals = useSelector(state =>
    state.meals.favouriteMeals.some(m => m.id === mealId),
  );
  console.log(favMeals);
  const dispatch = useDispatch();

  const mealDetails = availableMeals.find(item => item.id === mealId);
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFav(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    console.log('UseEffect called!!');
    navigation.dispatch(
      CommonActions.setParams({toggleFavOption: toggleFavouriteHandler}),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleFavouriteHandler]);
  // useEffect(() => {
  //   navigation.dispatch(CommonActions.setParams({isFav: favMeals}));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [favMeals]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{uri: mealDetails.imageUrl}} style={styles.image} />
        <View style={styles.details}>
          <DefaultText style={styles.text}>
            <Icon name="clock" size={20} color="#212121" />{' '}
            {mealDetails.duration}m
          </DefaultText>
          <DefaultText style={styles.text}>
            <Icon name="flask" size={20} color="#212121" />{' '}
            {mealDetails.complexity.toUpperCase()}
          </DefaultText>
          <DefaultText style={styles.text}>
            <Icon name="wallet" size={20} color="#212121" />{' '}
            {mealDetails.affordability.toUpperCase()}
          </DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.container}>
          {mealDetails.ingredients.map(ingredient => {
            return (
              <Text style={styles.text}>
                {' '}
                <Icon name="caret-right" size={15} color="#212121" />{' '}
                {ingredient}
              </Text>
            );
          })}
        </View>
        <Text style={styles.title}>Steps </Text>
        <View style={styles.container}>
          {mealDetails.steps.map(step => {
            return (
              <Text style={styles.text}>
                <Icon name="caret-right" size={15} color="#212121" /> {step}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 23,
    marginTop: 10,
    textAlign: 'center',
  },
  container: {
    padding: 10,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
});
