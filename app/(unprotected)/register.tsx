import { Loginform } from "@/components/form/Loginform";
import { Title } from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import { Text, View } from "react-native";

export default function register() {
    return (
        <Wrapper>
        <Title title='Welcome'/>
        <Loginform register />
       </Wrapper>
    )
}