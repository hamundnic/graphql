import { IResolvers } from '@graphql-tools/utils';
import data from '../data';
const typesResolvers:IResolvers={

    Data:{
        __resolveType(obj:{name:string, isbn:string}){

            if(obj.name){
                return "People";
            }

            if(obj.isbn){
                return "Book"; 
            }

            return null;
        }
    },
    People:{
        booksBuy:(root:{books:Array<string>})=>{
            
            return data.books.filter(
                (book)=>root.books.indexOf(book.id) > -1
            );

        },
        website: (root:{website:string})=>{
            
            return root.website === undefined ? "" :root.website

        },
        github:  (root:{github:string})=>{
            
    return root.github === undefined ? "" :`https://github.com/${root.github}`
    


    },
    twitter:(root:{twitter:string})=>{
            
        return root.twitter === undefined ? "" :`https://twitter.com/${root.twitter}`
    
    
        } 
    },
    Book:{
        byPeoplesBuy:(root:{id:string})=>{
            
            return data.people.filter(
                (people)=>people.books.indexOf(root.id) > -1
            );

        },
        publishedDate: (root:{publishedDate:string})=>{
            return root.publishedDate === undefined ? "?" :root.publishedDate
        },
        
        thumbnailUrl: (root:{thumbnailUrl:string})=>{
            return root.thumbnailUrl === undefined ? "_" : root.thumbnailUrl
        },
        shortDescription: (root:{shortDescription:string})=>{
            return root.shortDescription === undefined ? "_" : root.shortDescription
        },
        longDescription:(root:{longDescription:string})=>{
            return root.longDescription === undefined ? "_" : root.longDescription
        }
        
    }
}
export default typesResolvers;