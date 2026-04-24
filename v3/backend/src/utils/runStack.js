import { sendJson } from "../http/response.js";

export function runStack(stack, req, res) {

    let index = 0;

    function next(err) {


        const fn = stack[index++];

        if (!fn) {

            if (err) {

                return sendJson(res, 500, { error: "Internal Server Error" });

            }

            return;
        }

        try {

            if (err) {

                if (fn.length === 4) {

                    const result = fn(err, req, res, next);

                    if (result instanceof Promise) {

                        result.catch(next);

                    }

                } else {

                    return next(err);

                };

                return;

            };

            if (fn.length < 4) {

                const result = fn(req, res, next);

                if (result instanceof Promise) {

                    result.catch(next);

                }

            } else {

                return next();

            };

            return;


        } catch (err) {

            return next(err)

        }

    };

    next();

};