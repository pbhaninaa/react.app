import {React , useState, useEffect} from 'react'
import {View, Text,TouchableOpercity } from 'react-native'
import Styles from "../../styles";

const Contact = () =>{
    const [data, setData] = useState({
        email: 'pbhanina@gmail.com',
        phone: '0123456789',
        address: '170 Bram Fischer st Ferndale Randburg 2194',
      });
   
return (
    <View style={Styles.card}>
        <Text style={Styles.headingStyle}>Contact</Text>
        <Text >{data.phone}</Text>
        <Text>{data.email}</Text>
        <Text>{data.address}</Text>
    </View>
)
}
export default Contact