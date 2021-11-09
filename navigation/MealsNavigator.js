import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import FavouriteScreen from '../screens/FavouriteScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const favouriteNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.secondaryColor},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Nunito-ExtraBold',
        },
        headerMode: 'none',
      }}>
      <Stack.Screen
        name="Favourites "
        component={FavouriteScreen}
        options={({navigation}) => ({
          headerTitle: 'Favourites',
          headerLeft: () => (
            <HeaderButton>
              <Icon
                name="bars"
                size={28}
                color="#fff"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{title: 'Favourite Meal Details'}}
      />
    </Stack.Navigator>
  );
};
const MealNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primaryColor},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Nunito-ExtraBold',
        },
      }}>
      <Stack.Screen
        name="Category"
        component={CategoriesScreen}
        options={({navigation}) => ({
          headerTitle: 'Category',
          headerLeft: () => (
            <HeaderButton>
              <Icon
                name="bars"
                size={28}
                color="#fff"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen
        name="CategoryMeal"
        component={CategoryMealScreen}
        options={({route}) => ({title: route.params.categoryName})}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({route}) => ({
          title: route.params.categoryName,
          headerRight: () => (
            <HeaderButton>
              <Icon
                name="star"
                size={20}
                color="#fff"
                onPress={() => route.params.toggleFavOption()}
              />
            </HeaderButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FilterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primaryColor},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Nunito-ExtraBold',
        },
      }}>
      <Stack.Screen
        name="FilterScreen"
        component={FiltersScreen}
        options={({route, navigation}) => ({
          headerTitle: 'Filter Food',
          headerLeft: () => (
            <HeaderButton HeaderButtonComponent={HeaderButton}>
              <Icon
                name="bars"
                size={20}
                color="#fff"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            </HeaderButton>
          ),
          headerRight: () => (
            <HeaderButton>
              <Icon
                name="save"
                size={20}
                color="#fff"
                onPress={() => route.params.save()}
              />
            </HeaderButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function Bottomtabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Categories"
        component={MealNavigator}
        options={{
          tabBarLabel: 'Categories',
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: Colors.primaryColor,
          tabBarIcon: ({color}) => (
            <Icon name="utensils" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={favouriteNavigator}
        options={{
          tabBarLabel: 'Favourites',
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: Colors.secondaryColor,
          tabBarIcon: ({color}) => <Icon name="star" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

//Root Navigator
const Drawer = createDrawerNavigator();
function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="bottomTabs"
          component={Bottomtabs}
          options={{
            drawerLabel: 'Categories',
            drawerActiveTintColor: '#fff',
            drawerActiveBackgroundColor: Colors.primaryColor,
            drawerLabelStyle: {
              fontFamily: 'Nunito-ExtraBold',
            },
          }}
        />
        <Drawer.Screen
          name="FilterNav"
          component={FilterNavigator}
          options={{
            drawerLabel: 'Filter',
            drawerActiveTintColor: '#fff',
            drawerActiveBackgroundColor: Colors.primaryColor,
            drawerLabelStyle: {
              fontFamily: 'Nunito-ExtraBold',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNav;
