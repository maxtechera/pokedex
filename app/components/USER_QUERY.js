import { gql } from "@apollo/client";

const USER_QUERY = gql`
  query User {
    user {
      id
      username
      token
      favorites {
        id
        name
      }
    }
  }
`;
export default USER_QUERY;
