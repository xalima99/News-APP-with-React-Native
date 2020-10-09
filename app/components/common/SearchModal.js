import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatCard from "../card/FlatCard";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const SearchModal = ({ visible, data = [], notFound }) => {
  const navigation = useNavigation();

  if (!visible) return null;
  if (visible && data.length === 0 && !notFound)
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          {notFound}
        </Text>
      </View>
    );
  if (notFound) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          {notFound}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="never"
      >
        {data.map((item) => (
          <FlatCard
            item={item}
            key={item.id}
            onPress={() => navigation.navigate("newsdetails", { item })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    backgroundColor: "rgba(0,0,0,0.5)",
    maxHeight: height / 2,
    width: "100%",
    zIndex: 1,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: "center",
  },
});
