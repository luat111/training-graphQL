import Fastify from 'fastify'
import fastifyExpress from 'fastify-express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import schema from './schemas';

const mount = async () => {

  // Set up app
  const app = Fastify();
  await app.register(fastifyExpress);


  // Middleware
  app.use(cors());


  // Default Route
  app.get('/', (_, response) => {
    response.send({ hello: 'world' })
  })


  // GraphQL
  app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

  return app;
}


// Mount app
mount()
  .then(fastify => {
    const port: string = process.env.PORT || '3000';
    console.log(`Server is running on port ${port}`);

    return fastify.listen(port);
  })
  .catch(err => console.log(err))

