import { FormattedJson } from '../../core/components';
import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelection } from '../../core/context';

export const Properties = () => {
  const [selection] = useSelection();
  const printedObject = {
    ...selection,
    parent: undefined,
    children: undefined,
  };
  return (
    <>
      <Typography variant='h6' color='inherit' noWrap>
        Properties
      </Typography>
      <FormattedJson object={printedObject} />
    </>
  );
};
