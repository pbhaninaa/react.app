import { View, Text, TouchableOpercity } from "react-native";
import Styles from "../../styles";
import Experience from './experience'
const Education = ({ data }) => {
  return (
    <View>
      <View style={Styles.card}>
        <Text style={Styles.headingStyle}>Education</Text>
        {data.education.map((item, index) => (
          <View key={index}>
            <Text style={{ fontWeight: "bold" }}>
              Institution: {item.School}
            </Text>
            <Text>Period: {item.period}</Text>
            <Text style={{ marginBottom: 25 }}>
              Description: {item.Description}
            </Text>
          </View>
        ))}
      </View>
      <Experience data={data}/>
    </View>
  );
};
export default Education;
