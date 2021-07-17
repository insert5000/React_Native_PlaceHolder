import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

export default ({ navigation, route }) => {
  const { title, body, name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <Text style={styles.autor} >{name}</Text>
      </View>
      <View style={styles.down}>
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{body}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  up: {
    backgroundColor: '#17ad3c',
    height: '30%',
    width: '100%',
  },
  down: {
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
  },
  center: {
    position: "absolute",
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 80,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    elevation: 8,

  },
  title: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",

  },
  text: {
    marginTop: 30,
    textTransform: "capitalize",
    marginVertical: 10,
    lineHeight: 25,
    fontSize: 16,

  },
  autor: {
    color: 'white',
    marginTop: 30,
    marginLeft: 25,
    fontSize: 24
  }

});
