import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyle } from "../styles/style";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Form from "./Form";

export default function Main({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google launches new AI-powered search features.",
      full: "Google has announced a series of new AI-powered features to improve search results and user experience. The updates are designed to provide more relevant answers and make searching more intuitive. However, some users have reported issues with the rollout, experiencing delays and inconsistent results while trying to find specific information.",
      key: "1",
      img: "https://itproger.com/img/news/x1726202674.jpg.pagespeed.ic.VbWs_rbkm5.webp",
    },
    {
      name: "Chrome",
      anons: "Chrome introduces enhanced privacy settings in latest update.",
      full: "Google Chrome has released an update with a focus on user privacy. The new settings allow users to manage cookies more effectively and block trackers across sites. Despite the improved features, some users have encountered issues with site compatibility and slower performance after updating.",
      key: "2",
      img: "https://itproger.com/img/news/x1724421111.jpg.pagespeed.ic.K-pGyjA7_q.webp",
    },
    {
      name: "Mozilla",
      anons:
        "Mozilla Firefox aims to be the most secure browser with new tools.",
      full: "Mozilla has launched new security tools for Firefox, aiming to make it the most secure browser available. The update includes improved password management and enhanced protection against phishing attacks. While the majority of users appreciate these changes, some have reported minor glitches when trying to access certain websites.",
      key: "3",
      img: "https://itproger.com/img/news/1725705137.jpg",
    },
  ]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const loadScene = (item) => {
    navigation.navigate("FullInfo", item);
  };

  const addArticle = (article) => {
    article.key = Math.random().toString();
    setNews((currentArticles) => {
      return [article, ...currentArticles];
    });
  };

  return (
    <View style={globalStyle.main}>
      <View style={[globalStyle.horisontalFlexBox, styles.box]}>
        <Text style={globalStyle.title}>News</Text>
        <FontAwesome6
          name="add"
          size={24}
          color="black"
          onPress={toggleModal}
        />
      </View>

      <Modal visible={isOpen}>
        <View style={[globalStyle.horisontalFlexBox, styles.box]}>
          <Text style={globalStyle.title}>Add your own article!</Text>
          <Fontisto
            name="close-a"
            size={24}
            color="black"
            onPress={toggleModal}
          />
        </View>
        <Form addArticle={addArticle} />
      </Modal>

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => loadScene(item)}
          >
            <Image
              source={{
                width: "100%",
                height: 100,
                uri: item.img,
              }}
            />
            <Text style={globalStyle.subtitle}>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 4,
    padding: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  box: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
