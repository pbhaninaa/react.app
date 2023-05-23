import { React, useState } from "react";
import { Image, TouchableOpacity, View, Text, TextInput } from "react-native";

import Styles from "../../styles";

const ScreenHeaderBtn = ({ handlePress }) => {
  const [isViewVisible, setIsViewVisible] = useState(false);

  const handleShow = () => {
    setIsViewVisible(true);
  };
  const create = () => {
    setIsViewVisible(false);
  };
  const view = () => {
    setIsViewVisible(false);
  };
  const edit = () => {
    setIsViewVisible(false);
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* <Text style={Styles.headingStyle}>Click here to add education </Text> */}
        <TouchableOpacity onPress={handleShow}>
          <Image
            style={Styles.btnImg}
            source={require("../../assets/icons/menu.png")}
          />
        </TouchableOpacity>
      </View>
      {isViewVisible && (
        <View style={Styles.menu}>
          <TouchableOpacity style={Styles.menuBtn} onPress={create}>Create Profile </TouchableOpacity>
        
          <TouchableOpacity style={Styles.menuBtn}onPress={create}>View Prfile</TouchableOpacity>
          
        </View>
      )}
    
    </>
  );
};

export default ScreenHeaderBtn;
