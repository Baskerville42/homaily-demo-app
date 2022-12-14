import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import styled from '@emotion/native';
import {faker} from '@faker-js/faker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from './stack';
import {Typography} from './components/typography';
import {Container} from './components/container';
import {getImage} from './utils/image';
import {DetailsTitle} from './components/details-title';
import {DetailsLine} from './components/details-line';
import {Cart} from './components/cart';

//
//

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});

type Props = NativeStackScreenProps<RootStackParamList, 'ItemScreen'>;

const Item: React.FC<Props> = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [quantity, setQuantity] = useState<number>(5);

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }

  return (
    <React.Fragment>
      <ScrollView>
        <Container key={'ImageContainer'}>
          <ItemImage
            source={{uri: getImage(900, params.id)}}
            size={Dimensions.get('screen').width * 0.9}
          />
        </Container>

        <Container key={'NameContainer'}>
          <Typography fontSize={18} weight="semiBold">
            {params.name}
          </Typography>

          {params.salePrice ? (
            <Typography fontSize={18} color="red">
              <ItemDiscountedPrice>SAR {params.price}</ItemDiscountedPrice>
              {'  '}
              SAR {params.price}
            </Typography>
          ) : (
            <Typography fontSize={18}>SAR {params.price}</Typography>
          )}
        </Container>

        <Container key={'DescriptionContainer'}>
          <Typography>{params.description}</Typography>
        </Container>

        <Container key={'DetailsContainer'}>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{params.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">{SPEC_2}</DetailsLine>

          <Typography weight="medium" />
          <Typography weight="medium">Specifications</Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{`${SPEC_4} kg`}</DetailsLine>
        </Container>
      </ScrollView>

      <Cart quantity={quantity} update={setQuantity} />
    </React.Fragment>
  );
};

//
//

const ItemImage = styled.Image<{size: number}>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};

export default Item;
