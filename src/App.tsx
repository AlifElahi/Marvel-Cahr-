
import './App.css';
import Footer from './components/footer';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/homeScreen/Home';
import Details from './screens/detailScreen/Detail';
import Header from './components/appbar';

function App() {
  return (
    <div className='App'>
      <Header/>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />}/>
        </Routes>
      
    <Footer/>
    </div>
  );
}

export default App;
