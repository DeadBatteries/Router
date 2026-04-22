export function auth(req, res, next){

    if(!req.user) {

        res.end("Unauthorized");
        return;

    }

    next();
    
};