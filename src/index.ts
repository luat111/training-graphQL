import Fastify from 'fastify'
import fastifyExpress from 'fastify-express';
import { graphqlHTTP } from 'express-graphql';
import { DB } from './database';
import cors from 'cors';
import 'dotenv/config';

import schema from './schemas';

const mount = async () => {

  // Set up app
  const app = Fastify();
  await app.register(fastifyExpress);


  // Middleware
  app.use(cors());

  // Connect MongoDb Atlas  
  const db = new DB(process.env.MONGO_URL || '');
  db.connectDb();


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

