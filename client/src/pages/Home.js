import React, { useState } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { useParams } from "react-router-dom";



const Home = () => {
  const loggedIn = Auth.loggedIn();
  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const [formState, setFormState] = useState({ days: "", budget: ""});

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // set options for dropdown
  const options = [
    { value: 'discovering', label: 'Cultural Arts' },
    { value: 'eating', label: 'Culinary Expeditions' },
    { value: 'going_out', label: 'Night Life' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'playing', label: 'Family Friendly' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'sightseeing', label: 'Sightseeing' },
    { value: 'relaxing', label: 'Relaxation' }
  ];

  const animatedComponents = makeAnimated();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formState.days);
    console.log(formState.budget);
    console.log(selectedValue);
    // clear form values
    setFormState({
      days: "",
      budget: ""
    });

    setSelectedValue([]);

    //window.location.assign('/profile');
  };

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <h1 className="uppercase">Welcome {user.username}, lets plan your trip!</h1>
          </div>
        )}
      </div>
      <div className="col-12 col-md-6">
      {loggedIn && (
        <div className="card">
          <h4 className="card-header">Trip Details</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="How many days do you want to spend in paradise? (Enter an integer)"
                name="days"
                type="number"
                id="days"
                value={formState.days}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="How much do you want to spend? (Enter an integer)"
                name="budget"
                type="number"
                id="budget"
                value={formState.budget}
                onChange={handleChange}
              />
              <Select
              placeholder="What activities are you most interested in?"
              options={options}
              components={animatedComponents}
              isMulti
              isClearable
              name="activites"
              id="activites"
              value={selectedValue}
              onChange={setSelectedValue}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        )}
      </div>
    </main>
  );
};

export default Home;
