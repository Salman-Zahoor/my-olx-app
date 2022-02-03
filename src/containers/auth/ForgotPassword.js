import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import firebase from "firebase";
import { vh } from "../../constants";


const ForgotPassword=(props) =>{
    const [resetEmail,setResetEmail]=useState("")

    const PasswordReset=()=>{
        firebase.auth().sendPasswordResetEmail(resetEmail)
        .then(response=>{
            setResetEmail("")
            alert("Reset Email has bees sent")
        })
        .catch(error=>{
            alert(error.message)
        })
    }
return(
    <View style={styles.mainview}>

    <Text style={styles.welcometxt}>Welcome To Olx Application</Text> 

        <View style={styles.innerview}>
        <View style={styles.inputView}>
        <TextInput
        placeholder="Reset Email"
        placeholderTextColor="black"
        style={styles.placeholder}
        value={resetEmail}
        onChangeText={(text)=>setResetEmail(text)}
        />
        </View>
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("Login")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"black"}}>
              Login
            </Text>
        </TouchableOpacity>

<TouchableOpacity style={styles.buttonstyle}
                onPress={PasswordReset}
                >
                <Text style={styles.textstyle}>
                Send Reset Password
                </Text>
            </TouchableOpacity>
    </View>
)
}
const styles=StyleSheet.create({
    buttonstyle:{
        alignItems:"center",
        backgroundColor:"black",
        marginHorizontal:40,
        marginVertical:10,
        borderRadius:10,
        marginTop:30,

},
placeholder:{
    marginLeft:10,
     color:"black"
},
textstyle:{
    color:"#f7f7f7",
    fontSize:25
},
mainview:{
    flex:1,
    backgroundColor:"#f5f542"
},
welcometxt:{
    textAlign:"center",
    color:"black",
    fontSize:20,
 fontWeight:"bold",
 marginTop:vh*0.02
},
innerview:{
    justifyContent:"center",
    marginTop:vh*0.30
},
inputView:{
    height:40,
    borderBottomWidth:2,
    marginHorizontal:25,
    marginTop:10,
    color:"black"

},
})

export default ForgotPassword