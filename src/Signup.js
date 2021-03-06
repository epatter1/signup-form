import React, { useState } from "react";
import useSignUpForm from "./CustomHooks";

import {
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  MenuItem,
  ListItemText,
  withStyles,
  makeStyles,
  Input
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const names = [
  "Become twice as strong when both of your fingers are stuck" ,
  "Crawl twice as fast as you can run?",
  "Have everything you draw become real but be permanently terrible at drawing",
  "Be able to fly but only as fast as you can walk",
  "Eat a sandwich made from 4 ingredients in your fridge chosen at random",
  "Eat a sandwich made by a group of your friends from 4 ingredients in your fridge",
  "Live without the internet",
  "Live without AC and heating",
  "Be able to teleport anywhere",
  "Able to read minds"
];

const Signup = () => {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  const signup = () => {
    alert(`User Created! 
Name: ${inputs.fullName} ${inputs.lastName}
Email: ${inputs.email}`);
  };
  const { inputs, setInputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      fullName: "",
      email: "",
      phonenumber: "",
      city: "",
      state: "",
      zipcode: "",
      yes: "",
      no: "",
      password1: "",
      password2: ""
    },
    signup
  );

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="field">
                <label className="label has-text-centered">Full Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="fullName"
                    onChange={handleInputChange}
                    value={inputs.fullName}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-centered">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={inputs.email}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-centered">Phone #</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="phonenumber"
                    onChange={handleInputChange}
                    value={inputs.lastName}
                    required
                  />
                </div>
              </div>

              <div className="field">
              <label className="label has-text-centered">City</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="phonenumber"
                  onChange={handleInputChange}
                  value={inputs.lastName}
                  required
                />
              </div>
            </div>

            <div className="field">
            <label className="label has-text-centered">State</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="phonenumber"
                onChange={handleInputChange}
                value={inputs.lastName}
                required
              />
            </div>
          </div>

              <div className="field">
                <label className="label has-text-centered">Zip Code</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="zipcode"
                    onChange={handleInputChange}
                    value={inputs.lastName}
                    required
                  />
                </div>
              </div>

              <div className="form-check">
                <label>
                  <p>Did the chicken come before the egg?</p>
                  <input
                    type="radio"
                    name="yes"
                    value={inputs.yes}
                    className="form-check-input"
                  />
                  Yes
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="no"
                    value={inputs.no}
                    className="form-check-input"
                  />
                  No
                </label>
              </div>
              <div className="form-check">
              <FormControl className={classes.formControl}>
                <label>Would You Rather: </label>
                <InputLabel htmlFor="select-multiple-checkbox"></InputLabel>
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(", ")}
                  withStyles={withStyles}
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </div>

              <button
                className="button is-block is-fullwidth is-success"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
