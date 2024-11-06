import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants';

type props = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    label: string;
    secureTextEntry?: boolean
}


export const CustomInput = ({
    placeholder,
    value,
    onChangeText,
    label,
    keyboardType = 'default',
    secureTextEntry
}: props): JSX.Element => {
    return(
       <View>
        <Text style={styles.label}>{label}</Text>
         <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry} />
            </View>
       </View>
    );
};
const styles = StyleSheet.create({
    container:{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 5,
        padding:10,
        height:55,
        justifyContent: 'center',
    },
    input:{
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: colors.dark,
    },
    label:{
        color: colors.dark,
        fontSize:15,
        marginBottom:5,
        fontWeight: 'bold',
    }
})

export default CustomInput

