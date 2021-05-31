import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($tripDays: Int!, $tripCost: Int!, $username: String!) {
    addTrip(tripDays: $tripDays, tripCost: $tripCost, username:$username) {
      _id
      tripDays
      tripCost
      createdAt
      username
      activites
    }
  }
`;
