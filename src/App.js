import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flowers from './components/Flowers';
import Login from './components/login';
import NavigationBar from './components/navbar';
import Registration from './components/register';
import Quiz from './components/quiz';
import { NULL } from 'mysql/lib/protocol/constants/types';

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
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [flowerName, setFlowerName] = useState(undefined);

    let handleLoggedIn = (email) => {
        localStorage.setItem('user', email);
        setUser(email);
    }
    let handleFlowerQuiz = (name) => {
        setFlowerName(name);
    }

    return (
        <Router>
            <NavigationBar user={user} userLoggedIn={handleLoggedIn}/>
            <Routes>
                <Route path='/imagequiz' element={<Flowers selectedFlower={handleFlowerQuiz} />} />
                <Route path='/index' element={<Flowers selectedFlower={handleFlowerQuiz} />} />
                <Route path='/login' element={<Login userLoggedIn={handleLoggedIn} />}  />
                <Route path='/logout' element={<Flowers userloggedIn={handleLoggedIn} />} />
                <Route path='/register' element={<Registration />} />
                <Route path='/quiz' element={
                    <ProtectedRoute user={user}>
                        <Quiz flowerName={flowerName} user={user} key="quiz_key"/>
                        </ProtectedRoute>
                    } />
            </Routes>
        </Router>
    );
}

const ProtectedRoute = ({ user, children }) => {  
    if (user && user != NULL) {
      return children;
    } else {
      return <Navigate to='/login' />;
    }
  }

export default App;


