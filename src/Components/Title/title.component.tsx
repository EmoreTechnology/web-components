import React from "react";

import TitleProps from "./title.model";

import { TitleStyles } from "./title.styles";

export const Title = ({ appeareance, content }: TitleProps) => {

  return <TitleStyles appeareance={appeareance}>{content}</TitleStyles>;
}

