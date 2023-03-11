import { useFetch } from './useFetch';
import './App.css'

function App() {
  const {data, loading, error, handleCancelRequest}  = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="App">
      <h1>Lista de usuarios con Fetch y React/Vite</h1>
      <button onClick={handleCancelRequest}>Cancell Request</button>
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
