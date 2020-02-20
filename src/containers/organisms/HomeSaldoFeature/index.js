
import React, { Component } from "react";
import {View,Text,Image} from 'react-native'
import SaldoFeature from '../../../components/molecules/SaldoFeature'
import SaldoLimit from "../../../components/atoms/Saldo-limit";
import SaldoTitle from "../../../components/atoms/Saldo-title"
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";


class HomeSaldoFeature extends Component {
    render () {
        return (
            <View style={{flexDirection:'row',paddingTop:20,paddingBottom:14,backgroundColor:'#2F65BD',borderBottomLeftRadius:6,borderBottomRightRadius:6}}>
                <SaldoFeature onPress={() => this.props.navigation.navigate('Akun')} title="Transfer" img={require('../../../assets/icon/pay.png')} />
                <View style={{ alignItems: 'center'}} >
                    <SaldoTitle />
                    <SaldoLimit / >    
                </View>
                {/* <SaldoFeature title="Transfer" img={require('../../../assets/icon/pay.png')}  /> */}
                <SaldoFeature onPress={() => this.props.navigation.navigate('Akun')} title="TopUp" img={require('../../../assets/icon/topup.png')} />
          </View>
        )
    }
}
export default withNavigation (HomeSaldoFeature);