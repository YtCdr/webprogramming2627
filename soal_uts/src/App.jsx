//import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';      // sesuaikan path
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import LainLainnya from './pages/LainLainnya';
import Mahasiswa from './pages/Mahasiswa';
import Pendidikan from './pages/Pendidikan';
import Riset from './pages/Riset';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)

// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)

// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      {<Header />}
      <div className="main-wrapper">
        <main className="content-area">
          {
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          }
        </main>
         {<SideBar />}
      </div>
      {<Footer />}
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 