import DWDAV from "dwdav";

const dwdav = new DWDAV({
    hostname: "dev01.xyz.demandware.net",
    username: "demo",
    password: "demopass",
    version: "1.0.0",
});

dwdav.propfind("/"); // $ExpectType Promise<any>
dwdav.get("/"); // $ExpectType Promise<any>
dwdav.post("/"); // $ExpectType Promise<any>
dwdav.unzip("/"); // $ExpectType Promise<any>
dwdav.postAndUnzip("/"); // $ExpectType Promise<any>
dwdav.delete("/"); // $ExpectType Promise<any>
dwdav.mkcol("/"); // $ExpectType Promise<any>
