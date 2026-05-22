import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router = useRouter();
  return (
    
    <>
    <Image
    style={[ StyleSheet.absoluteFill, { width:"100%",height: "100%"}]}
      source={require("../assets/images/backgr.png")}
    />
      <View style={styles.Backg} >
        <Image
          style={styles.h1 }
          source={require("../assets/images/Group 1.png")}
        />
        <Text style={styles.text}> Beinenvenue{"\n"}
          Le petit Souk</Text>
        <TouchableOpacity 
        style={styles.button}
         onPress={() => router.push("/menu")}
         >
          <Text style={styles.buttonText}>Voir Le Menu </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Backg: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"

  },
  h1: {

    justifyContent: "center",
    alignItems: "center",
marginBottom: 60,
  },
  button: {
    backgroundColor: "#012909",
paddingHorizontal: 30,
paddingVertical:15,
borderRadius:12,
  
  top: 99,

   
  },
  buttonText: {
fontSize:20,
fontWeight:"bold",
 color:"white"
  },

})
