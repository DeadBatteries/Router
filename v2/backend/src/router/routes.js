import { health } from "../controllers/healthController.js";
import { home } from "../controllers/homeController.js";
import { getUser } from "../controllers/userController.js";

export const routes = [
    
{

method:"GET",
path: "/",
handler: home


},

{

method:"GET",
path:"/health",
handler: health

},

{

method:"GET",
path:/^\/api\/v1\/users\/(?<userId>\d+)$/,
handler: getUser

}

];