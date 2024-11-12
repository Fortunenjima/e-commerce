import Searchinput from "@/components/Searchinput";
import Wrapper from "@/components/ui/Wrapper";
import { useState } from "react";


export default function Home() {
    const [value, setValue] = useState('');
    const onClear = () => setValue('');
    const onChange = (value:string) => {
        setValue(value);
    };

return( <Wrapper>

<Searchinput onChange={onChange} value={value} onClear={onClear}/>
</Wrapper>
)
}