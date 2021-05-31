import React from "react";
import { Redirect, useParams } from "react-router-dom";

import TripList from "../components/TripList";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER, QUERY_ME, QUERY_TRIPS } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // This is the query we need to get working (always comes back empty)
  const { please, work } = useQuery(QUERY_TRIPS, {
    variables: { username: user.username }
  });

  const trips = work?.trips || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (please) {
    return <div>Please...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          {user.username} Trips
        </h2>
        <div className="col-12 mb-3 col-lg-8">
          <TripList trips={trips} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
