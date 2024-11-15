import Errorcomponents from "@/components/ui/Errorcomponents";
import Loading from "@/components/ui/Loading";
import { Product } from "@/components/Products";

import Searchinput from "@/components/Searchinput";
import {Wrapper} from "@/components/ui/Wrapper";
import { useGetAllProducts } from "@/lib/tanstack/queries";
import { useState } from "react";


export default function Home() {
    const [value, setValue] = useState('');
    const {data, isPending, isError, refetch} = useGetAllProducts();
    const onClear = () => setValue('');
    const onChange = (value:string) => setValue(value);
    if(isError){
        return<Errorcomponents onRefetch={refetch}/>
    }
    if(isPending) return <Loading/>
    
return(
     <Wrapper>
<Searchinput onChange={onChange} value={value} onClear={onClear}/>
<Product data={data.products}/>
</Wrapper>
)
}