import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

const Login = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image style={styles.loginImage}
        source={require("./../../../assets/images/login.png")}
      />
      <View style={styles.subContainer}>
        <Text style={styles.subConText}>
            Let's Find <Text style={styles.subConText2}>
                Professional Cleaning and repair 
            </Text> Service
        </Text>
        <Text style={styles.content}>Best App to find services near you which deliver you a Professional service </Text>

        <TouchableOpacity onPress={()=>console.log("butona tiklandi")} style={styles.button}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15,
    },
    subContainer:{
        width:"100%",
        backgroundColor:Colors.PRIMARY,
        height:"70%",
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
    },
    subConText:{
        fontSize:25,
        color:Colors.WHITE,
        textAlign:"center",
    },
    subConText2:{
        fontWeight:"bold",
    },
    content:{
        fontSize:14,
        color:Colors.WHITE,
        textAlign:"center",
        marginTop:20,
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:18
    },
    buttonText:{
        textAlign:"center",
        fontSize:15,
        color:Colors.PRIMARY,
    }
})