import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flowers from './components/Flowers';
import Login from './components/login';
import NavigationBar from './components/navbar';
import Registration from './components/register';
import Quiz from './components/quiz';

/*
* A note about Route paths below:
*   '/imagequiz' is the default path that occurs on load. 
*   '/imagequiz' must match the behavior of '/index'. 
*   For instance, if selectedFlower={handleFlowerQuiz} 
*       is missing from Route path='/imagequiz',
*       the first load of the page will not have the
*       onClick functionality because selectedFlower 
*       props were not passed, but pressing home and 
*       going to /index will work.
*/

function App() {
    const [user, setUser] = useState('');
    const [flowerName, setFlowerName] = useState(undefined);

    let handleLoggedIn = (email) => {
        setUser(email);
    }
    let handleFlowerQuiz = (name) => {
        setFlowerName(name);
    }
    return (
        <Router>
            <NavigationBar user={user} />
            <Routes>
                <Route path='/imagequiz' element={<Flowers selectedFlower={handleFlowerQuiz} />} />
                <Route path='/index' element={<Flowers selectedFlower={handleFlowerQuiz} />} />
                <Route path='/login' element={<Login userLoggedIn={handleLoggedIn} />}  />
                <Route path='/register' element={<Registration />} />
                <Route path='/quiz' element={<Quiz flowerName={flowerName} />} />
            </Routes>
        </Router>
    );
}

export default App;


