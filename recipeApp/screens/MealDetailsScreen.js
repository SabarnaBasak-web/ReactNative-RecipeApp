import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DefaultText from '../components/DefaultText';
import {MEALS} from '../Data/dummy-data';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MealDetailsScreen = ({route}) => {
  const mealId = route.params.categoryid;
  const mealDetails = MEALS.find(item => item.id === mealId);

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
