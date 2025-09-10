import './components/modules/NavTopPage.css';
import './components/modules/Global.css';
import './components/modules/HeroPage.css';
import './components/modules/MainLandingPage.css';
import './components/modules/FooterPage.css';

import HeroPage from './components/HeroPage';
import MainLandingPage from './components/MainLandingPage';
import NavTopPage from './components/NavTopPage';
import FooterPage from './components/FooterPage';


function App() {
  return (
    <div className="App">
      <NavTopPage />
        <HeroPage />
          <MainLandingPage /> 
            <FooterPage />
    </div>
  );
}

export default App;