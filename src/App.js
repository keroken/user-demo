import { useFetchUsers } from './hooks/useFetchUsers';

const App = () => {
  const { isLoading, isError, userList, handleFetchUsers } = useFetchUsers();
  console.log(userList);

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
