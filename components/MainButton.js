import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MainButton({ title, loadScene }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => loadScene(title)} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "50%",
  },
  button: {
    width: "100%",
    backgroundColor: "#353535",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
