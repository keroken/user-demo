import { useState } from 'react';

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([{ id: 1 }]);
  const handleFetchUsers = () => alert('fetch users');

  return {userList, handleFetchUsers};
};
