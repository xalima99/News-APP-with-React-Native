import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Title from "../common/Title";
import SmallCard from "../card/SmallCard";

import {useNavigation} from '@react-navigation/native';

const HonrizontalList = ({ title, data }) => {
  const navigation = useNavigation()

  return (
    <>
      <Title size={20} style={{ alignSelf: "flex-start" }}>
        {title}
      </Title>

      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SmallCard item={item} onPress={() => navigation.push('newsdetails', {item})} />}
        />
      </View>
    </>
  );
};

export default HonrizontalList;

const styles = StyleSheet.create({
  listStyle: {
    flexDirection: "row",
    marginVertical: 15,
  },
});
