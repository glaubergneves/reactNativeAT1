import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comments = ({ comments }) => {
  return (
    <View style={styles.container}>
      {comments.map((comment, index) => (
        <View key={index} style={styles.commentContainer}>
          <Text style={styles.userName}>{comment.user} - {comment.date}</Text>
          <Text>{comment.comment}</Text>
          <Text style={styles.userName}>Nota: {comment.rating}</Text>
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
  commentContainer: {
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Comments;
