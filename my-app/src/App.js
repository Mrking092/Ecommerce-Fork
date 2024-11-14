import logo from './logo.svg';
import './App.css';
import Header from './Components/zeroz/Header/Header';
import Footer from './Components/zeroz/Footer/Footer';
import HomeContent from './Components/zeroz/Home/homeContent';
import LookBook from './Components/zeroz/LookBook/LookBook'
import Cart from './Components/zeroz/Cart/Cart'

function App() {
  return (
    <>
      <Header/>
      {/* <HomeContent/> */}
      {/* <LookBook/> */}
      <Cart/>
      <Footer/>
    </>
  );
}

export default App;
