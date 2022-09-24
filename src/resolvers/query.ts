import { IResolvers } from "@graphql-tools/utils";
import data from "../data";
import { IBook } from "../Interfaces/book-interface";
import { IPeople } from "../Interfaces/people-interface";

const queryResolvers: IResolvers = {
  Query: {
    hello: (): String => "Hola a la api de GraphQL",
    helloWithName: (
      _: void,
      args: { name: string },
      context: any,
      info: object
    ) => {
      console.log(info);
      return `Hola ${args.name}`;
    },
    peopleNumber: () => 12345,

    booksList: (): {
      status: boolean;
      message: string;
      list: Array<IBook>;
    } => {
      return {
        status: true,
        message: "Lista de libros correctamente cargada",
        list: data.books
      };
    },
    peopleList: (): {
      status: boolean;
      message: string;
      list: Array<IPeople>;
    } => {
      return {
        status: true,
        message: "Lista de Personas correctamente cargada",
        list: data.people
      };
    },
    book: (_: void, args: { id: string }): {
        status:boolean,
        message:string,
        item:IBook
    } => {
        const bookFind = data.books.filter((value) => value.id === args.id)[0];
      return {
        
        status: bookFind === undefined ? false : true,
        message:bookFind === undefined ? `Libro con el ID : ${args.id} no ha sido encontrado` :`Libro con el ID : ${args.id} ha sido encontrado`,
        item:bookFind
      };
    },
    people: (_: void, args: { id: string }): {
      status:boolean,
      message:string,
      item:IPeople
  } => {
      const peopleFind = data.people.filter((value) => value.id === args.id)[0];
    return {
      
      status: peopleFind === undefined ? false : true,
      message:peopleFind === undefined ? `Persona con el ID : ${args.id} no ha sido encontrado` :`Persona con el ID : ${args.id} ha sido encontrado`,
      item:peopleFind
    };
  },
  },
};

export default queryResolvers;
