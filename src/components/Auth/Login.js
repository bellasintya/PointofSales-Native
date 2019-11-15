import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    TextInput
} from 'react-native';

import { stylesLogin } from '../../styles/loginStyles';
import { styles } from '../../styles/styles';

import Logo from '../Logo';

class Login extends Component {
    render() {
        return (
            <View style={stylesLogin.container}>
                <Logo />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
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
                    <Text style={styles.buttonText}> Login</Text>
                </TouchableOpacity>
                
                <View style={stylesLogin.signupTextCont}>
                    <Text style={stylesLogin.signupText}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate ('SignupRoute')}>
                    <Text style={stylesLogin.signupText}> Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Login;