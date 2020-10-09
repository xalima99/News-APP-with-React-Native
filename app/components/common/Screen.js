import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

const Screen = ({ children, isSearchFocused }) => {
  const keyboardShouldPersistTaps = isSearchFocused ? "always" : "never";
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        scrollEnabled={!isSearchFocused}
        contentContainerStyle={{ padding: 5 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#f7f3f3",
    flex: 1,
    alignItems: "center",
  },
});
