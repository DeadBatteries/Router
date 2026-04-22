import { sendJson } from "../http/response";

export function runStack(stack, req, res){

    let index = 0;

    function next(err) {


        const fn=stack[index++];

        if(!fn){

         if(err){

            return sendJson(res, 500, {error: "Internal Server Error"});

             }

            return;
        }

        if(err){

            if(fn.length === 4){

             fn(err,req,res,next);
            
            }else{

                return next(err);

            };
            
            

        }else{

            if(fn.length < 4){

                fn(req, res, next);

            }

            return next();
            
        };

        
    

    }

    next();


};