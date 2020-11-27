import React from 'react';
import UserAForm from './UserAForm';
import UserBForm from './UserBForm';
import {Route,BrowserRouter as Router, Switch ,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function Users(){
    return(
        <Router>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data--toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            User A
                        </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link" to="/userb">
                            User B
                        </Link>
                        </li>
                    </ul>
                </div>
                </nav>
                </div>
                <Switch>
                    <Route path="/" exact component={UserAForm} />
                    <Route path="/userb" component={UserBForm} />
                </Switch>
        </Router>

    );
}

export default Users;