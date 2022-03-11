
import './App.css';
import SearchAppBar from './components/appbar';
import Footer from './components/footer';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/homeScreen/Home';
import Details from './screens/detailScreen/Detail';

function App() {
  return (
    <div className='App'>
      <SearchAppBar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />}/>
        </Routes>
      
    <Footer/>
    </div>
  );
}

export default App;
