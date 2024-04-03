import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TechnicalSpecifications = ({ specifications }) => {
  return (
    <View style={styles.container}>
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
    marginLeft: 15,
    marginRight: 15
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
