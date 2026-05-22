import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Menu(){
const router = useRouter();
const menu =[
{
  id:1,
  name: "Tajin Maroccan",
  price:"80 DH"  ,
  image: require("../assets/images/image 2.png")
},
{
    id:2,
name:"Passtilla",
price: "150 DH",
image: require("../assets/images/image 3.png")
},
{
    id:3,
    name:"Salad ",
    price:"50 DH",
    image: require("../assets/images/image 4.png")
},
{
    id:4,
    name:"Jus de fruits",
    price:"30 DH",
    image: require("../assets/images/image 5.png")
},
{
id : 5,
name: "couscouse",
 price:"60 DH",
 image:require("../assets/images/image 8.png")


}


];


return(
    <>
    <Image
       
        style={[ StyleSheet.absoluteFill, { width:"100%",height: "100%"}]}
        source={require("../assets/images/bgrmenu.png")}
    />
<View style={styles.container}>

 <TouchableOpacity 
        style={styles.button}
         onPress={() => router.back()}
         >
          <Text style={styles.buttonText}>Retour   L'accueil</Text>
        </TouchableOpacity>
        <Text style={ styles.h1}> Menu du jour</Text>

</View>
<ScrollView
contentContainerStyle={styles.menuContainer}
showsVerticalScrollIndicator={false}
>
{menu.map((item)=>(
  <View key={item.id}  style={styles.card}>
    <Image source={item.image} style={styles.foodimage}/>
    <View>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </View>
))}
</ScrollView>
</>

);

}


const styles= StyleSheet.create({
container :{


},

button:{
backgroundColor:"#1c3d06",
paddingHorizontal:12,
paddingVertical:15,
borderRadius:12,
width:150,
top:50,

},
buttonText:{
color:"white",
fontSize:15,
fontWeight:"bold",
},
h1:{
   fontSize:30 ,
   fontWeight:"bold",
   top:70,
 textAlign: "center"
},
menuContainer:{
    padding: 20,
    flexGrow: 1,
    top:70
},
card:{
flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  
},
foodimage:{

},
foodName:{
fontSize:25,
fontWeight:"bold",
paddingLeft:20
},
price:{
fontSize:20,
fontWeight:"bold",

paddingLeft:20
},

});