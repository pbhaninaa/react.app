import { View, Text } from "react-native";
import Styles from "../../styles";
import Education from "./education";

const About = ({ data }) => {
  return (
    <View>
      {" "}
      <View style={Styles.card}>
        <Text style={Styles.headingStyle}>About</Text>
        <Text>{data.description}</Text>
      </View>
      <Education data={data}/>
    </View>
  );
};
export default About;
