import { hp,wp } from "@helpers";
import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        height: hp(40),
        backgroundColor:'white',
        elevation:5,
        width: wp(90),
        borderRadius:10,
        padding: hp(3),
        marginVertical:hp(2),
        alignSelf:'center'

    },
    image:{
        height:hp(8),width:wp(30),alignSelf:'center'
    },
    modalText:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'flex-start',
        color:'black'
      },
      roundBTN:{
        padding: hp(2),
        borderRadius:9999,
        justifyContent:'center',
        // backgroundColor:'black',
      },
      row:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:hp(1)
      },
      totalContainer:{
        elevation:5,
        width: wp(90),
      
      
        marginVertical:hp(2),
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:10,
        margin:hp(1),
        padding:hp(2)
      },
      totalUnitText:{
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        textAlign:'left',
        flex:0.5
      },
      totalAnswerText:{
        fontSize:14,
      
        fontWeight:'bold',
        color:'black',
        textAlign:'left',
        flex:0.5
      },
      TotalTitle:{
        fontSize:20,
        textTransform:'capitalize',
        fontWeight:'bold',
        padding:hp(1)
      }
})