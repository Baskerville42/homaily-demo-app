import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

type Props = {
  quantity: number;
  update: Dispatch<SetStateAction<number>>;
};

export const CartQuantity: React.FC<Props> = ({quantity, update}) => {
  const handleAddQuantity = () => update(quantity + 1);
  const handleReduceQuantity = () => update(quantity - 1);

  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton onPress={handleAddQuantity} underlayColor="#EDEBF2">
          <Typography color="#522973">+</Typography>
        </QuantityButton>

        <Typography style={styles.quantity}>{quantity}</Typography>

        <QuantityButton onPress={handleReduceQuantity} underlayColor="#EDEBF2">
          <Typography color="#522973">-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};

//
//

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});

const styles = StyleSheet.create({
  quantity: {
    textAlign: 'center',
    flex: 1,
  },
});
