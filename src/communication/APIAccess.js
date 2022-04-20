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
        .then(x => {
            console.log(x);
            return x;
        })
    },

    login: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x;
        })
    },

    getQuiz: (name) => {
        return fetch(`${backendAddress}/quiz/${name}`) //get requests do not need headers, method, body
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x.result;
        });
    }    
}

export default apiAccess;