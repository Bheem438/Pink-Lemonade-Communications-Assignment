import './App.css'
import FifthPage from './components/FifthPage';
import FinalPage from './components/FinalPage';
import FirstPage from './components/FirstPage';
import FourthPage from './components/FourthPage';
import Header from "./components/Header";
import SecondPage from './components/SecondPage';
import SeventhPage from './components/SeventhPage';
import SixthPage from './components/SixthPage';
import ThirdPage from './components/ThirdPage';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <FinalPage />
    </div>
  );
}

export default App;
