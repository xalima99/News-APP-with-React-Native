import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const FlatCard = ({ item,onPress }) => {
  const { thumbnail, title, desc } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.Image} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Title numberOfLines={1} style={{ marginVertical: 6 }}>
            {title}
          </Title>
          <SubTitle>{desc}</SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
  },
  Image: {
    flex: 0.35,
    height: "100%",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});
