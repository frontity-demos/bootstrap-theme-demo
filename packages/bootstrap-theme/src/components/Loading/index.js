import React from "react";
import Loader from "react-spinners/ScaleLoader";

import {Container} from './styles'

const Loading = () => (
  <Container>
    <Loader
      color="rgba(12, 17, 43, 0.3)"
      radius={0}
      margin="3px"
      width={4}
      height={24}
    />
  </Container>
);

export default Loading;