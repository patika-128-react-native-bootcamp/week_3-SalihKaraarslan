import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';

export default function Products() {
  const navigation = useNavigation();

  function navigate(selectedProduct) {
    navigation.navigate('PrdctDtlPage', {product: selectedProduct});
  }

  const renderProduct = ({item}) => (
    <ProductCard item={item} onSelect={() => navigate(item)} />
  )

  return (
    <SafeAreaView>
      <Text>Producttt</Text>
      <FlatList
        data={mockData.products}
        renderItem={renderProduct}
        keyExtractor={item => item.p_id}
      />
    </SafeAreaView>
  );
}
