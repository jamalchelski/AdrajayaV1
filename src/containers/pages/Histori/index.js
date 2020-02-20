import React from 'react';
import {Text,View, Button, ShadowPropTypesIOS} from 'react-native';
import HomeMenuBar from '../../organisms/HomeMenuBar';

const Histori = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Menu Histori</Text>
            </View>
            <View>
                <HomeMenuBar />
            </View>
        </View>
    )
}

export default Histori;