import { Image } from 'expo-image';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import { Divider } from './Divider';
import { ProductInfo } from './ProductDescription';
import { ProductReviews } from './ProductReviews';

import { ProductResponse } from '@/type';
import { SimilarProducts } from './SimilarProducts';
import { Slider } from './Slider';

type Props = {
  product: ProductResponse;
  similar: ProductResponse[];
};

const { height } = Dimensions.get('window');
export const ProductDetail = ({ product, similar }: Props): JSX.Element => {
  return (
    <FlatList 
showsVerticalScrollIndicator={false}
contentContainerStyle={{ paddingBottom: 100 }}
ListHeaderComponent={()=>(
  <View style={{ flex: 1 }}>
    <Slider images={product.images} />
      <Divider />
      {/* product into */}
      <ProductInfo
        brand={product.brand}
        category={product.category}
        description={product.description}
        discountPercentage={product.discountPercentage}
        price={product.price}
        rating={product.rating}
        stock={product.stock}
        title={product.title}
        numberOfReviews={product.reviews.length}
      />
      <Divider />
      <ProductReviews reviews={product.reviews} rating={product.rating} />
    </View>
    )}
    data={[]}
    renderItem={() => null}
    ListFooterComponent={()=> <SimilarProducts product={similar} />}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

