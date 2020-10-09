import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Blogcard from "./Blogcard";
import ViewMore from "./ViewMore";

import { useNavigation } from "@react-navigation/native";
import newsApi from "../../api/newsApi";

const { width } = Dimensions.get("window");

const SmallCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handleViewMore = async (category) => {
    const res = await newsApi.getByCategory(category);
    navigation.navigate("newslist", res);
  };

  if (item.type === "viewMore") {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handleViewMore(item.category)}
      />
    );
  }
  return (
    <Blogcard
      style={styles.container}
      imageStyle={styles.image}
      item={item}
      onPress={onPress}
    />
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2.2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
  viewMore: {
    width: width / 2.2,
    height: 200,
  },
});
