/**
 * Created by imkarma on 1/2/17.
 */
import { Builder } from './builder'
export interface ICallback{
    (err: any, result: any): void
}

export class Server {
    config: any;
    server: any;
    constructor(server){
         this.server = server;
    }
    init(config){
        this.config = config;
    }

    start(){

    }
}
