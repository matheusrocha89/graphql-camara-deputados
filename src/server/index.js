import { GraphQLServer } from 'graphql-yoga';

import getTypeDefs from './types';
import Query from './resolvers/Query';
import { removeEmptyProperties } from './utils/object';

const startServer = () => {
  try {
    const resolvers = {
      Query,
    };
    const typeDefs = getTypeDefs();

    const server = new GraphQLServer({
      typeDefs,
      resolvers,
    });

    const options = {
      formatParams: args => removeEmptyProperties(args),
    };

    server.start(options, ({ port }) => console.log(`Server is running on: http://localhost:${port}`));
  } catch (e) {
    throw new Error(e.message);
  }
};

if (process.env.NODE_ENV === 'production') {
  startServer();
}

export default startServer;
