import React from 'react';
import {Text,View, Button, ShadowPropTypesIOS} from 'react-native';
import HomeMenuBar from '../../organisms/HomeMenuBar';

const MenuAgen = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Menu Agen Pages</Text>
                <Button title="Go to detail" onPress={() => props.navigation.navigate ('AgenDetail') } />
            </View>
            <View>
                <HomeMenuBar />
            </View>
        </View>
    )
}

export default MenuAgen;