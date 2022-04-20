import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Button from 'react-bootstrap/Button';
import usersData from '../users';
import apiAccess from '../communication/APIAccess';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleSubmit = (event) => {
        //usersData.users.push({ 'name': name, 'email': email, 'password': password });
        if (validateInputs(email, 'email') && validateInputs(name, 'name') && validateInputs(password, 'password')) {
            apiAccess.addUser(name, email, password)
            .then(x => {
                alert(`Thank you for signing up! \nYou will now be redirected to the login page. `);
                navigate('/login');
            })
            .catch(e => {
                console.log(e);
                alert('Registration failed.');
            });
        }
        /*event.preventDefault(); */
    }

    let handleEmail = (event) => {
        let val = event.target.value;
        setEmail(val);
    }
    let handleName = (event) => {
        let val = event.target.value;
        setName(val);
    }
    let handlePassword = (event) => {
        let val = event.target.value;
        setPassword(val);
    }
    let validateInputs = (value, type) => {
        if (type == 'email') {
            /* empty value check */
            if (!value) {
                alert('Please enter an email');
                const nameDiv = document.getElementById('emailDiv');
                nameDiv.setAttribute('style', 'border: 3px solid red');
                return false;
            }
            /* this regex also prevents multiple @ symbols being used in addition to email validation. This regex will return an object if value is true email format. */
            if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                alert('Invalid email');
                return false;
            }
        } else if (type == 'name') {
            /* empty value check */
            if (!value) {
                alert('Please enter a name');
                const nameDiv = document.getElementById('nameDiv');
                nameDiv.setAttribute('style', 'border: 3px solid red');
                return false;
            }
            if (value.match(/[0-9]/)) {
                alert('Invalid name');
                return false;
            }
        } else if (type == 'password') {
            /* empty value check */
            if (!value) {
                alert('Please enter a password');
                const nameDiv = document.getElementById('passwordDiv');
                nameDiv.setAttribute('style', 'border: 3px solid red');
                return false;
            }
            if (value.length < 5) {
                alert('Password length is too short');
                return false;
            }
        }
        return true;
    }
    return (
        <div className='container' id='register'>
            <h1 className='container'>Sign Up</h1>
            <form id='registerForm' >
                <div className='row'>
                    <div className='row'>
                        <label htmlFor='email' id='emailLabel'>Email: </label>
                        <input type='text' name='email' id='email' autoComplete='email' value={email} onChange={handleEmail} />
                    </div>
                    <div className='row'>
                        <label htmlFor='name' id='nameLabel'>Name: </label>
                        <input type='text' name='name' id='name' value={name} onChange={handleName} />
                    </div>
                    <div className='row'>
                        <label htmlFor='password' id='passwordLabel'>Password: </label>
                        <input type='password' name='password' id='password' autoComplete='current-password' value={password} onChange={handlePassword} />
                    </div>
                    <div className='row'>
                        <Button id='submitRegister' size='lg' variant='primary' onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
const data = { 'users': [] };
export default Registration;
