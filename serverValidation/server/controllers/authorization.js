import { users } from "../storage/users.js";
import { sendJson } from "../utils/sendJson.js";
import { createSession } from "../storage/sessions.js";


export function login(req, res){

    console.log("Enter login");
    
    const {user, password} = req.body;
    
    const length = 12;
    
    if(!user || !password)return sendJson(res, 400, {message: "Bad Request"});
    
    if(user.length > length)return sendJson(res, 400, {message:"Bad Request"});

    const findUser = users.find(u => user === u.name);

    if(!findUser || password !== findUser.password)return sendJson(res, 401, {message:"Unauthorized"});
  

    sendJson(res,200, {message:"Authorized"});

    createSession(res, findUser);


};