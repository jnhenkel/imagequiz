let backendAddress = "https://jnhenkel-imagequiz-api.herokuapp.com";

let apiAccess = {
    addUser: (name, email, password) => {
        return fetch(`${backendAddress}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x;
            })
    },

    login: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ email, password })
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x;
            })
    },

    logout: () => {
        return fetch(`${backendAddress}/logout`, {
            method: 'POST',
            credentials: 'include',
            headers:  {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
        })
        .then(x => x.json())
        .then(x => {
            return x;
        })
    },

    getQuiz: (name) => {
        return fetch(`${backendAddress}/quiz/${name}`, {
            method: 'GET',
            credentials: 'include',
            
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x.result;
            });
    },

    getFlowers: () => {
        return fetch(`${backendAddress}/flowers`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x.result;
            })
    },

    postScore: (quizTaker, quizName, score) => {
        return fetch(`${backendAddress}/score`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quizTaker, quizName, score })
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x;
            })
    }
}

export default apiAccess;