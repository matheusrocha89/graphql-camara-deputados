import { GraphQLServer } from 'graphql-yoga';

import typeDefs from './types';
import Query from './resolvers/Query';
import { removeEmptyProperties } from './utils/object';

export default async () => {
  try {
    const resolvers = {
      Query,
    };

    const server = new GraphQLServer({
      typeDefs,
      resolvers,
    });

    const options = {
      formatParams: args => removeEmptyProperties(args),
    };

    server.start(options, ({ port }) => console.log(`Server is running on port: ${port}`));
  } catch (e) {
    throw new Error(e.message);
  }
};
