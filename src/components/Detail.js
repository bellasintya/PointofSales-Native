import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js';

class Detail extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Detail Screen in Stack Navigation</Text>
                <Button 
                onPress={() => this.props.navigation.navigate ('TabRoute')} 
                title='Go to Tabs' /> 
            </View>
        );
    }
}

export default Detail;