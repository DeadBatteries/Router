import { sendJson } from "../http/response.js";

export function home(req, res){

    return sendJson(res, 200, {message: "home"});


};  