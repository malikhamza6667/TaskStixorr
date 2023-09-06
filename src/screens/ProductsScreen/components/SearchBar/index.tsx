import React from "react"
import { TextInput } from "react-native"
import {styles} from './styles'

type Props={
    value: string
    PlaceHolder: string
    onChangeText: (text:string)=>void
}

export const SearchBar:React.FC<Props>=({value,onChangeText,PlaceHolder})=>{
    return(
        <TextInput
placeholder={PlaceHolder}
    value={value}
    onChangeText={onChangeText}
    style={styles.textInput}
        />
    )
}