import { React, useState } from "react";
import {
  Image,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import Styles from "./styles";
import MainPage from "./components/viewProfile/mainPage";
import Footer from "./components/footer/footer";
import Create from "./components/createProfile/SaveProfile";
import ScreenHeaderBtn from "./components/sreenButtons/screenHeaderBtn";
import DateAndTime from "./date/dateAndTime";
import Landing from "./components/landing";

const home = () => {
  const [isViewVisible, setIsViewVisible] = useState(false);
  const [component, setComponent] = useState(0);

  const handleShow = () => {
    setIsViewVisible(true);
  };
  const create = () => {
    setIsViewVisible(false);
    setComponent(1);
  };
  const view = () => {
    setIsViewVisible(false);
    setComponent(2);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "alicewhite", flex: 1, height: "fit-content" }}
    >
      <Stack.Screen
        options={{
         headerShown: false,
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity onPress={handleShow}>
            <Image
              style={Styles.btnImg}
              source={require("./assets/icons/menu.png")}
            />
          </TouchableOpacity>
        </View>
        {isViewVisible && (
          <View style={Styles.menu}>
            <TouchableOpacity style={Styles.menuBtn} onPress={create}>
              Create Profile{" "}
            </TouchableOpacity>

            <TouchableOpacity style={Styles.menuBtn} onPress={view}>
              View Prfile
            </TouchableOpacity>
          </View>
        )}

        {component === 0 ? (
          <Landing />
        ) : component === 1 ? (
          <Create />
        ) : (
          <MainPage />
        )}

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default home;
