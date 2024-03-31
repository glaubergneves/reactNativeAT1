// ProductDetailsScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TechnicalSpecifications from '../components/TechnicalSpecifications';
import VendorInfo from '../components/VendorInfo';
import Comments from '../components/Comments';
import Questions from '../components/Questions';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <TechnicalSpecifications specifications={product.technicalSpecifications} />
      </View>
      <View style={styles.section}>
        <VendorInfo vendor={product.vendorData} />
      </View>
      <View style={styles.section}>
        <Comments comments={product.comments} />
      </View>
      <View style={styles.section}>
        <Questions questions={product.questions} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
