import React, {useState} from "react";

import useNews from "../../hooks/useNews";
//Components
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import FeatureNews from "../FeatureNews";
import EntertainmentNews from "../EntertainmentNews";
import BreakingNews from "../BreakingNews";
import TechNews from "../TechNews";
import PoliticalNews from "../VerticalNews";

import ActivityIndocator from "../common/ActivityIndocator";

const Home = () => {
  const [isSearchFocused, setisSearchFocused] = useState(false)
  const [
    featureNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainment,
    loading
  ] = useNews();

  return (
    <>
      <ActivityIndocator visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setisSearchFocused={setisSearchFocused}/>
        <FeatureNews item={featureNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainment} />
      </Screen>
    </>
  );
};

export default Home;
