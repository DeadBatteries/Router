    
import http from "http";
import { router } from "./router/router.js";


const server = http.createServer(handleRequest);


server.listen(3000, () => {

    console.log("Servidor Rodando na porta 3000");

});

function handleRequest(req,res) {

    router(req,res);

};

