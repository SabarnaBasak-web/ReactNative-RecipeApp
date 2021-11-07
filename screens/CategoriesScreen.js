// Italian German, British categories food
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../Data/dummy-data';

const CategoriesScreen = ({navigation}) => {
  const onPressHandler = (id, title) => {
    navigation.navigate('CategoryMeal', {categoryid: id, categoryName: title});
  };
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={onPressHandler.bind(
          this,
          itemData.item.id,
          itemData.item.title,
        )}
        style={[
          styles.grid,
          {
            backgroundColor: itemData.item.color,
            borderColor: itemData.item.color,
          },
        ]}>
        <View>
          <Text style={styles.gridTitle}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => {
          item.id;
        }}
        data={CATEGORIES}
        renderItem={renderGridItem}
        horizontal={false}
        numColumns={2}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%'}}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  grid: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    elevation: 5,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 150,
    padding: 15,
  },
  gridTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
  },
});
