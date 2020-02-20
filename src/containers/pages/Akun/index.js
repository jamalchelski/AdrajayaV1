import React from 'react';
import {Text,View, Button, ShadowPropTypesIOS} from 'react-native';
import HomeMenuBar from '../../organisms/HomeMenuBar';

const Akun = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Menu Akun</Text>
            </View>
            <View>
                <HomeMenuBar />
            </View>
        </View>
    )
}

export default Akun;