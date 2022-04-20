import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import usersData from '../users';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleEmail = (event) => {
        setEmail(event.target.value);
    }
    let handlePassword = (event) => {
        setPassword(event.target.value);
    }

    let handleSubmit = (event) => {
        let search = usersData.users.find(db =>
            (username.toLowerCase() == db.username.toLowerCase() || username.toLowerCase() == db.email.toLowerCase()) && password == db.password
        );
        if (search) {
            alert('Login successful');
            props.userLoggedIn(username);
            navigate('/index');
        } else {
            alert('Invalid credentials. Please try again.');
        }
        event.preventDefault();
    }

    return (
        <form id='loginForm'>
            <div className='container' id='login'>
                <h1 className='container' >Login</h1>
                <div className='row'>
                    <label htmlFor='email' id='emailLabel'>Email: </label>
                </div>
                <div className='row'>
                    <input type='text' name='email' id='email' autoComplete='email' value={email} onChange={handleEmail}></input>
                </div>
                <div className='row'>
                    <label htmlFor='password' id='passwordLabel'>Password: </label>
                </div>
                <div className='row'>
                    <input type='password' name='password' id='password' autoComplete='current-password' value={password} onChange={handlePassword}></input>
                </div>
                <div className='row'>
                    <Button id='submitLogin' size='lg' variant='primary' onClick={handleSubmit}>&nbsp;Login&nbsp;</Button>
                </div>
            </div>
        </form>
    )
}

export default Login;