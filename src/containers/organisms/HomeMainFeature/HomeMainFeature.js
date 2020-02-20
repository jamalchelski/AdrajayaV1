import React, { Component } from "react";
import {View} from 'react-native';
import MainMenu from '../../../components/molecules/MainMenu'
import {withNavigation} from 'react-navigation'



class HomeMainfeature extends Component {
    render() {
        return (
            <View style={{flexDirection:'row',flexWrap:'wrap', marginTop: 18}}>
            <View style={{justifyContent:'space-between',flexDirection:'row', width:'100%', flexWrap:'wrap'}}>
              <MainMenu onPress={() => this.props.navigation.navigate('Pulsa')} title="PULSA" img={require('../../../assets/icon/go-pulsa.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('PaketData')} title="PAKET DATA" img={require('../../../assets/icon/data.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('Pln')} title="PLN" img={require('../../../assets/icon/pln.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('Bpjs')} title="BPJS" img={require('../../../assets/icon/bpjs.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('PaketData')} title="PDAM" img={require('../../../assets/icon/pdam.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('PaketData')} title="E-COMMERS" img={require('../../../assets/icon/e-commers.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('PaketData')} title="BAF" img={require('../../../assets/icon/baf.png')} />
              <MainMenu onPress={() => this.props.navigation.navigate('More')} title="MORE" img={require('../../../assets/icon/go-more.png')} />
            </View>
          </View>
        )
    }
}

export default withNavigation (HomeMainfeature);