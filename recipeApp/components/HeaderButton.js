import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const HeaderButton = props => {
  return (
    <TouchableOpacity>
      <View style={styles.screen}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  screen: {
    marginRight: 10,
  },
});
