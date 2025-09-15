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

// CRIAR IMAGENS DE TRANSIÇÃO DE CONTAINER / EX: UMA IMAGEM QUE VAI FICAR NO FOOTER DO HERO
// E VAI FAZER A TRANSIÇÃO SUAVE DE UM CONTAINER PRO OUTRO. COM A MESMA COR DO PROXIMO.

// AJEITAR O PROJETO EM TELA CHEIA PARA PC E TELA MINIMAL PARA CEL.

//IMPORTANTEEEEE - CRIAR A TRANSIÇÃO ENTRE HERO PAGE ATÉ A COLEÇÃO NO MAINLANDING