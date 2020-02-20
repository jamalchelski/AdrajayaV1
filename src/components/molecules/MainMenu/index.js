import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';

const MainMenu = (props) => {
    return (
      <View style={{width: '25%', alignItems: 'center',marginBottom:18}}>
        <TouchableOpacity onPress={props.onPress} style={{flex:1,alignItems:'center',justifyContent:'center'}} >
          <View style={{justifyContent: 'center',alignItems: 'center' ,width: 58, height: 58, borderWidth: 1, borderColor:'#EFEFEF',borderRadius: 18}}>
            <Image source={props.img} />
          </View>
          <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}} >{props.title}</Text>
        </TouchableOpacity>
    </View>
    )
  }

  export default MainMenu;