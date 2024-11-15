import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '@/constants'




export const Loading = (): JSX.Element => {
  return (
    <View style={{flex:1, justifyContent: 'center',
        alignItems: 'center'}}>
        <ActivityIndicator size='large' color={colors.yellow}/>
    </View>
  )
}

export default Loading