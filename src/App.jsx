import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

function App() {

  const [username, setUsername] = useState("");
  const handleSearch = (username) => setUsername(username);

  return (
    <>
      <Search onSearch={handleSearch} />
      <Results username={username}/>
    </>
  );
}

export default App;
