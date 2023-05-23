import { View, Text, FlatList} from "react-native";
import Styles from "../../styles";


const Skills = () => {
  const myArray = [
    { id: 1, skill: 'Java' },
    { id: 2, skill: 'JavaScript' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
    { id: 3, skill: 'HTML and CSS' },
  ];

  return (
    <View style={Styles.card}>
      <Text style={Styles.headingStyle}>My Skills</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
        data={myArray}
        renderItem={({ item }) => (
          <Text>{item.skill}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ columnGap: 8 }}
        horizontal
      />
    </View>
  );
};

export default Skills;
