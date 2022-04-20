let backendAddress = "https://jnhenkel-imagequiz-api.herokuapp.com";

let apiAccess = {
    addUser: (name, email, password) => {
        return fetch(`${backendAddress}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then(x => x.json())
        .then( x => {
            console.log(x);
            return x;
        })
    }
}

export default apiAccess;