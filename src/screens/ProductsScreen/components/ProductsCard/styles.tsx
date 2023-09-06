import { StyleSheet } from "react-native";
import {hp,wp} from '@helpers'
export const styles= StyleSheet.create({
    container:{
        height:hp(35),
        padding:hp(1),
        justifyContent:'center',
        backgroundColor:'white',
        margin:hp(1),
        width:wp(42),
        elevation:5
    },
    titleText:{
        padding:hp(1),
        fontSize:16,
        fontWeight: 'bold',
        color: 'black',
        textTransform:'capitalize'
    },
    priceText:{
        padding:hp(1),
        fontSize:14,
        fontWeight: 'bold',
        color: 'black',
        
    },
    image:{
        height:hp(15),
        width:wp(30),
        alignSelf:'center'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    ratingText:{
        fontWeight:'bold',
        padding:hp(1),
        color:'black'
    }
})