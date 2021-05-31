import gql from 'graphql-tag';

export const QUERY_TRIPS = gql`
  query trips($username: String) {
    trips(username: $username) {
      _id
      tripDays
      tripCost
      createdAt
      username
      activites
    }
  }
`;

export const QUERY_TRIP = gql`
  query trip($id: ID!) {
    trip(_id: $id) {
      _id
      tripDays
      tripCost
      createdAt
      username
      activites
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trips {
        _id
        tripDays
        tripCost
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      trips {
        _id
        tripDays
        tripCost
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      trips {
        _id
        tripDays
        tripCost
        createdAt
      }
    }
  }
`;
