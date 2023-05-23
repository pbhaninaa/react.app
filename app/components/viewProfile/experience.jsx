import { View, Text, TouchableOpercity } from "react-native";
import Styles from "../../styles";
import Skills from './skills';

const Experience = ({ data }) => {
  return (
    <View>
      <View style={Styles.card}>
        <Text style={Styles.headingStyle}>Experience</Text>
        {data.experience.map((item, index) => (
          <View key={index}>
            <Text style={{ fontWeight: "bold" }}>Company: {item.Company}</Text>
            <Text>Period: {item.period}</Text>
            <Text style={{ marginBottom: 25 }}>
              Description: {item.Description}
            </Text>
          </View>
        ))}
      </View>
      <Skills />
    </View>
  );
};
export default Experience;
