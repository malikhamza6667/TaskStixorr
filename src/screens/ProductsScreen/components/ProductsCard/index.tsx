import React from "react";

import {View, Text, Image, TouchableOpacity} from 'react-native'
import { styles } from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons'
type Props={
    image: string,
    title:string,
    price: string,
    rating: number,
    stock:number,
    onPress:()=>void
}

export const ProductCard:React.FC<Props>=({image,onPress,title,price,stock,rating})=>{
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container}>
        <Image
        source={{uri:image}}
        style={styles.image}
        resizeMode="contain"
        resizeMethod='scale'
        />
                        <Text style={styles.titleText} >{title}</Text>
                        <View style={styles.row}>
                        <Text style={styles.ratingText} >{rating}</Text> 
                        <Ionicons name='star' color='orange' size={20}/>
                        </View>
                        <Text  style={styles.priceText}>{price}</Text>
                        <Text  style={styles.priceText}>{stock>0? 'Available Now':'Out of stock'}</Text>
                    </TouchableOpacity>
    )
}