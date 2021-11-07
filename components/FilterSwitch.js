import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = ({label, state, onChange}) => {
  return (
    <View style={styles.filterContent}>
      <Text style={styles.filterLabel}>{label}</Text>
      <Switch
        value={state}
        onValueChange={onChange}
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Colors.primaryColor}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  filterLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
});
