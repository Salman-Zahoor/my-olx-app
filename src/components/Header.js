import React from "react";
import { View, Text,StyleSheet } from "react-native";

const Header =((props) =>{
    return(
        <View style={styles.heaerstyle}>
            <Text style={styles.headertext}>
                {props.heading}
            </Text>
        </View>
    )
})
const styles=StyleSheet.create({
   heaerstyle:{
       height:60,
       backgroundColor:"black",
       alignItems:"center",
       justifyContent:"center"
   },
   headertext:{
       fontSize:20,
       color:"white",
       fontWeight:"bold"
   }
});
export default Header