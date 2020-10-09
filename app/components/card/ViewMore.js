import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ViewMore = ({ style,onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.Text}>View More</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ViewMore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    height: 50,
  },
  Text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a74e0",
  },
});
