import React, { useState } from 'react';
import { getUsers } from './data';

const initialResource = getUsers();

const Users = () => {
  console.log('render');
  const [count, setCount] = useState(1);
  const [resource, setResource] = useState(initialResource);
  const { data } = resource.read();

  const increment = () => {
    setCount(count + 1);
    setResource(getUsers(count + 1));
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setResource(getUsers(count - 1));
    }
  };

  return (
    <div className="users">
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
