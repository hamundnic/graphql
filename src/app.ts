import GrapgQLServer from './server';
import schema from './schema';
const graphQLServer= new GrapgQLServer(schema);

graphQLServer.listen((port:number)=>(`http://localhost:${port}/graphql`));