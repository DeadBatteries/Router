import { health } from "../controllers/healthController.js";
import { home } from "../controllers/homeController.js";
import { getUser } from "../controllers/userController.js";
import { auth, logger } from "../middlewares/auth.js";
import { fakeAuth } from "../middlewares/fakeAuth.js";

export const routes = [
    
{

method:"GET",
path: "/",
handler: home,
middlewares: []

},

{

method:"GET",
path:"/health",
handler: health,
middlewares: []

},

{

method:"GET",
path:/^\/api\/v1\/users\/(?<userId>\d+)$/,
handler: getUser,
middlewares: [logger, fakeAuth]

}

];