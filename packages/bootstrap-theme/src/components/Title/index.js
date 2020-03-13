import React from "react";
import { Head, connect, decode } from "frontity";

import {getTaxonomy, getTaxonomyCapitalized, getAuthor, getPost} from '../../helpers/'

const Title = ({ state }) => {

  const data = state.source.get(state.router.link);
  let title = state.frontity.title;
  
  if (data.isTaxonomy) {
    const {taxonomy, id} = data
    const {name} = getTaxonomy(state)(taxonomy)(id)
    title = `${getTaxonomyCapitalized(name)}: ${decode(name)} - ${title}`;
  } 

  else if (data.isAuthor) {
    const {id} = data
    const {name} = getAuthor(state)(id)
    title = `Author: ${decode(name)} - ${title}`;
  } 

  else if (data.isPostType) {
    const {type, id} = data
    const {postTitle} = getPost(state)(type)(id)
    title = `${decode(postTitle)} - ${title}`;
  } 
  
  else if (data.is404) {
    title = `404 Not Found - ${title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
