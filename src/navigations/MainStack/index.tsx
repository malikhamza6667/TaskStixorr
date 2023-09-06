import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {ProductsScreen,CartScreen} from "@screens"
import { RootState } from "@src/redux"
import { StyleSheet, TouchableOpacity, View ,Text} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from "react-redux"


const stack= createNativeStackNavigator()

export const MainRoutes=()=>{
    function CustomHeaderRight() {

        const numberOfItems = useSelector((state: RootState) => state.CartSlice.numberOfItems)
        const navigation :any= useNavigation();
      
        const handleIconPress = () => {
          navigation.navigate('CartScreen'); // Replace 'OtherScreen' with the name of your other screen
        };
      
        return (
          <TouchableOpacity onPress={handleIconPress}>
             <View style={styles.badgeContainer}>
             <Ionicons name="cart" size={40} color={'black'}/>
        {numberOfItems> 0 &&<View style={styles.badge}>
          <Text style={styles.badgeText}>{numberOfItems}</Text>
        </View>}
      </View>
        
          </TouchableOpacity>
        );
      }
    return(
        <NavigationContainer>
<stack.Navigator>
    <stack.Screen name={'ProductsScreen'} component={ProductsScreen}
    options={{headerTitle:'E-Commerce App',
    headerRight: () => <CustomHeaderRight />


}}
    />
    <stack.Screen name={'CartScreen'} component={CartScreen}/>
</stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    badgeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    badge: {
      backgroundColor: 'red', // Badge background color
      borderRadius: 10, // Adjust as needed
      paddingHorizontal: 6,
      paddingVertical: 2,
      marginLeft:-20,
      marginTop:-20
    },
    badgeText: {
      color: 'white', // Text color for the badge
      fontSize: 12, // Adjust as needed
      fontWeight: 'bold',
    },
  });