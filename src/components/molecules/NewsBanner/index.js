import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const NewsBanner = ({onPress}) => {
    return (
        <View style={{paddingTop: 16, paddingHorizontal:16}}>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../assets/logo/logo.png')} style={{height: 190, width: '100%',borderRadius: 6}} />
              <View style={{position:'absolute',opacity:0.2 ,width: '100%',height: '100%', borderRadius: 6, backgroundColor:'black'}}></View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 16,borderBottomColor:'#E8E9ED',borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}> BERITA</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
              <TouchableOpacity style={{backgroundColor: '#2F65BD', paddingHorizontal:12, paddingVertical:11,marginBottom:11,alignSelf:'flex-end',borderRadius:4}} onPress={onPress}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white',textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
    )
}

export default NewsBanner;