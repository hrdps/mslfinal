import './App.css';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomeBak from './pages/HomeBak';
import Services from './pages/Services';
import Entities from './pages/Entities';
import Work from './pages/Work';
import People from './pages/People';
import Network from './pages/Network';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FourZeroFour from './pages/FourZeroFour';
import CardStack from './pages/CardStack';
import NewHomeBak from './pages/NewHomeBak';
import Home from './pages/Home';

function App() {
  return (
    <div id='main_app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services' element={<Services />} />
          <Route path='/entities' element={<Entities />} />
          <Route path='/people' element={<People />} />*/}
          <Route path='/work' element={<Work />} />
          <Route path='/network' element={<Network />} />
          <Route path='/card' element={<CardStack />} />
          <Route path='/newhome' element={<HomeBak />} />
          <Route path='/nhome' element={<NewHomeBak />} />
          <Route path='*' element={<FourZeroFour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
