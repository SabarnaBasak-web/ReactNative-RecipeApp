import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';
const MealItem = ({
  title,
  onSelectMeal,
  duration,
  complexity,
  affordability,
  img,
}) => {
  return (
    <TouchableOpacity onPress={onSelectMeal} style={styles.container}>
      <View style={styles.mealItem}>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
          <ImageBackground source={{uri: img}} style={styles.bgImage}>
            <Text style={styles.imgText}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealBody}}>
          <DefaultText>{duration}</DefaultText>
          <DefaultText>{complexity}</DefaultText>
          <DefaultText>{affordability}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mealItem: {
    height: 250,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealBody: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imgText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 7,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});
