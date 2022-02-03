import React,{useState} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet} from "react-native"
import firebase from 'firebase';

const SignUp = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signUpUser = () =>{
        setLoading(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        
        .then(response =>{
            let id=firebase.auth().currentUser.uid
            firebase.database().ref(`userss/${id}`)
            .set({
                name,
                email,
                isActive:"true"
            })
            .then(responsee =>{
                setLoading(false)
                alert("successful")
            })
            setLoading(false)
            // console.log(response,"RESPONSEEEE");
            setName("")
            setEmail("")
            setPassword("")
        })
        .catch(errr =>{
            setLoading(false)
            alert(errr.message)
            console.log(errr,"ERRRRRRRR");
        })
    }

    
    const renderButton = () =>{
        if (loading == true){
            return(
                <ActivityIndicator
                size="large"
                color="black"
                />
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.buttonstyle}
            onPress={signUpUser}
            >
                <Text style={styles.signuptxt}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            )
        }
    }
    // console.log("NAMEEE==>",name);
    return(
        <View style={styles.mainview}>
            <Text 
            style={styles.welcometxt}>Welcome To Olx Application</Text>


        <View style={styles.innerview}
        >
        <View style={styles.inputView}>
            <TextInput
            placeholder="Name"
            placeholderTextColor="black"
            style={styles.inputtxt}
            value={name}
            onChangeText={(main)=>setName(main)}

            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Email Address"
            placeholderTextColor="black"
            style={styles.inputtxt}
            value={email}
            onChangeText={(main)=>setEmail(main)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.inputtxt}
            secureTextEntry
            value={password}
            onChangeText={(main)=>setPassword(main)}
            />
        </View>

        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("Login")}
        >
            <Text style={{textAlign:"center", marginTop:10, color:"black"}}>
             Already Have Account? Login
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

},
signuptxt:{
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
 fontWeight:"bold"
},
innerview:{
    justifyContent:"center",
    flex:1
},
inputView:{
    height:40,
    borderBottomWidth:2,
    marginHorizontal:25,
    marginTop:10
},
inputtxt:{
    marginLeft:10,
    color:"black"
}
});

export default SignUp