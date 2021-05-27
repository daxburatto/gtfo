import React from 'react';

import Auth from '../utils/auth';

const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            {/* <ThoughtForm /> */}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
