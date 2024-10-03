import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyle } from "../styles/style";
import MainButton from "./MainButton";

export default function Layout({ navigation }) {
  // const goBack = () => {
  //   navigation.goBack();
  // };

  const newsItems = [
    {
      key: "1232",
      name: "Breaking: Market Sees Record Highs",
      full: "Today, global stock markets reached unprecedented highs, with major indices showing significant gains. Experts attribute this to the latest technological advancements and optimistic forecasts for the economy. However, some analysts are cautious, predicting possible corrections in the near future.",
      img: "https://images.stockcake.com/public/d/c/b/dcb202a0-9c0a-4b76-84c8-e6bbf4cebd28_large/scientist-analyzing-data-stockcake.jpg",
    },
    {
      key: "3215",
      name: "Tech Trends: What to Expect in 2024",
      full: "As we look ahead to 2024, tech enthusiasts and professionals are eager to see the next wave of innovations. From advancements in AI and machine learning to the rise of 5G networks, the tech industry is poised for remarkable growth. The article covers key trends to watch and how they might shape the future.",
      img: "https://images.stockcake.com/public/8/0/0/800535b6-d6c1-46b0-ad4a-3f4bd6860d1f_large/coding-late-night-stockcake.jpg",
    },
    {
      key: "1254",
      name: "Sports: Local Team Wins Championship",
      full: "In an exhilarating match that kept fans on the edge of their seats, the local team triumphed in the national championship. The final score, 3-2, was decided in the last few minutes of overtime, sealing a historic victory for the team. Fans are already gearing up for the celebration parade scheduled for this weekend.",
      img: "https://images.stockcake.com/public/9/0/4/90441d25-49ea-43eb-a592-91c66abe4562_large/conference-keynote-speech-stockcake.jpg",
    },
    {
      key: "1245",
      name: "Breaking: Market Sees Record Highs",
      full: "Today, global stock markets reached unprecedented highs, with major indices showing significant gains. Experts attribute this to the latest technological advancements and optimistic forecasts for the economy. However, some analysts are cautious, predicting possible corrections in the near future.",
      img: "https://images.stockcake.com/public/9/f/0/9f066b3d-f42a-4aa2-ad14-fa22f56e7d0e_large/sunlit-forest-morning-stockcake.jpg",
    },
    {
      key: "1243",
      name: "Tech Trends: What to Expect in 2024",
      full: "As we look ahead to 2024, tech enthusiasts and professionals are eager to see the next wave of innovations. From advancements in AI and machine learning to the rise of 5G networks, the tech industry is poised for remarkable growth. The article covers key trends to watch and how they might shape the future.",
      img: "https://images.stockcake.com/public/9/c/f/9cf17a41-2541-4f68-b4be-0a535006d439_large/sunlit-forest-floor-stockcake.jpg",
    },
    {
      key: "7534",
      name: "Sports: Local Team Wins Championship",
      full: "In an exhilarating match that kept fans on the edge of their seats, the local team triumphed in the national championship. The final score, 3-2, was decided in the last few minutes of overtime, sealing a historic victory for the team. Fans are already gearing up for the celebration parade scheduled for this weekend.",
      img: "https://images.stockcake.com/public/c/0/3/c039a9b2-7b4a-4793-814f-e130bfe95c0f_large/sunset-behind-tree-stockcake.jpg",
    },
    {
      key: "7896",
      name: "Health: New Breakthrough in Cancer Research",
      full: "Researchers at a leading medical institute have made a breakthrough in cancer treatment. Using advanced gene-editing techniques, they have successfully targeted and destroyed cancer cells without harming healthy tissue. This development is seen as a potential game-changer in the fight against cancer.",
      img: "https://images.stockcake.com/public/5/4/2/5428da98-6cc2-4d37-a096-c0fd305827cb_large/desert-oasis-aerial-stockcake.jpg",
    },
    {
      key: "8675",
      name: "Environment: Oceans Reaching Critical Levels of Pollution",
      full: "A new report from environmental scientists warns that ocean pollution is nearing critical levels. Plastics, chemicals, and other pollutants are accumulating at an alarming rate, threatening marine life and ecosystems. Activists are calling for immediate global action to address the crisis.",
      img: "https://images.stockcake.com/public/3/2/8/3284f1f6-a977-4a63-97b1-8abcde7a3b5e_large/futuristic-city-skyline-stockcake.jpg",
    },
    {
      key: "4756",
      name: "Economy: Inflation Rates Hit a 10-Year High",
      full: "The latest economic data shows that inflation rates have reached a 10-year high, leading to increased prices for everyday goods and services. Economists are debating whether central banks will raise interest rates in response to cool down the overheating economy.",
      img: "https://images.stockcake.com/public/e/9/1/e91c50f6-9346-4434-ac7c-c4d0ef48c26b_large/farmer-holding-greens-stockcake.jpg",
    },
    {
      key: "3453",
      name: "Space Exploration: NASA Prepares for Mars Mission",
      full: "NASA is ramping up preparations for its next major mission to Mars. The mission, set to launch in 2026, aims to collect samples from the Martian surface and search for signs of past life. Engineers and scientists are currently testing the latest rover technology to ensure mission success.",
      img: "https://images.stockcake.com/public/c/5/a/c5a1ca90-1469-4eb2-9152-dcd0d344ed74_large/scientist-analyzing-data-stockcake.jpg",
    },
    {
      key: "4234",
      name: "Entertainment: Blockbuster Movie Breaks Box Office Records",
      full: "The latest blockbuster movie has shattered box office records, grossing over $1 billion globally within its first two weeks of release. The film, which features stunning special effects and a star-studded cast, is expected to dominate theaters for weeks to come.",
      img: "https://images.stockcake.com/public/a/4/0/a40ddb29-6a4d-4a4b-966d-bab8db71f00e_large/businessman-using-laptop-stockcake.jpg",
    },
  ];

  const loadScene = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Latest Headlines</Text>

      <ScrollView style={styles.wrapper}>
        {newsItems.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={styles.newsItem}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Text style={styles.newsTitle}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[globalStyle.horisontalFlexBox, styles.buttonsBox]}>
        <MainButton title="Main" loadScene={loadScene} style={styles.button} />
        <MainButton
          title="Contacts"
          loadScene={loadScene}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  buttonsBox: {
    position: "fixed",
    bottom: 0,
  },
  wrapper: {
    flex: 1,
  },
  text: {
    padding: 10,
  },
  button: {
    width: 100,
  },
  //
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    padding: 4,
    backgroundColor: "#353535",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
    marginBottom: 15,
  },
  newsItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  newsTitle: {
    fontSize: 18,
  },
  navButtons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
