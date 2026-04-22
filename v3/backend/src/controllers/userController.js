import { sendJson } from "../http/response.js"

export function getUser(req, res) {

    const userId = req.params;

    return sendJson(res, 200, {id: userId});
};