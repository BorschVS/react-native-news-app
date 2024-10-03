import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { globalStyle } from "./styles/style";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import LayoutStack from "./navigate";

const fonts = async () =>
  await Font.loadAsync({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAndHideSplash() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    loadFontsAndHideSplash();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={globalStyle.main}>
      <LayoutStack />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
