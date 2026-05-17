
import { sendJson } from "./sendJson.js";

export function getSessionId(req, res){

    const cookie = req.headers.cookie;

    if(!cookie)return null;

    const cookies = cookie.split(";");

    const mappedCookies = cookies.map(c=>c.trim());

    const s = mappedCookies.filter(c=>c.startsWith("sessionId" + "="));
    
    if(s.length > 1 || s.length === 0)return null;

    const match = s[0];

    const [key, value] = match.split("=");

    if(key !== "sessionId" || !value)return null;

    return value;

};