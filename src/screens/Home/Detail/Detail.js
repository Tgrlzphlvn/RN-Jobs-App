import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';
import {detailStyles} from './DetailStyles';
import FavButton from '../../../components/FavButton/FavButton';
import {addFavorite} from '../../../context/FavoriteSlice';
import {useDispatch} from 'react-redux';

const Detail = ({route}) => {
  const dispatch = useDispatch();

  const item = route.params.item;

  const width = Dimensions.get('window').width;

  const addToFavorites = async () => {
    dispatch(addFavorite(item));
  };

  return (
    <SafeAreaView style={detailStyles.container}>
      <ScrollView>
        <Text style={detailStyles.name}>{item.name}</Text>
        <Text style={detailStyles.company}>{item.company.name}</Text>
        <Text style={detailStyles.location}>
          {item.locations[0].name ?? ''}
        </Text>
        <View></View>
        <RenderHTML source={{html: item.contents}} contentWidth={width} />
      </ScrollView>
      <FavButton onPress={addToFavorites} />
    </SafeAreaView>
  );
};

export default Detail;
