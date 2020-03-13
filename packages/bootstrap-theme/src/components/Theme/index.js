import React from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";

import {Header, List, Post, Loading, Title, PageError} from '../'

import {globalStyles, HeadContainer, Main} from './styles'

// import bootstrapUIStyles from 'bootstrap/dist/css/bootstrap.min.css';
// const SemanticUIStyles = () => (
//   <Global styles={css(bootstrapUIStyles)} />
// );

const Theme = ({ state }) => {

  const data = state.source.get(state.router.link);
  const title = state.frontity.title;

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />
      {
        /*
        <SemanticUIStyles />
        
        */
      }

      <HeadContainer>
        <Header />
      </HeadContainer>

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);