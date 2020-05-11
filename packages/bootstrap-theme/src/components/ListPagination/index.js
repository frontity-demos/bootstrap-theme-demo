import React, { useEffect } from "react";
import { connect } from "frontity";

import Link from '../Link/'

import {Text} from './styles'

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <div>
      {/* If there's a next page, render this link */}
      {next && (
        <Link link={next}>
          <Text>← Older posts</Text>
        </Link>
      )}

      {previous && next && " - "}

      {/* If there's a previous page, render this link */}
      {previous && (
        <Link link={previous}>
          <Text>Newer posts →</Text>
        </Link>
      )}
    </div>
  );
};

export default connect(Pagination);

