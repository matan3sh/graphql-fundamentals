import React, { useEffect, useState } from 'react';

import { useQuery, gql } from '@apollo/client';
import { GET_USERS } from '../graphql/Queries';

const Users = () => {
  const { error, loading, data } = useQuery(GET_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) setUsers(data.getAllUsers);
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {users.map((user) => (
        <h2>{user.firstName}</h2>
      ))}
    </div>
  );
};

export default Users;
