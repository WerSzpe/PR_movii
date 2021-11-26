
import './App.css';

import SiteLogo from './components/siteLogo';
import LoginButton from './components/loginButton';
import SearchBox from './components/searchBox';

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="header">
          <SiteLogo />
          <SearchBox />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default App;
