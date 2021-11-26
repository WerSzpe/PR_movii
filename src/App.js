
import './App.css';

import SiteLogo from './components/siteLogo';
import LoginButton from './components/loginButton';
import SearchBox from './components/searchBox';
import MovieCardSmall from './components/movieCard';

function App() {
  return (

    <div className="App">

      <div className="header">
        <SiteLogo />
        <SearchBox />
        <LoginButton />
      </div>
      <div className="container">

      </div>
    </div>

  );
}

export default App;
