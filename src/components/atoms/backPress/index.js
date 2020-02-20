import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BackPress = ({onPress}) => {
    return (
    <TouchableOpacity onPress={onPress} >
        <Icon name="arrowleft" size={30} color="white" />
    </TouchableOpacity>
    )
}
export default BackPress;
