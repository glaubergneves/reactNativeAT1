import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VendorInfo = ({ vendor }) => {
  return (
    <View style={styles.container}>
      <Text>Nome: {vendor.name}</Text>
      <Text>Telefone: {vendor.phone}</Text>
      <Text>Email: {vendor.email}</Text>
      <Text>Avaliação: {vendor.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15
  },
});

export default VendorInfo;
