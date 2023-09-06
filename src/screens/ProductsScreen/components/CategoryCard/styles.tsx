import React from "react";
import { StyleSheet } from "react-native";
import {hp,wp} from '@helpers'

export const styles=({selected}:{selected?:boolean})=> StyleSheet.create({
    card:{
height: hp(5),
width: wp(35),
padding: hp(0.5),
justifyContent:'center',
alignItems:'center',
backgroundColor:selected? 'black':'gray',
elevation:5,
borderRadius:30
    },
    text:{
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
        textTransform:'capitalize'
    }
})