import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

import HorizontalList from "../lists/HorizontalList";

import newsApi from "../../api/newsApi";
import Close from "../common/Close";
import ActivityIndocator from "../common/ActivityIndocator";

const { width, height } = Dimensions.get("window");

const NewsDetails = ({ route, navigation }) => {
  const { id: postId, category: postCategory } = route.params.item;
  const [news, setNews] = useState({});
  const [relatedNews, setrelatedNews] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchPost = async (id) => {
    const res = await newsApi.getSingle(id);

    setNews(res);
  };

  const fetchRelatedPosts = async (category) => {
    const res = await newsApi.getByCategory(postCategory, 6);
    setrelatedNews(res.filter((item) => item.id !== postId));
    setloading(false)
  };

  const { title, content, thumbnail } = news;

  useEffect(() => {
    fetchPost(postId);
    fetchRelatedPosts(postCategory);
  }, []);

  return (
    <>
      <ActivityIndocator visible={loading} />
      <SafeAreaView style={{ flex: 1 }}>
        <>
          <ScrollView>
            <Image style={styles.Image} source={{ uri: thumbnail }} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.content}>{content}</Text>
              <View>
                <HorizontalList
                  data={relatedNews}
                  title="Related Posts"
                  style={styles.relatedPostsContainer}
                />
              </View>
            </View>
          </ScrollView>
          <Close onPress={() => navigation.popToTop()} />
        </>
      </SafeAreaView>
    </>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  Image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  relatedPostsContainer: {
    padding: 10,
  },
});
