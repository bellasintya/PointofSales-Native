import React, { Component } from 'react';

import { Thumbnail } from 'native-base';

import {
    Text,
    View,
} from 'react-native';

import { styles } from '../styles/styles.js';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.containerForm}>
                <Thumbnail style={styles.logoImage} large source={require('../../assets/img/logo.png')} />
                <Text style={styles.logoText}>Welcome to Me & Mo!</Text>
            </View>
        )
    }
}