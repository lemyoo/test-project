import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form} from 'react-bootstrap'
import './UserForm.css';
import {connect} from 'react-redux';

const UserBForm=(props)=>{
    const {userdetails} = props
    console.log(userdetails);
    console.log("tttttt");

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                        <h1 className="headingtext">User B</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="z">Enter Number(Z) </label>
                                    <br />
                                    <input type="number" className="form-control" name="z" id="z"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Enter Date</label>
                                    <Form.Control type="date" name="date" id="date"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="time">Enter Time</label>
                                    <Form.Control type="time" name="time" id="time"/>
                                </div>
                                    <input type="submit" value="Submit"/>
                                
                            </form>
                            <br />
                            <br />
                            <h2>User A details</h2>
                    </div>
            
                </div>
            </div>
        );
    }

const mapStateToProps = state =>{
    return{userADetails: state.reducers.userAData}
}
export default connect(mapStateToProps)(UserBForm);