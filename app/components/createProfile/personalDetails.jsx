import { React, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";
import Styles from "../../styles";

const PersonalDetails = () => {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState(null);
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState([{}, {}, {}]);
  const [experience, setExperience] = useState([{}, {}, {}]);
  const [skills, setSkills] = useState([]);
  const data = [{ value: "Male" }, { value: "Female" }];
  const countries = [
    { value: "South Africa" },
    { value: "Algeria" },
    { value: "Angola" },
    { value: "Benin" },
    { value: "Botswana" },
    { value: "Burkina Faso" },
    { value: "Burundi" },
  ];
  const handleSave = () => {
    const data1 = {
      name,
      idNumber,
      gender,
      image,
      email,
      phone,
      address,
      city,
      zip,
      country,
      about,
      education,
      experience,
      skills
    };

    fetch("back end end point", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // =========================== function to select image =========================================
  const pickImage = () => {
    console.log("Image" + image);
    let permissionResult = ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = ImagePicker.launchImageLibraryAsync();
    console.log(image);
    setImage(pickerResult);
  };
  //========================= Workin on education, experience and skills============================

  const [isEducationViewVisible, setIsEducationViewVisible] = useState(false);
  const [isExperienceViewVisible, setIsExperienceViewVisible] = useState(false);
  const [isSkillsViewVisible, setIsSkillsViewVisible] = useState(false);
  const viewHidden = () => {
    setIsEducationViewVisible(true);
  };
  const viewSkills = () => {
    setIsSkillsViewVisible(true);
  };
  const ExperienceVisible = () => {
    setIsExperienceViewVisible(true);
  };
  //===============================populating arrays =======================
  const [varsity, setVarsity] = useState("");
  const [period, setPeriod] = useState("");
  const [qualification, setQualification] = useState("");

  const saveEducation = () => {
    qualification != "" && varsity != "" && period != ""
      ? setEducation(qualification, varsity, period)
      : alert("Fill all the fields ");

    // qualification != "" && varsity != "" && period != ""
    //   ? setIsViewVisible(true)
    //   : setIsViewVisible(false);
  };

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");

  const saveExperience = () => {
    position != "" && company != "" && duration != ""
      ? setExperience(company, position, duration)
      : alert("Fill all the fields ");
  };

  //   ===================================================
  return (
    <View style={Styles.saveContainer}>
      <Text style={Styles.name}>Personal Details</Text>
      <Text style={Styles.headingStyle}>FullName</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter FullName"
        onChangeText={(value) => setName(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>ID Number</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter ID Number"
        onChangeText={(value) => setIdNumber(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>Select Image</Text>
      <TouchableOpacity style={Styles.Input} onPress={pickImage}>
        Select your Image
      </TouchableOpacity>
   
      <View style={{ width: 340, marginBottom: 15 }}>
        <SelectList
          setSelected={(value) => setGender(value)}
          data={data}
          save=""
        />{" "}
      </View>
      <Text style={Styles.headingStyle}>Birth Country</Text>
      <View style={{ width: 340, marginBottom: 15 }}>
        <SelectList
          setSelected={(value) => setCountry(value)}
          data={countries}
          save=""
        />{" "}
      </View>
      <Text style={Styles.headingStyle}>Phone Number</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter Phone Number"
        onChangeText={(value) => setPhone(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>Email Address</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter email address"
        onChangeText={(value) => setEmail(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>Address</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter Address"
        onChangeText={(value) => setAddress(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>City</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter City"
        onChangeText={(value) => setCity(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>Zip Code</Text>
      <TextInput
        style={Styles.Input}
        placeholder="Enter ID Number"
        onChangeText={(value) => setZip(value)}
        defaultValue=""
      />
      <Text style={Styles.headingStyle}>Summary</Text>
      <TextInput
        style={Styles.TextArea}
        multiline
        numberOfLines={4}
        placeholder="Write Brief summary of yourself "
        onChangeText={(value) => setAbout(value)}
      />
      {/* Education=========================== */}
      <Text style={Styles.name}>Education</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={Styles.headingStyle}>Click here to add education </Text>
        <TouchableOpacity style={Styles.add} onPress={viewHidden}>
          +
        </TouchableOpacity>
      </View>
      {isEducationViewVisible && (
        <View>
          <Text style={Styles.headingStyle}>Education</Text>
          <TextInput
            style={Styles.Input}
            placeholder="University"
            onChangeText={(value) => setVarsity(value)}
          />
          <TextInput
            style={Styles.Input}
            placeholder="Qualification"
            onChangeText={(value) => setQualification(value)}
          />
          <TextInput
            style={Styles.Input}
            placeholder="From - To eg.(2000 Jan - 2002 Dec)"
            onChangeText={(value) => setPeriod(value)}
          />
          <TouchableOpacity style={Styles.adding} onPress={saveEducation}>
            Save Education
          </TouchableOpacity>
        </View>
      )}
      {/* Work Experience=========================================== */}
     <Text style={Styles.name}>Experience</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={Styles.headingStyle}>Click here to add Experience </Text>
        <TouchableOpacity style={Styles.add} onPress={ExperienceVisible}>
          +
        </TouchableOpacity>
      </View>
      {isExperienceViewVisible && (
        <View>
          <Text style={Styles.headingStyle}>Experience</Text>
          <TextInput
            style={Styles.Input}
            placeholder="Company Name"
            onChangeText={(value) => setCompany(value)}
          />
          <TextInput
            style={Styles.Input}
            placeholder="Position"
            onChangeText={(value) => setPosition(value)}
          />
          <TextInput
            style={Styles.Input}
            placeholder="From - To eg.(2000 Jan - 2002 Dec)"
            onChangeText={(value) => setDuration(value)}
          />
          <TouchableOpacity style={Styles.adding} onPress={saveExperience}>
            Save Experience
          </TouchableOpacity>
        </View>
      )} 
      <TouchableOpacity style={Styles.Button} onPress={handleSave}>
        Save
      </TouchableOpacity>
    </View>
  );
};
export default PersonalDetails;
const https = require('https');

