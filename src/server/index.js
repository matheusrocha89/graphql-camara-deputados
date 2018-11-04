import { GraphQLServer } from 'graphql-yoga';

// import Mutation from './resolvers/Mutation';
// import Query from './resolvers/Query';

export default async () => {
  try {
    // const resolvers = {
    //   Query,
    //   Mutation,
    //   Subscription,
    // };

    // const pubsub = new PubSub();
    // const server = new GraphQLServer({
    //   typeDefs: './src/server/schema.graphql',
    //   resolvers,
    //   context: req => ({
    //     ...req,
    //     pubsub,
    //   }),
    // });

    // server.start(() => console.log('server running on port 4000'));
  } catch (e) {
    throw new Error(e.message);
  }
};
