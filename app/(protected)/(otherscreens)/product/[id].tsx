import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';

import { BottomButtons } from '@/components/BottomButtons';
import { ProductDetail } from '@/components/ProductDetail';
import { SimilarProducts } from '@/components/SimilarProducts';
import { Errorcomponents } from '@/components/ui/Errorcomponents';
import { Loading } from '@/components/ui/Loading';
import  {Wrapper}  from '@/components/ui/Wrapper';
import { useGetSimilarProducts, useGetSingleProduct } from '@/lib/tanstack/queries';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);
  const [qty, setQty] = useState(0);
  const navigation = useNavigation();
  navigation.setOptions({title: "Details"})
  const {
    data: similar,
    isPending: isPendingSimilar,
    isError: isErrorSimilar,
    refetch: refetchSimilar,
  } = useGetSimilarProducts(data?.category!);

  const filterSimilarProduct = useMemo(() => {
    if (!data) return []

    return similar?.products.filter((product) => product.id !== data.id) || [];

  }, [data?.id, similar?.products]);

  const handleRefetch = () => {
    refetch();
    refetchSimilar();
  };
  if (isError || isErrorSimilar) return <Errorcomponents onRefetch={handleRefetch} />;

  if (isPending || isPendingSimilar) return <Loading />;

  return (
    <Wrapper>
    <ProductDetail product={data} similar={filterSimilarProduct}/>
      <BottomButtons id={data.id} stock={data.stock} qty={qty} />
    </Wrapper>
  );
};

export default ProductDetails;