import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VendorInfo from '../components/VendorInfo';
import Comments from '../components/Comments';
import Questions from '../components/Questions';
import TechnicalSpecifications from '../components/TechnicalSpecifications';

const Tab = createBottomTabNavigator();

const ProductDetailsTabs = ({ route }) => {
  const { product } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Especificações">
        {() => <TechnicalSpecifications specifications={product.technicalSpecifications} />}
      </Tab.Screen>
      <Tab.Screen name="Comentários">
        {() => <Comments comments={product.comments} />}
      </Tab.Screen>
      <Tab.Screen name="Perguntas">
        {() => <Questions questions={product.questions} />}
      </Tab.Screen>
      <Tab.Screen name="Informações do Vendedor">
        {() => <VendorInfo vendor={product.vendorData} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ProductDetailsTabs;
