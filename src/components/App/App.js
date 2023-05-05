import './App.css';
//import the Routes and Route components to perform client-side routing.
import {Routes, Route} from 'react-router-dom';

//Routes: container component used to perform matching between the browsers address bar and one of the path props of a client-side route defined with a Route component.
// Route: defines a client-side route for rendering a page-level component 
import Main from '../../pages/Main/Main';
import StarshipsList from '../../pages/StarshipsList/StarshipsList';
import Starship from '../../pages/Starship/Starship';
import Nav from '../Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ships" element={<StarshipsList/>}/>
        <Route path="/ships/:id" element={<Starship/>}/>
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
