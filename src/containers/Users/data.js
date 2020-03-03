import createResource from '../../utils/createResource';

export const getUsers = (delay = 1) => createResource(
  fetch(`https://reqres.in/api/users?delay=${delay}`).then(response => response.json())
);
