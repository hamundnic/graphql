import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import express, { Application } from "express";
import { GraphQLSchema } from "graphql";

import { Server, createServer } from 'http';
import dephLimit from 'graphql-depth-limit';
class GrapgQLServer{
// propiedades
private app!:Application;
private httpServer!:Server;
private readonly DEFAULT_PORT=3025;
private schema!:GraphQLSchema;
constructor(schema: GraphQLSchema){
    if(schema ===undefined){
        throw new Error("Necesitamos un schema de GraphQL para trabajr con APIS GraphQL");
        
    }
    this.schema= schema;
    this.init();
}
private init(){
    this.configExpress();
    this.configApolloServerExpress();
    this.configRoutes();
}
private configExpress(){

    this.app= express();
this.app.use(compression());
this.httpServer= createServer(this.app);
}
private async configApolloServerExpress(){

  const apolloServer = new ApolloServer({
    schema:this.schema,
    introspection:true,
    validationRules: [dephLimit(3)]
  });
  await apolloServer.start();
apolloServer.applyMiddleware({app:this.app,cors:true})
}

private configRoutes(){
    
this.app.get("/hello",(_,res)=>{
    res.send("Bienbenid@s al primer proyecto");
});

this.app.get("/",(_,res)=>{
    res.redirect("/graphql");
})
}
listen(callback:(port:number)=>void): void{
    this.httpServer.listen(+this.DEFAULT_PORT, ()=>{
        callback(+this.DEFAULT_PORT)
    })
}
}


export default GrapgQLServer;