import './components/modules/NavTopPage.css';
import './components/modules/Global.css';
import './components/modules/HeroPage.css';
import './components/modules/MainLandingPage.css';
import HeroPage from './components/HeroPage';
import MainLandingPage from './components/MainLandingPage';
import NavTopPage from './components/NavTopPage';

function App() {
  return (
    <div className="App">
      <NavTopPage />
      <HeroPage />
      <MainLandingPage />
    </div>
  );
}

export default App;