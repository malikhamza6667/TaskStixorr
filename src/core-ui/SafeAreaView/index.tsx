import React from "react"

import { SafeAreaView as RNSafeAreaView } from "react-native"
import {styles} from './styles'

type Props={
    children: React.ReactNode
}
export const SafeAreaView:React.FC<Props>=({children})=>{
    return(
<RNSafeAreaView style={styles.container}>
    {children}
</RNSafeAreaView>
    )
}