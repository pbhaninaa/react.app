import {React,useState} from 'react'
import { SafeAreaView } from "react-native";
import PersonalDetails from './personalDetails';
const SaveProfile = () => {
  const [gender,setGender] = useState("");
  const [text,setText] = useState([]);

  const [isViewVisible, setIsViewVisible] = useState(false);
  const viewHidden = () => {
    setIsViewVisible(true);
  };

  return (
    <SafeAreaView >
     <PersonalDetails/>       
    </SafeAreaView>
  );
};
export default SaveProfile
