import React,{useState} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet} from "react-native"
import firebase from "firebase";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const loginUser = () => {
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password)

        .then(respone =>{
            setLoading(false)
            console.log(respone,"LOGINNN");
            setEmail("")
            setPassword("")
        })
        .catch(errr =>{
            setLoading(false)
            alert(errr.message)
            console.log(errr,"ERRRRRRRRRR");
        })
    }


    const renderButton = () => {
        if (loading == true){
            return(
                <ActivityIndicator
                size="large"
                color="black"
                />
            )
        }
        else {
            return(
                <TouchableOpacity style={styles.buttonstyle}
                onPress={loginUser}
                >
                <Text style={{
                    color:"#f7f7f7",
                    fontSize:25
                }}>
                    Login
                </Text>
            </TouchableOpacity>
            )
        }
    }
console.log("PROPSS>>",props);
    return(
        <View style={{
            flex:1,
            backgroundColor:"#f5f542"
        }}>
            <Text 
            style={{
                textAlign:"center",
                color:"black",
                fontSize:20,
                fontWeight:"bold" 
        }}>Welcome To Olx Application</Text>


        <View style={{
            justifyContent:"center",
            flex:1
        }}>
        <View style={{
            height:40,
            borderWidth:1,
            marginHorizontal:10,
            marginTop:10,
            borderRadius:10,
        }}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="black"
            style={{
                marginLeft:10,
                color:"black"
            }}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={{
            height:40,
            borderWidth:1,
            marginHorizontal:10,
            marginTop:20,
            borderRadius:10,
        }}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={{
                marginLeft:10,
                color:"black"
            }}
            secureTextEntry
            value={password}
            onChangeText={(main)=>setPassword(main)}
            />
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("SignUp")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"black"}}>
                Dont Have Account? SignUp
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("ForgotPassword")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"black"}}>
                Forgot Password
            </Text>
        </TouchableOpacity>


                {renderButton()}
            
        </View>

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

}
})

export default Login