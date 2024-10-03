import { Button, Image, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../styles/style";

export default function FullInfo({ route }) {
  console.log(route);
  // const goBack = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={styles.article}>
      <Text style={globalStyle.title}>{route.params.name}</Text>
      <Image
        source={{
          width: "100%",
          height: 150,
          uri: route.params.img,
        }}
      />
      <Text style={[globalStyle.text, styles.text]}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
