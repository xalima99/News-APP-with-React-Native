import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import VerticalList from "./VerticalList";
import { SafeAreaView } from "react-native-safe-area-context";

const NewsList = ({ route }) => {
  const data = route.params;
  const header = data[0].category.split("-").join(" ").toUpperCase();

  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 15 }}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.categoryTitle}>{header}</Text>
          </View>
          <VerticalList data={data} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#7a74e0",
    top: Platform.OS === "android" ? 0 : 10,
  },
});
