import { ActivityIndicator,Text,View } from "react-native"

import {styles} from './styles'

export const Loader:React.FC=()=>{
    return(
        <View style={styles.container}>
 <ActivityIndicator
 size={'large'}
 color={'black'}
 style={{alignSelf:'center'}}
 
 />
        </View>
       

    )
}