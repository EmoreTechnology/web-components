import React from 'react';

import TitleProps from './title.model';

import { TitleStyles } from './title.styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Title = ({ appeareance, content }: TitleProps) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <TitleStyles appeareance={appeareance}>{content}</TitleStyles>;
};
