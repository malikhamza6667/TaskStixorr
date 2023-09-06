import { hp ,wp} from "@helpers"
import { StyleSheet } from "react-native"

export const styles=StyleSheet.create({
    textInput:{
        height: hp(7),
        width:wp(90),
        marginVertical:hp(3),
        alignSelf:'center',
        borderWidth:1,
        padding:hp(1),
        borderRadius:10,
        borderColor:'gray'
    }
})