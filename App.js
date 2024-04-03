import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsTabs from './src/routes/ProductDetailsTabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: 'Lista de Produtos' }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsTabs}
          options={{ title: 'Detalhes do Produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
