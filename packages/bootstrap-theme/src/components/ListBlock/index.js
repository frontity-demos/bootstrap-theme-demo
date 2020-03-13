import React from "react";
import { connect, decode } from "frontity";

import {ListItem, ListPagination} from "../";
import {Container, Header} from './styles'

import {getTaxonomy, getAuthor} from '../../helpers/'

const List = ({ state }) => {

  const data = state.source.get(state.router.link);
  
  let HeaderBlock

  if (data.isTaxonomy) {
    const {taxonomy, id} = data
    const {name} = getTaxonomy(state)(taxonomy)(id)
    HeaderBlock = (
      <Header>
        {taxonomy}:{" "}
        <b>{decode(name)}</b>
      </Header>
    )
  }

  if (data.isAuthor) {
    const {id} = data
    const {name} = getAuthor(state)(id)

    HeaderBlock = (
      <Header>
        Author: <b>{decode(name)}</b>
      </Header>
    )
  }

  return (
    <Container>
      {HeaderBlock && <HeaderBlock />}

      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <ListItem key={item.id} item={item} />;
      })}
      <ListPagination />
    </Container>
  );
};

export default connect(List);