import React, { Component } from "react";
import { Text, View,Image, ScrollView } from 'react-native';
import HomeMenuBar from '../../../containers/organisms/HomeMenuBar';
import HomeMainfeature from '../../../containers/organisms/HomeMainFeature/HomeMainFeature';
import HomeHeader from '../../../containers/organisms/HomeHeader';
import HomeBanner from '../../../containers/organisms/HomeBanner';
import 'react-native-gesture-handler';
import NewsBanner from "../../../components/molecules/NewsBanner";
import {withNavigation} from 'react-navigation'

class Home extends Component {
    render() {
      const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
              <ScrollView style={{flex:1,backgroundColor: 'white', paddingTop: 8}}>
                <HomeHeader />
                <View>
                  <HomeMainfeature />
                </View>
                <NewsBanner onPress={() => this.props.navigation.navigate ('NewsDetail')} />
                <NewsBanner onPress={() => this.props.navigation.navigate ('NewsDetail')} />
              </ScrollView>
              <View>
                <HomeMenuBar />
              </View>
            </View>
        )
    }
}

export default withNavigation (Home);