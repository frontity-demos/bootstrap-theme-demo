import React from "react";
import { connect } from "frontity";

import {Container, StyledImage} from './styles'

import {getMedia} from '../../helpers/'

const FeaturedMedia = ({ state, id }) => {

  const {media, srcset} = getMedia(state)(id);
  if (!media) return null;

  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);