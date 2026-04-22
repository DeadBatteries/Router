import { sendJson } from "../http/response.js";

export function fakeAuth(req, res, next){

    const { user } = req.query;

    if(user){

        req.user = {name: user};
        next();

    }else{

        return sendJson(res, 401, {message:"Unauthorized"});

    };



};