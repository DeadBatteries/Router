const globalMiddlewares = [];

export function use(middleware){

    globalMiddlewares.push(middleware);

};