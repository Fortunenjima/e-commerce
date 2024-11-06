import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from '../ui/CustomButton'


export const Loginform = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (text: string) => {setEmail(text)}
  const handlePasswordChange = (text: string) =>{
    setPassword(text);
  }
  const handleSubmit = () => {
    console.log({ email, password})
  }
    
  return (
    <View style={styles.container}>
    <CustomInput label='Email'
     placeholder='Enter your email'
  keyboardType='email-address'
   value={email}
  onChangeText={handleEmailChange}
  />
  <CustomInput
  label= 'Password'
  placeholder='Enter your password'
  keyboardType='email-address'
  onChangeText={handlePasswordChange}
  value={password}
  secureTextEntry/>

  <CustomButton buttonTitle='Sign in' onPress={handleSubmit}/>
  </View>
  );
}


export default Loginform


const styles = StyleSheet.create({
  container: {
      gap: 15,
      marginTop: 20,
  }
})