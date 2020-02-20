import React from 'react';
import {Text,View, Button} from 'react-native';

const Orders = (props) => {
    return (
        <View>
            <Text>Orders Pages</Text>
            <Button title="Go to detail" onPress={() => props.navigation.navigate ('OrderDetail') } />

        </View>
    )
}

export default Orders;