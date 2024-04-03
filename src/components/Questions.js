import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questions = ({ questions }) => {
  return (
    <View style={styles.container}>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.userName}>{question.user} - {question.date}</Text>
          <Text>{question.question}</Text>
          <Text style={styles.userName}>Resposta do vendendor: </Text>
          <Text style={styles.answer}>{question.answer}</Text>
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
  questionContainer: {
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    marginLeft: 10
  }
});

export default Questions;
