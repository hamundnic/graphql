import mutationResolvers from './mutation';
import queryResolvers from './query';
import typesResolvers from './types';
export const resolvers={
    ...queryResolvers,
    ...typesResolvers,
    ...mutationResolvers
}
export default resolvers;