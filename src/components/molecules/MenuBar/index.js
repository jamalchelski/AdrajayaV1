import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const MenuBar = (props) => {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity onPress={props.onPress} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:26,height:26}} source={props.img} />
          <Text style={{fontSize:12,color:'#545454',marginTop:4, color: props.active ? '#43AB4A' : '#545454'}}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default MenuBar;