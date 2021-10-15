import axios from 'axios';
import { useState } from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';

const App = () => {
  const { userList, handleFetchUsers } = useFetchUsers();
  console.log(userList);
  // const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const handleFetchUser = () => {
  //   setIsLoading(true);
  //   setIsError(false);

  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then(result => {
  //       const users = result.data.map(user => ({
  //         id: user.id,
  //         name: user.name,
  //         email: user.email,
  //         city: user.city,
  //       }));
  //       setUserList(users);
  //     })
  //     .catch(() => setIsError(true))
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <div>
      <h3>User Demo</h3>
      <button onClick={handleFetchUsers}>GET User</button>
      {isError && <p style={{ color: 'red' }}>Error!</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id}: ${user.name} from ${user.city}`}</p>
        ))
      )}
    </div>
  );
};

export default App;
