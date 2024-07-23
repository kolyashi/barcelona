import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat/Chat'
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Gallery from './gallery/Gallery';

function App() {
  return (
   <>
      <HeaderInfo></HeaderInfo>
      <Gallery></Gallery>
      <Chat></Chat>
      
   </>
  );
}

export default App;
