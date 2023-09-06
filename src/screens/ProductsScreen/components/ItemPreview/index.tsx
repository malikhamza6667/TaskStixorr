import { Button } from '@src/components';
import { hp, wp } from '@src/helpers';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable,Image, View, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
type Props={
    visible: boolean
    onCLose: ()=> void
    onPress:()=>void
    item: any
}

export const PreviewModal:React.FC<Props> = ({visible,onCLose,item,onPress}) => {
 
const RenderImages=({item}:{item:string})=>{
return(
    <Image
            source={{uri: item}}
            style={{height:hp(10),width:wp(30)}}
            resizeMode='contain'
            />
)
}

  return (

      <Modal
        animationType="slide"
        transparent={true}

        visible={visible}
        onRequestClose={onCLose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Text style={styles.DescText}>Product Description</Text>
            <View>
                <View style={{height:hp(20)}}>
                <FlatList
            data={item.images}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={RenderImages}
            horizontal
            />
            
                </View>
           
            <Text style={styles.modalText}>{item.title}</Text>
            <Text style={styles.modalText}>{`$ ${item.price}`}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.modalText} >{item.rating}</Text> 
                        <Ionicons name='star' color='orange' size={20}/>
                        </View>
            <Text style={styles.modalText}>{item.stock >0 ? `${item.stock} items available`:'Out of stock'}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Button
              title='Cancel'
              onPress={onCLose}
              />
               <Button
              title='Add To Cart'
              onPress={onPress}
              />
           
            </View>
            
          </View>
        </View>
      </Modal>

     
  
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
   
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: hp(3),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: hp(3),
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

 
 

  
  DescText:{
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center',
    padding:hp(2),
    color:'black'
  },
  modalText:{
    fontSize:18,
    fontWeight:'bold',
    padding:hp(1),
    alignSelf:'flex-start',
    color:'black'
  }
});

