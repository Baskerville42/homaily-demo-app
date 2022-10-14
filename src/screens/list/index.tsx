import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import ListData from '../../utils/fake-data';
import {RootStackParamList} from '../../stack';
import ListItem from './components/item';

//
//

export interface IListItem {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: any;
  brand: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'ListScreen'>;

const ListScreen: React.FC<Props> = () => {
  const renderItem: ListRenderItem<IListItem> = ({item}) => (
    <ListItem item={item} />
  );

  return (
    <SafeAreaView edges={['bottom']}>
      <FlatList
        contentContainerStyle={styles.container}
        data={ListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default ListScreen;
