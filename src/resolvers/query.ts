import { IResolvers } from "@graphql-tools/utils";

const queryResolvers: IResolvers={
    Query:{
    
        hello: (): String =>"Hola a la api de GraphQL",
        helloWithName:(_:void,args:{name:string},context:any,info:object)=>{
            console.log(info);
            return `Hola ${args.name}`
        },
        peopleNumber: ()=> 12345
    
    }
      };

      export default queryResolvers;