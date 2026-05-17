import { getSessionId } from "../utils/cookieParser.js";
import { sendJson } from "../utils/sendJson.js";
import { sessions } from "../storage/sessions.js";

export function sessionMiddleware(req, res, next){

    const sessionId = getSessionId(req, res);

    if(!sessionId)return sendJson(res, 401, {message:"Unauthorized"});

    const s = sessions.find(s=>s.session === sessionId);

    if(!s)return sendJson(res,401,{message:"Unauthorized"});

    req.user = s;
    
    next();

};