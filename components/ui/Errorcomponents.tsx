import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

type Props = {
    onRefetch: () => void
}

export const Errorcomponents = ({onRefetch}: Props): JSX.Element => {
  return (
    <View style={{flex:1, justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text style={{color: 'red', 
        fontSize: 40, 
        fontWeight: 'bold',
         textAlign: 'center',
          marginBottom: 15,
          }}>Something went wrong</Text>
      <CustomButton style={{width: 200}} buttonTitle='Retry' onPress={onRefetch}/>
    </View>
  )
}

export default Errorcomponents