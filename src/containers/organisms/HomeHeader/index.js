import React, { Component } from "react";
import {View} from 'react-native';
import SaldoTitle from '../../../components/atoms/Saldo-title';
import Adrajaya from '../../../components/molecules/Adrajaya';
import SaldoLimit from '../../../components/atoms/Saldo-limit';
import HomeSaldoFeature from '../HomeSaldoFeature';

class HomeHeader extends Component {
    render() {
        return (
            <View style={{marginHorizontal:12,marginTop:8}}>
            {/* Bagian menu saldo */}
               <View style={{flexDirection:'row',padding:14,justifyContent:'center',backgroundColor:'#25a1fa',borderTopLeftRadius:6,borderTopRightRadius:6}}>
                 <Adrajaya />
               </View>
             {/* Saldo Feature */}
               <HomeSaldoFeature />
           </View>
        )
    }
}
export default HomeHeader;