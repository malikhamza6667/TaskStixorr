import { hp } from "@helpers";
import { StyleSheet } from "react-native";

export const styles=()=> StyleSheet.create({
    titleText:{
        fontSize: 25,
        textDecorationLine:'underline',
        color:'black',
        padding:hp(2),
        fontWeight:'bold'
    },
    noItemContainer:{
        backgroundColor:'gray',
        padding:hp(3),
        margin:hp(2),
        justifyContent:'center',
        alignItems:'center'
    },
    noItemText:{
        fontSize:16,
        textTransform:'uppercase',
        fontWeight:'bold',
        color: 'white'
    }
})