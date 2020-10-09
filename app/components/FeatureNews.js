import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Blogcard from "./card/Blogcard";

const FeatureNews = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Blogcard
      style={{ marginVertical: 15 }}
      item={item}
      onPress={() => navigation.navigate("newsdetails", {item})}
    />
  );
};

export default FeatureNews;
