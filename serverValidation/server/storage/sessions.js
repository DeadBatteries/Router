import crypto from "crypto";
import { sendJson } from "../utils/sendJson.js";
import { users } from "./users.js";

export const sessions = [];

export function createSession(res, u){


    const sessionId = crypto.randomBytes(16).toString("hex");

    const newUser = {

            user:u,
            session:sessionId

    }

   if(newUser)sessions.push(newUser);

    return sendJson(res, 200, {
        "Content-Type":"application/json",
        "Set-Cookie": `sessionId=${sessionId}; SameSite=Strict; HttpOnly; Path=/; Max-Age=3600`
    });

   
};