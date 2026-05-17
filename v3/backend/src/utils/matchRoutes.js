export function matchRoutes(r, path) {

        const match = path.match(r.path);

           if(r.path instanceof RegExp){

            
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



};