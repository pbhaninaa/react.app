import { View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../../styles";

const Footer = () => {
  const handleButtonPress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Wrong link " + url);
      }
    } catch (error) {
      console.log("Error opening URL: ", error);
    }
  };
  return (
    <View style={Styles.footer}>
      <TouchableOpacity
        onPress={handleButtonPress("https://github.com/pbhaninaa")}
      >
        <Image
          source={require("../../assets/icons/git.svg")}
          style={Styles.circle}
        />
      </TouchableOpacity>
      <View style={Styles.verticalLine}/>
      <TouchableOpacity
        onPress={handleButtonPress("https://www.linkedin.com/in/mr-p-bhani/")}
      >
        <Image
          source={require("../../assets/icons/linkedin.png")}
          style={Styles.circle}
        />
      </TouchableOpacity>
      <View style={Styles.verticalLine}/>
      <TouchableOpacity
        onPress={handleButtonPress("https://web.whatsapp.com/")}
      >
        <Image
          source={require("../../assets/icons/whatsapp.png")}
          style={Styles.circle}
        />
      </TouchableOpacity>
      <View style={Styles.verticalLine}/>
      <TouchableOpacity
        onPress={handleButtonPress(
          "https://www.facebook.com/login.php?skip_api_login=1&api_key=362798357264762&kid_directed_site=0&app_id=362798357264762&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.3%2Fdialog%2Foauth%3Fclient_id%3D362798357264762%26redirect_uri%3Dhttps%253A%252F%252Fsecure.showmax.com%252Foauth%252Fauth%252Ffacebook%252Fcallback%26utm_nooverride%3D1%26response_type%3Dcode%26scope%3Demail%26state%3DzMYWdMKdjCW3qcFE3z2Drm52OpM7jeipzdU%252FccfpxCCVCAgslXtz2I5jYUhngBJCIDd55jQH4bCAm1XfDTgRaK8s7%252Fej9dYPJxFu%252BtFWwRX4gxf0Iy%252BlPY5sz0VO%252FEclS2sQnEklJpGPBmet9rfopXIPA3IQzfqv3rbEX2l05ae7QAsjKGPJnf13SxNzywoNYzqP3ymBCcPduG93PXhvveWz%252BanvblpzF46CE%252FP9OFKOqEFSXufrVRqGwddtPD9SfJfYDHVLCeS%252B3RHEmkPvmQ%253D%253D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D29481e9d-c64b-4ea4-a9f3-c711c1b654e0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fsecure.showmax.com%2Foauth%2Fauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DzMYWdMKdjCW3qcFE3z2Drm52OpM7jeipzdU%252FccfpxCCVCAgslXtz2I5jYUhngBJCIDd55jQH4bCAm1XfDTgRaK8s7%252Fej9dYPJxFu%252BtFWwRX4gxf0Iy%252BlPY5sz0VO%252FEclS2sQnEklJpGPBmet9rfopXIPA3IQzfqv3rbEX2l05ae7QAsjKGPJnf13SxNzywoNYzqP3ymBCcPduG93PXhvveWz%252BanvblpzF46CE%252FP9OFKOqEFSXufrVRqGwddtPD9SfJfYDHVLCeS%252B3RHEmkPvmQ%253D%253D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
        )}
      >
        <Image
          source={require("../../assets/icons/facebook.png")}
          style={Styles.circle}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
