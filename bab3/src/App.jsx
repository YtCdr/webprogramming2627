import './App.css'

// import transaksi Item 
import TransaksiItem from './component/TransaksiItem';
// import kartu Ringkasan
import KartuRingkasan from './component/KartuRingkasan';
// import badge
import Badge from './component/Badge';
// WalletSummary
import WalletSummary from './component/WalletSummary';


function App() {
  return (
    <>
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          <TransaksiItem/>
          {/* Route transaksiItem */}
          {/* Route KartuRingaksan */}
          <KartuRingkasan/>
          {/* Route Badge */}
          <Badge/>
          {/* Route WalletSummary */}
          <WalletSummary/>
          
    
     

      
    </>
  )
}

export default App
