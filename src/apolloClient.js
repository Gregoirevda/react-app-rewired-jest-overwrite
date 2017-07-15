import {ApolloClient, createNetworkInterface} from 'react-apollo';

export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://api.githunt.com/graphql',
  }),
});