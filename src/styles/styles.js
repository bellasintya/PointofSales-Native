import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create ({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
    },
    container : {
        flex: 1,
    },
    containerForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: '#ffdb58',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 5,
        marginHorizontal: 28
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#5B0909',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13, 
        marginHorizontal: 28,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    logoImage: {
        width: 100, 
        height: 100, 
        borderRadius:150, 
        marginTop: 30
    },
    logoText: {
        marginTop: 35,
        fontSize: 18,
        color: '#3D0E1E'
    }
})