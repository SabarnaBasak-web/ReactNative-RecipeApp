import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilterSwitch from '../components/FilterSwitch';
import {CommonActions} from '@react-navigation/native';

const FiltersScreen = ({navigation, route}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegatarianFree, setIsVegatarianFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      veganFree: isVeganFree,
      vegetarianFree: isVegatarianFree,
      lactoseFree: isLactoseFree,
    };
    console.log('From Filer Screen ',appliedFilters);
  }, [isGlutenFree, isVeganFree, isVegatarianFree, isLactoseFree]);

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
        onChange={newValue => setIsVeganFree(newValue)}
        label="Vegan Free"
        state={isVeganFree}
      />
      <FilterSwitch
        onChange={newValue => setIsVegatarianFree(newValue)}
        label="Vegetarian Free"
        state={isVegatarianFree}
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
