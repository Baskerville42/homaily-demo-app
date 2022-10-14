import React from 'react';
import {StyleSheet} from 'react-native';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

type Props = {
  label: string;
  children: string;
};

export const DetailsLine: React.FC<Props> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography fontSize={14} style={styles.label} weight="medium">
        {label}
      </Typography>

      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};

const styles = StyleSheet.create({
  label: {
    marginRight: 16,
  },
});
