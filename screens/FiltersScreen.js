import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilterSwitch from '../components/FilterSwitch';
import {CommonActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/mealActions';

const FiltersScreen = ({navigation, route}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegatarian, setisVegatarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegatarian,
      lactoseFree: isLactoseFree,
    };
    console.log('From Filter Screen ', appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegatarian, isLactoseFree, dispatch]);

  useEffect(() => {
    navigation.dispatch(CommonActions.setParams({save: saveFilters}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Available Filters/Restrictions </Text>
      <FilterSwitch
        onChange={newValue => setIsGlutenFree(newValue)}
        label="Gluten Free"
        state={isGlutenFree}
      />
      <FilterSwitch
        onChange={newValue => setisVegan(newValue)}
        label="Vegan"
        state={isVegan}
      />
      <FilterSwitch
        onChange={newValue => setisVegatarian(newValue)}
        label="Vegetarian"
        state={isVegatarian}
      />
      <FilterSwitch
        onChange={newValue => setIsLactoseFree(newValue)}
        label="Lactose Free"
        state={isLactoseFree}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
  },
});
