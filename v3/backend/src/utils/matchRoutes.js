export function matchRoutes(r, path) {

    if(r.method !== method)continue;

            if(r.path instanceof RegExp){

                const match = path.match(r.path);

                if(!match) return {matched:false};

                return{
                
            matched:true,
            params:match.groups || {}

                }

            };

            

            if(typeof r.path === "string"){
                if(r.path !== path)return{matched: false};

                return {

                    matched:true,
                    params:match.groups || {}

                };

            };

            return {matched: false};



}