import {database} from './../data/data.store';
import {IResolvers} from 'graphql-tools';

const queries: IResolvers = {
    Query: {
        authors(): any {
            return database.authors;
        },
        papers(): any {
            return database.papers;
        },
        references(): any {
            return database.authors;
        }
    }
}

export default queries;