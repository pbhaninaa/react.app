import { React, useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import Styles from "../../styles";
import About from "./about";
import Contact from "./contact";
const MainPage = () => {
  const [data, setData] = useState({
    name: "Philasande Bhani",
    email: "tugrp@example.com",
    phone: "0123456789",
    address: "Dhaka, Bangladesh",
    education: [
      {
        period: "2015 Jan - 2015 Dec",
        School: "Ntabezulu s.s.s",
        Description: "Matric",
      },
      {
        period: "2017 Jan - 2020 Dec",
        School: "Walter Sisulu University",
        Description: "National Diploma",
      },
    ],
    experience: [
      {
        period: "2021 Jan - 2021 Dec",
        Company: "MLab",
        Description: "Trainning program : ",
      },
      {
        period: "2022 Jan - 2022 Dec",
        Company: "Geeks4learning",
        Description: "Leanership ",
      },
      {
        period: "2023 Jan - Till Now",
        Company: "Reverside",
        Description: "Associate",
      },
    ],
    data: 
      [
        { id: 1, skill: 'Java' },
        { id: 2, skill: 'JavaScript' },
        { id: 3, skill: 'HTML and CSS' },
      
    ],
    image: require("../../assets/images/picture.jpg"),
    description:
      "I am a Full Stack Developer, I graduated from WSU University with a Diploma a in Information Technology andhave been actively developing my programming skills. My passion lies in problem -solving and creating efficient solutions through programming, utilizing a set of rules and algorithms. I have extensive knowledge of several programming languages, such as Java, Python, and JavaScript. Furthermore, I possess front -end development skills using React and Angular, as well as back -end development skills using Node.js and Express.",
  });


  // This function will be used to get data from back end.


  // useEffect(() => {
  //   fetch('baeck end endpoint')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       setData(responseData);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", width: "100%" }}>
        {" "}
        <Image style={Styles.imageStyle} source={data.image} />{" "}
        <Text style={Styles.name}>{data.name}</Text>
      </View>
      <Contact data={data} />
      <About data={data} />
    </SafeAreaView>
  );
};
export default MainPage;
