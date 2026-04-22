import { home } from "../controllers/homeController.js";
import { health } from "../controllers/healthController.js";
import { routes } from "./routes.js";
import { sendJson } from "../http/response.js";
import { parseBody } from "../http/parseBody.js";


export async    function router(req, res){

    const {method, url} = req;
    const [path, queryString] = req.url.split("?")[1];

    const query = {};

    if(queryString){

        const pairs = queryString.split("&");

        for(const pair of pairs){

            const [key, value] = pair.split("=");

            query[key] = value;

        };

    };

    req.query = query;

    req.params = {};
    try{
        if (["POST", "PUT", "PATCH"].includes(method)){

            req.body = await parseBody(req);

        }else{

            req.body = {};

        };
    }catch(err){

        sendJson(res, 400, {message: "Invalid JSON" });

    };


    for(const r of routes){

        if(r.method !== method)continue;

        if(r.path instanceof RegExp){

            const match = path.match(r.path);
            
            if(match){

            req.params = match.groups || {};

            return r.handler(req, res);
            
            };

        };

        if(typeof r.path === "string" && r.path === path){

            return r.handler(req, res);

        };


    };

    return sendJson(res, 404, {message: "Not Found" });
    
};