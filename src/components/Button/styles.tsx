import { hp,wp } from "@helpers";
import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    button:{
       
            backgroundColor:'black',
            width:wp(30),
            height:hp(5),
            marginVertical:hp(1.5),
            marginHorizontal:hp(1),
            justifyContent:'center',
            alignItems:'center',
            borderRadius:20
          },
          textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          },
        
    
})