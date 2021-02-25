import React from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";

import {fixCss} from '../../helpers/css'

import Header from '../Header/'
import List from '../List/'
import Post from '../Post/'
import Loading from '../Loading/'
import Title from '../Title/'
import PageError from '../PageError/'

import {globalStyles, HeadContainer, Main} from './styles'

import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

const fixedBootstrapCss = fixCss(bootstrapCss)
const BootstrapStyles = () => (
  <Global styles={css(fixedBootstrapCss)} />
);

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

      <BootstrapStyles />
      <Global styles={globalStyles} />
      
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