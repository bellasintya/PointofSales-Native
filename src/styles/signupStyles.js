import { StyleSheet } from 'react-native';

export const signupStyles = StyleSheet.create({

    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: '#3D0E1E',
        fontSize: 16
    },

    signupButton: {
        color: '#3D0E1E',
        fontSize: 16,
        fontWeight: '500'
    }
    
});
