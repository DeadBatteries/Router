import { sendJson } from "../http/response.js";

export function health(req, res) {

    return sendJson(res, 200, {status:"ok"});


};