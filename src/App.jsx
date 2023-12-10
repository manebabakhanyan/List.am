import './App.css';
import '../src/index.css'
import Header from './Header/header';
import Main from './Main/main';
import BiznesEjer from './Biznes Ejer/biznesEjer';
import TneriVacharq from './Tneri vacharq/tneriVacharq';
import ShinarakakanEvCanRTexnika from './Shinararakan ev canr texnika/shinarakakanEvCanRTexnika';
import BnakaranneriVacharq from './Bnakaranneri vacharq/bnakaranneriVacharq';
import Elektronika from './Elektronika/elektronika';
function App() {
  return (
    <div>
      <Header />
      <Main />
      <BiznesEjer />
      <TneriVacharq />
      <ShinarakakanEvCanRTexnika />
      <BnakaranneriVacharq />
      <Elektronika />
    </div>
  );
}

export default App;
