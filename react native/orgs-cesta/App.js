import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import AppLoading from 'expo-app-loading';

import Cesta from "./src/telas/Cesta";
import mock from './src/mocks/cesta'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
