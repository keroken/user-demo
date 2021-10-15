import { useState } from 'react';
import axios from 'axios';

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleFetchUsers = () => {
    setIsLoading(true);
    setIsError(false);

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        const users = result.data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.city,
        }));
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return { userList, handleFetchUsers, isLoading, isError };
};
