import React from 'react';
import {Text,View,ScrollView} from 'react-native';
import HomeBanner from '../../organisms/HomeBanner';
import NewsBanner from '../../../components/molecules/NewsBanner';

const NewsDetail = () => {
    return (
        <View style={{flex:1}}>
            <ScrollView style={{flex:1, padding:8, paddingTop:10}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink'}}>
                    <Text>News detain Pages</Text>
                </View>
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
            </ScrollView>
        </View>
    )
}

export default NewsDetail;