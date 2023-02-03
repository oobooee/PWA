import { Image } from './Image';

export interface Movie {
    id?: number;
    name?: string;
    summary?: string;
    genres: Array<string>;
    image?: Image;
}
