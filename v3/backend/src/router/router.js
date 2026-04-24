import { home } from "../controllers/homeController.js";
import { health } from "../controllers/healthController.js";
import { routes } from "./routes.js";
import { sendJson } from "../http/response.js";
import { parseBody } from "../http/parseBody.js";
import { matchRoutes } from "../utils/matchRoutes.js";
import { runStack } from "../utils/runStack.js";

const globalMiddlewares = [];

export async function router(req, res) {

    const { method, url } = req;

    const [path, queryString] = req.url.split("?");

    const query = {};

    if (queryString) {

        const pairs = queryString.split("&");

        for (const pair of pairs) {

            const [key, value] = pair.split("=");

            query[key] = value;

        };

    };

    req.query = query;

    req.params = {};


    try {
        if (["POST", "PUT", "PATCH"].includes(method)) {

            req.body = await parseBody(req);

        }else{

            req.body = {};

        };

    } catch (err) {

        return sendJson(res, 400, { message: "Invalid JSON" });

    }


    for (const r of routes) {

        if (r.method !== method) continue;

        const result = matchRoutes(r, path);

        if (!result.matched) continue;

        req.params = result.params;

        const stack = [...globalMiddlewares,
        ...r.middlewares, r.handler];

        return runStack(stack, req, res);

    }

    return sendJson(res, 404, { message: "Not Found" });

};