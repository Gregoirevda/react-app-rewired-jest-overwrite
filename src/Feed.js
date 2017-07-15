import React from 'react';
import {graphql} from 'react-apollo';
import FEED_QUERY from './feed.graphql';

const Feed = ({feedQuery}) => {
  if(feedQuery.error)
    return <div>error</div>

  const feedData = feedQuery.feed && feedQuery.feed.map(feed =>
    <div key={Math.random()}>
      <span>Login : {feed.postedBy.login}</span> <br/>
    </div>);

  return (
    <div>
      <h4>GraphQL data :</h4>
      {feedData}
    </div>
  )
};

const DataFeed = graphql(FEED_QUERY, {name: 'feedQuery'})(Feed);

export default DataFeed;