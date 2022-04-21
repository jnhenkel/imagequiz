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
            //console.log(x);
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
            //console.log(x);
            return x;
        })
    },

    getQuiz: (name) => {//get requests do not need headers, method, body
        return fetch(`${backendAddress}/quiz/${name}`) 
        .then(x => x.json())
        .then(x => {
            //console.log(x);
            return x.result;
        });
    },

    getFlowers: () => {
        return fetch(`${backendAddress}/flowers`)
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
            body: JSON.stringify({quizTaker, quizName, score})
        })
        .then(x => x.json())
        .then(x => {
            //console.log(x);
            return x;
        })
    }
}

export default apiAccess;