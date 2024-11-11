import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '@/constants';

type props = {
    focused: boolean;
    size: number;
    name: React.ComponentProps<typeof AntDesign>['name'];

}


 export const Tabsicon = ({ focused, size, name }: props ) : JSX.Element => {
    return (
        <AntDesign
        name = {name}
        size = {size}
        color = {focused ? colors.yellow : colors.dark}
        style = {{ marginBottom: -3 }}
        />
    )

 }
  

export default Tabsicon