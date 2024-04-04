import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VendorInfo from '../components/VendorInfo';
import Comments from '../components/Comments';
import Questions from '../components/Questions';
import TechnicalSpecifications from '../components/TechnicalSpecifications';

import { Image } from 'react-native';
import specificationsIcon from '../../assets/specificationsIcon.png';
import commentsIcon from '../../assets/commentsIcon.png';
import questionsIcon from '../../assets/questionsIcon.png';
import vendorInfoIcon from '../../assets/vendorInfoIcon.png';

const Tab = createBottomTabNavigator();

const ProductDetailsTabs = ({ route }) => {
  const { product } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Especificações') {
            iconSource = focused ? specificationsIcon : specificationsIcon;
          } else if (route.name === 'Comentários') {
            iconSource = focused ? commentsIcon : commentsIcon;
          } else if (route.name === 'Perguntas') {
            iconSource = focused ? questionsIcon : questionsIcon;
          } else if (route.name === 'Vendedor') {
            iconSource = focused ? vendorInfoIcon : vendorInfoIcon;
          }

          return <Image source={iconSource} style={{ width: 25, height: 25 }} />;
        },
      })}
    >
      <Tab.Screen name="Especificações">
        {() => <TechnicalSpecifications specifications={product.technicalSpecifications} />}
      </Tab.Screen>
      <Tab.Screen name="Comentários">
        {() => <Comments comments={product.comments} />}
      </Tab.Screen>
      <Tab.Screen name="Perguntas">
        {() => <Questions questions={product.questions} />}
      </Tab.Screen>
      <Tab.Screen name="Vendedor">
        {() => <VendorInfo vendor={product.vendorData} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ProductDetailsTabs;
