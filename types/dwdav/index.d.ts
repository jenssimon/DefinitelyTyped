// Type definitions for dwdav 3.5
// Project: https://github.com/SalesforceCommerceCloud/dwdav
// Definitions by: Jens Simon <https://github.com/jenssimon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DWDAVConfig {
    hostname: string;
    username: string;
    password: string;
    folder: string;
    root: string;
    bearer?: string;
    p12?: string;
    version?: string;
    passphrase?: string;
    ['self-signed']?: boolean;
}

declare class DWDAV {
    config: DWDAVConfig;
    constructor(config: Partial<DWDAVConfig>);
    private getOpts;
    propfind(filePath: string, root?: string): Promise<any>;
    get(filePath: string, root?: string): Promise<any>;
    post(filePath: string, root?: string): Promise<any>;
    unzip(filePath: string, root?: string): Promise<any>;
    postAndUnzip(filePath: string, root?: string): Promise<any>;
    delete(filePath: string, root?: string): Promise<any>;
    mkcol(filePath: string, root?: string): Promise<any>;
}
export = DWDAV;
