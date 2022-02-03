import * as React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,ScrollView, ActivityIndicator}from "react-native"
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import firebase from 'firebase';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

// camera options
var options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option'
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
 };
 
// sell product function
const Sell = () =>{

    let id = firebase.auth().currentUser.uid

    // states 
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[address,setAddress]=useState("")
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const [image,setImage]=useState(null)
    const[loading,setLoading]=useState(false)

    // record submission to firebase
    const submitRecord = () => {
        firebase.database().ref(`Productss/${id}`)
        .push({
            name,
            price,
            address,
            description,
            title,
            status:"Active",
            image
        })
        .then(response =>{
            // console.log(response,"RESSSSSSSSSS");
            setName("")
            setPrice("")
            setAddress("")
            setDescription("")
            setTitle("")
            setImage(null)
        })
        .catch(eror =>{
            console.log(eror,"EERRREERRR");
        }) 
    }

    // image uploader function
    const uploadImage =() =>{
        console.log("launching ----");
        launchImageLibrary(options, response =>{
            console.log(response.assets[0],"RESSSSSSSSSS");
            const source={
                uri:response.assets[0].uri,
                type:response.assets[0].type,
                name: response.assets[0].fileName
            }
            uploadImageToCloudinary(source)            
        })
    }

    //image rander
    const rendeImage=()=>{
        if(loading){
            <ActivityIndicator size="large" color="black"/>
        }
        else{
            return(
                <TouchableOpacity 
        onPress={uploadImage}
        style={styles.button}>
            <Text style={styles.buttontxt}>
                Upload Image
            </Text>
        </TouchableOpacity>
            )
        }
    }

const uploadImageToCloudinary=async (file) =>{
    console.log("uploading------");
    const data = new FormData()
    data.append('file',file)
    data.append("upload_preset","lc31yhqm")
    data.append("cloud_name","ddg5474bs")
    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/ddg5474bs/image/upload",data)
        console.log(res.data.secure_url,"RESSSSSSSSSSSSSSpppppp");
        setImage(res.data.secure_url)
    } catch (error) {
        console.log(error,"ERRRRORRRR");
    }
}


    return(
        <View style={styles.mainviewstyle}>
            <Header heading="Sell Your Product"/>

<ScrollView>
            <View style={styles.inputtext}>
            <TextInput
            placeholder="Name"
            placeholderTextColor="black"
            style={styles.textstyle}
            value={name}
            onChangeText={(main)=>setName(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Title"
            placeholderTextColor="black"
            style={styles.textstyle}
            value={title}
            onChangeText={(main)=>setTitle(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Price"
            placeholderTextColor="black"
            style={styles.textstyle}
            value={price}
            onChangeText={(main)=>setPrice(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Description"
            placeholderTextColor="black"
            style={styles.textstyle}
            value={description}
            onChangeText={(main)=>setDescription(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Address"
            placeholderTextColor="black"
            style={styles.textstyle}
            value={address}
            onChangeText={(main)=>setAddress(main)}
            />
        </View>

        <Image
        source={{uri : image}}
        style={styles.imagestyle}
        resizeMode="contain"
        />

        {rendeImage()}

        <TouchableOpacity onPress={submitRecord} 
        style={styles.button}
        >
            <Text style={styles.buttontxt}>
                Sell Now
            </Text>
        </TouchableOpacity>
</ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    mainviewstyle:{
        flex:1,
    },
    inputtext:{
            height:40,
            borderBottomWidth:2,
            marginHorizontal:20,
            marginTop:20
    },
    textstyle:{
         marginLeft:10,
         color:"black"
},
button:{
        alignItems:"center",
        backgroundColor:"black",
        marginHorizontal:60,
        marginVertical:10,
        borderRadius:50,
        marginTop:30,
        height:40
},
buttontxt:{
    color:"#f7f7f7",
    fontSize:20,
    justifyContent:"center",
    textAlign:"center"
},
imagestyle:{
    marginTop:20,
    marginLeft:40,
    height:300,
    width:300,
    borderRadius:10
}
});
export default Sell