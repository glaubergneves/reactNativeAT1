import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comments = ({ comments }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentários</Text>
      {comments.map((comment, index) => (
        <View key={index} style={styles.commentContainer}>
          <Text style={styles.userName}>{comment.user}</Text>
          <Text>{comment.comment}</Text>
          <Text>Nota: {comment.rating}</Text>
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
  commentContainer: {
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Comments;
