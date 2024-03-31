import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questions = ({ questions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.userName}>{question.user}</Text>
          <Text>{question.question}</Text>
          <Text>Resposta: {question.answer}</Text>
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
  questionContainer: {
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Questions;
