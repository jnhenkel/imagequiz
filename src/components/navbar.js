import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationBar = (props) => {

    return (
        <div className='navigation'>
            <nav className='navbar navbar-expand bg-dark'>
                <div className='container-fluid'>
                    <ul id='navBar' className='navbar-nav ml-auto' >
                        {
                            props.user && props.user != 'null' ?
                                <li className='nav-item mx-2'>
                                    <NavLink className='nav-link' to='/index'>
                                        Signed in as: {props.user}
                                    </NavLink>
                                </li>
                                :
                                <>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/index'>
                                            home
                                        </NavLink>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/login'>
                                            login
                                        </NavLink>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/register'>
                                            register
                                        </NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>

        </div>

    )
}
/* Previous Way I made the navigation links */
/*
    export class NaviBar extends React.Component {
        render() {
            let pages = ['index', 'login', 'register'];
            let pageLink = pages.map(page => {
                return (
                    <span className='nav-item mx-2' key={'span_'+page}>
                        <a className='nav-link' href={'/' + page} key={page}>
                            {page}
                        </a>
                    </span>
                )
            });
            return <nav id='navBar' className='nav justify-content-center nav-tabs pb-2 pt-1'>{pageLink}</nav>;
        }
    }
*/
export default NavigationBar;