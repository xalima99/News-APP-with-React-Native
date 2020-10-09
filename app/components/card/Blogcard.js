import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Blogcard = ({ style, imageStyle, item, onPress }) => {
  const { thumbnail, title, desc } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image style={[styles.Image, imageStyle]} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <SubTitle>{desc}</SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Blogcard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  Image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});
