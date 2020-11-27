import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./UserForm.css";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { displayUserAData } from "../actions/Actions";

const UserAForm = (props) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    props.displayUserAData(data);
  };

  //console.log(watch("x"),watch("date"),watch("time"),watch("fruits"),watch("y"));
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>

        <div className="col-sm-4">
          <h1 className="headingtext">User A</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="x">Enter a number(X)</label>
              <input
                type="number"
                className="form-control"
                id="x"
                name="x"
                ref={register({ required: true })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fruits">Select A Fruit</label>
              <select
                className="form-control"
                id="fruits"
                name="fruits"
                ref={register({ required: true })}
              >
                <option>Apple</option>
                <option>Mango</option>
                <option>Orange</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Choose Date</label>
              <Form.Control
                type="date"
                name="date"
                id="date"
                ref={register({ requirde: true })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <Form.Control
                type="time"
                name="time"
                id="time"
                ref={register({ requirde: true })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="y">Enter Number(Y)</label>
              <input
                type="number"
                className="form-control"
                name="y"
                id="y"
                ref={register({ requirde: true })}
              />
            </div>

            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

let mapDispatchToProps = { displayUserAData };

export default connect(null, mapDispatchToProps)(UserAForm);
