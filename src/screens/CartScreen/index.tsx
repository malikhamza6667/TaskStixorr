import { SafeAreaView } from "@src/core-ui";
import { RootState } from "@src/redux";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { removeFromCart } from "@src/redux";
import { CartItemCard } from "./components";
import { styles } from "./styles";


export const CartScreen=()=>{
    const items= useSelector((state:RootState)=> state.CartSlice.items)
    console.log("Items",items)
    return(
        <SafeAreaView>
            <FlatList
            contentContainerStyle={{paddingBottom:20}}
            data={items}
            renderItem={({item,index})=> item && <CartItemCard index={index} item={item}/>}
            keyExtractor={(item,index)=>index.toString()}
            ListEmptyComponent={()=>{
                return(
                    <View style={styles().noItemContainer}>
        <Text style= {styles().noItemText}>Sorry No Items In Cart</Text>
    </View>
                )
            }}
            />
     
        </SafeAreaView>
    )
}
