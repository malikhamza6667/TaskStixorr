import { TouchableOpacity,Text } from "react-native"
import { styles } from "./styles"
import React from "react"
type Props={
    title:string,
    onPress:()=>void}

export const Button:React.FC<Props>=({title,onPress})=>{
    return(
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        >
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}