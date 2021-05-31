import React from 'react';
import { Link } from 'react-router-dom';

const TripList = ({ trips}) => {
  if (!trips.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
      {trips &&
        trips.map(trip => (
          <div key={trip._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${trip.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {trip.username}
              </Link>{' '}
              trip on {trip.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/trip/${trip._id}`}>
                <p>{trip.tripDays}</p>
                <p>{trip.tripCost}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TripList;
