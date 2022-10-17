import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from '@emotion/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getImage} from '../../../utils/image';
import {Typography} from '../../../components/typography';
import {RootStackParamList} from '../../../stack';
import {IListItem} from '../index';
import {Avatar} from '../../../components/avatar';

//
//

type Props = {
  item: IListItem;
};

const thumbnailSize = 600;

const ListItem: React.FC<Props> = ({item}) => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();

  const handleNavigation = () => nav.navigate('ItemScreen', item);

  return (
    <ListItemContainer onPress={handleNavigation}>
      <Avatar
        style={styles.image}
        source={{uri: getImage(thumbnailSize, item.id)}}
      />

      <View style={styles.flex}>
        <Typography weight="medium">{item.name}</Typography>


          <Typography color="#DA2121">
            {item.salePrice && (
              <Typography style={item.salePrice && styles.discounted}>
                SAR {item.price}
              </Typography>
            )}
            {'  '}SAR {item.salePrice}
          </Typography>

        <Typography fontSize={14} color="#545454">
          Brand: {item.name}
        </Typography>
      </View>
    </ListItemContainer>
  );
};

//
//

const ListItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: 'rgba(0,0, 0, 0.05)',
  borderBottomWidth: 1,
  flexDirection: 'row',
});

//
//

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  discounted: {
    textDecorationLine: 'line-through',
  },
  sale: {
    color: '#DA2121',
  },
});

export default memo(ListItem);
