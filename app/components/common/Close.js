import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Close = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.icon}>
          <AntDesign name="close" size={25} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Close;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginVertical: 25,
  },
  icon: {
    backgroundColor: "rgba(92,90,91,0.7)",
    padding: 10,
    borderRadius: 50,
  },
});
