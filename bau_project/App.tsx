import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from './src/pages/Favorites';
import Main from './src/pages/Home';
import Categories from './src/pages/Categories';
import {FavoriteProductsProvider} from './src/FavoriteProductsContext';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <FavoriteProductsProvider>
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </FavoriteProductsProvider>
    </NavigationContainer>
  );
};

export default App;
