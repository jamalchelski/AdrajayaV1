import React,{Component} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Contact from 'react-native-vector-icons/Ionicons';
import BackPress from '../../../components/atoms/backPress';




export default class Pulsa extends Component {
    constructor(props){
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);

    }
    handleBackButtonClick(){
        // alert('You Click back , Now Screen  will move to next Page');
        this.props.navigation.navigate('Home');
        return true;
    }
    static navigationOption = {
        title: 'Pulsa Page',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1}}>
            <View style={{height:70 ,backgroundColor:'#25a1fa', flexDirection: 'row',alignItems: 'center',marginBottom:15}}>
                <View style={{paddingLeft: 20}}>
                    <BackPress onPress={() =>navigate('Home')} />
                </View>
                <Text style={{color:'white', fontSize:25,paddingLeft:10}}>PULSA</Text>
            </View>
            <View style={{ height: 80, justifyContent: 'center'}}>
                <View style={{marginHorizontal: 20, flexDirection: 'row'}} >
                    <View style={{width: 50,alignItems: 'center',justifyContent: 'center'}}>
                        <Contact name="ios-contact" size={45} color="#25a1fa" />
                    </View>
                    <View style={{possition: 'relative',flex:1,marginLeft: 25,marginRight:10}}>
                        <Text style={{marginLeft:4}}>Nomor Ponsel</Text>
                        <TextInput placeholder="08xx xxxx xxxx" style={{borderBottomWidth: 2, borderColor: '#25a1fa', fontSize: 19, height: 40, paddingRight:20, marginRight: 10 }} />
                        <Text style={{fontSize: 11,color: 'red'}}>Nomor ponsil tidek valid</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 80, justifyContent: 'center',marginTop:14}}>
                <View style={{marginHorizontal: 20, flexDirection: 'row'}} >
                    <View style={{width: 50,alignItems: 'center',justifyContent: 'center'}}>
                        {/* <Contact name="ios-contact" size={45} color="#25a1fa" /> */}
                    </View>
                    <View style={{possition: 'relative',flex:1,marginLeft: 25,marginRight:10}}>
                        <Text style={{marginLeft:4}}>Nominal</Text>
                        <TextInput placeholder="Pilih Nominal" style={{borderBottomWidth: 2, borderColor: '#25a1fa', fontSize: 19, height: 40, paddingRight:20, marginRight: 10 }} />
                    </View>
                </View>
            </View>

            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>Provider</Text>
                
                <Text>Nominal</Text>
            </View>
        </View>
        );
    }
}








// const Pulsa = (props) => {
//     return (
//         <View style={{flex:1}}>
//             <View style={{height:70 ,backgroundColor:'#25a1fa', flexDirection: 'row',alignItems: 'center',marginBottom:15}}>
//                 <View style={{paddingLeft: 20}}>
//                     <BackPress />
//                 </View>
//                 <Text style={{color:'white', fontSize:25,paddingLeft:10}}>PULSA</Text>
//             </View>
//             <View style={{ height: 80, justifyContent: 'center'}}>
//                 <View style={{marginHorizontal: 20, flexDirection: 'row'}} >
//                     <View style={{width: 50,alignItems: 'center',justifyContent: 'center'}}>
//                         <Contact name="ios-contact" size={45} color="#25a1fa" />
//                     </View>
//                     <View style={{possition: 'relative',flex:1,marginLeft: 25,marginRight:10}}>
//                         <TextInput placeholder="08xx xxxx xxxx" style={{borderBottomWidth: 1, borderColor: '#25a1fa', fontSize: 19, height: 40,paddingLeft: 20, paddingRight:20, marginRight: 10 }} />
//                     </View>
//                 </View>
//             </View>

//             <View style={{alignItems:'center',justifyContent:'center'}}>
//                 <Text>Provider</Text>
                
//                 <Text>Nominal</Text>
//             </View>
//         </View>
//     )
// }

// export default Pulsa;