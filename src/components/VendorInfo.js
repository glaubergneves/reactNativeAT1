import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VendorInfo = ({ vendor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do Vendedor</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default VendorInfo;
