import React, { Component } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Logo from '../Logo';

import { signupStyles } from '../../styles/signupStyles';
import { styles } from '../../styles/styles';

export default class Signup extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Full Name"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                />
                    <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Username"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate ('App')}>
                    <Text style={styles.buttonText}> Sign Up</Text>
                </TouchableOpacity>
                <View style={signupStyles.signupTextCont}>
                    <Text style={signupStyles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate ('LoginRoute')}>
                        <Text style={signupStyles.signupButton}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
