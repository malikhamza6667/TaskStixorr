import { View,Text,Image, TouchableOpacity} from "react-native"
import { styles } from "./styles"
import { Button } from "@components"
import { addQuantity, removeFromCart, removeQuantity } from "@redux"
import { useDispatch } from "react-redux"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { hp } from "@src/helpers"
type Props={
    item: any
    index:number

}

const IconButton=({iconname,onPress}:{iconname:string,onPress:()=>void})=>{
return(
    <TouchableOpacity 
    style={styles.roundBTN}
    onPress={onPress}
    >
        <MaterialCommunityIcons name={iconname} color={'black'} size={30}/>
    </TouchableOpacity>
)
}

export const CartItemCard:React.FC<Props>=({item,index})=>{
    const dispatch=useDispatch()
    return(
<View >

            
   <View style={styles.totalContainer}>
   <View style={styles.row}>
       
        <Text style={styles.TotalTitle}>{item.title}</Text>
        <Image
            source={{uri: item.images[0]}}
            style={styles.image}
            resizeMode='contain'
            /> 
            
    </View>
    <Text style={styles.TotalTitle}>Total</Text>
    <View style={styles.row}>
        <Text style={styles.totalUnitText}>Quantity</Text>
        <Text style={styles.totalAnswerText}>{item.quantity}</Text>
    </View>
   <View style={styles.row}>
        <Text style={styles.totalUnitText}>Per Unit</Text>
        <Text style={styles.totalAnswerText}>$ {item.price}</Text>
    </View>
   <View style={styles.row}>
        <Text style={styles.totalUnitText}>Grand Total</Text>
        <Text style={styles.totalAnswerText}>$ {item.quantity*item.price}</Text>
    </View>
    <View style={styles.row}>
<IconButton iconname="minus-thick" onPress={()=> dispatch(removeQuantity(index))}/>
<Button
    onPress={()=>dispatch(removeFromCart(item))}
    title="Remove Item"
    />
<IconButton iconname="plus" onPress={()=> dispatch(addQuantity(index))}/>
</View>
   </View>


   
</View>
    )
}