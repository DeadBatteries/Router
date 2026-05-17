
export async function login(u, p) {
    
    await fetch("http:/localhost:3000/login", {

        method:"POST",
        headers: {"Content-type":"application/json"},
        user:JSON.stringify(u),
        password:JSON.stringify(p)

    });

        
};