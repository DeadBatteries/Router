    
import http from "http";
    

const server = http.createServer(handleRequest);


server.listen(3000, () => {

    console.log("Servidor Rodando na porta 3000");

});



function handleRequest(req, res){
    
    router(req, res);

};

function router(req, res){

   const method = req.method;
   const path = req.url.replace(/\?.*$/,"");

    console.log(method, path);

    //Rota Home

    if(path === "/"){

       return sendJson(res, 200, {message: "home"});

    }
    
    if(path === "/health"){

       return sendJson(res, 200, {status: "ok"});

    };

    const userMatch = path.match(/^\/api\/v1\/users\/(\d+)$/);

    if(userMatch){

        const userID = userMatch[1];

        return sendJson(res, 200, {userID});

    }

    const productMatch = path.match(/^\/product\/([a-z]+(?:-[a-z]+)*)-(\d+)$/)

    if(productMatch){

        const slug = productMatch[1];
        const id = productMatch[2];

        return sendJson(res, 200, {slug, id});

    };


   return sendJson(res, 404, {message: "Not Found"});


};

function sendJson(res, statuscode, data){

    res.writeHead(statuscode, {

        "Content-Type":"application/json"
        
    })

    res.end(JSON.stringify(data));

};