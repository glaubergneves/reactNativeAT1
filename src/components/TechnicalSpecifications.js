import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TechnicalSpecifications = ({ specifications }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especificações Técnicas</Text>
      {Object.entries(specifications).map(([key, value]) => (
        <View key={key} style={styles.specContainer}>
          <Text style={styles.specName}>{key}</Text>
          <Text>{value}</Text>
        </View>
      ))}
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
  specContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  specName: {
    fontWeight: 'bold',
  },
});

export default TechnicalSpecifications;
