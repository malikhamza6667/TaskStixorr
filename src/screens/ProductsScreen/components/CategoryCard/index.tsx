import React from "react";
import { View,Text, TouchableOpacity } from "react-native";

import {styles} from './styles'
type Props={
    selected: string
    title: string
    onPress?:()=>void
}

export const CategoryCard:React.FC<Props>=({title,selected,onPress})=>{
    return(
<TouchableOpacity  
onPress={onPress}
style={styles({selected:selected==title}).card}>
    <Text style={styles({selected:selected==title}).text}>{title}</Text>
</TouchableOpacity>
    )
}