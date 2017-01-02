export interface ICallback {
    (err: any, result: any): void;
}
export declare class Server {
    config: any;
    server: any;
    constructor(server: any);
    init(config: any): void;
    start(): void;
}
