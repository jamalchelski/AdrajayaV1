import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import MenuBar from '../../../components/molecules/MenuBar';
import {withNavigation} from 'react-navigation'

class HomeMenuBar extends Component {
    render() {
        return (
            <View style={{height:54,flexDirection:'row',backgroundColor:'white',borderTopWidth:1, borderTopColor:'#545454'}}>
                <MenuBar onPress={() => this.props.navigation.navigate('Home')} title="Home" img={require('../../../assets/icon/home-active.png')} active />
                <MenuBar onPress={() => this.props.navigation.navigate('MenuAgen')} title="Menu Agen" img={require('../../../assets/icon/order.png')} />
                <MenuBar onPress={() => this.props.navigation.navigate('Histori')} title="Histori" img={require('../../../assets/icon/inbox.png')} />
                <MenuBar onPress={() => this.props.navigation.navigate('Akun')} title="Akun" img={require('../../../assets/icon/account.png')} />
            </View>
        )
    }
}

export default withNavigation (HomeMenuBar);
