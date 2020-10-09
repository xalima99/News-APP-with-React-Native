import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import SearchModal from "./common/SearchModal";
import newsApi from "../api/newsApi";

let timeOutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchBar = ({ setisSearchFocused }) => {
  const [query, setquery] = useState("");
  const [visible, setvisible] = useState(false);
  const [data, setdata] = useState([]);
  const [notFound, setnotFound] = useState("");

  useEffect(() => {
    if (query === "") {
      setisSearchFocused(false);
      setquery("");
      setvisible(false);
      setdata([]);
      setnotFound("");
    }
  }, [query]);

  const handleChange = (text) => {
    setquery(text);
    setvisible(true);
    deboucedSearch(query);
  };

  const handleSearch = async (value) => {
    const res = await newsApi.searchPost(value);
    if (res.success) {
      setnotFound("");
      setdata(res.news);
    }
    if (!res.success) {
      setnotFound(res.message);
    }
  };

  const onBlur = () => {
    setisSearchFocused(false);
    setquery("");
    setvisible(false);
    setdata([]);
    setnotFound("");
    Keyboard.dismiss()
  };

  const deboucedSearch = debounce(handleSearch, 500);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={query}
          style={styles.searchInput}
          placeholder="Search here..."
          onChangeText={handleChange}
          onFocus={() => setisSearchFocused(true)}
          onSubmitEditing={onBlur}
        />
      </View>
      <SearchModal visible={visible} data={data} notFound={notFound} />
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 5,
    fontSize: 18,
  },
});
