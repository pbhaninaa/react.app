import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Styles from "../styles";

const HomePage = () => {
  const handleButtonPress = () => {
    // Handle button press event
    console.log("Button pressed");
  };

  return (
    <View style={{ alignItems: "center", paddingTop: 10 }}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBy-d7gIyDRk08gq2hYugc_b5a4f_IPjpFKQ&usqp=CAU",
        }}
        style={Styles.imageStyle}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque
        eget ligula aliquet accumsan sed ut sem. Aliquam lacinia ante ut
        bibendum commodo. Nulla et sapien quis ex ultrices rutrum. Aliquam
        egestas, neque non viverra porttitor, ligula metus porta tellus, a
        imperdiet diam arcu sed magna. Integer vitae purus malesuada, facilisis
        mi eu, vulputate nisl. Duis eleifend orci at sagittis faucibus.
        Phasellus laoreet velit non arcu cursus, sed tempor eros fermentum.
        Fusce lobortis dolor ligula. Sed id cursus quam. Ut at maximus eros, at
        tempus sapien. Curabitur dictum dui ac nulla auctor, varius tincidunt
        nisi vulputate.<br/>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque
        eget ligula aliquet accumsan sed ut sem. Aliquam lacinia ante ut
        bibendum commodo. Nulla et sapien quis ex ultrices rutrum. Aliquam
        egestas, neque non viverra porttitor, ligula metus porta tellus, a
        imperdiet diam arcu sed magna. Integer vitae purus malesuada, facilisis
        mi eu, vulputate nisl. Duis eleifend orci at sagittis faucibus.
        Phasellus laoreet velit non arcu cursus, sed tempor eros fermentum.
        Fusce lobortis dolor ligula. Sed id cursus quam. Ut at maximus eros, at
        tempus sapien. Curabitur dictum dui ac nulla auctor, varius tincidunt
        nisi vulputate.

      
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  logo: {
    width: 350,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: "",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
});

export default HomePage;
