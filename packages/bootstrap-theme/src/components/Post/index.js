import React, { useEffect } from "react";
import { connect } from "frontity";

import List from '../List/'
import FeaturedMedia from '../FeaturedMedia/'

import {Container, Title, StyledLink, Author, Fecha, Content } from './styles'

import {getAuthor, getPost} from '../../helpers/'


const Post = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link);
  const {type, id} = data
  const post = getPost(state)(type)(id)
  const author = getAuthor(state)(post.author)
  const date = new Date(post.date);
  
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Only display author and date on posts */}
        {data.isPost && (
          <div>
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            <Fecha>
              {" "}
              on <b>{date.toDateString()}</b>
            </Fecha>
          </div>
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </Container>
  ) : null;
};

export default connect(Post);
