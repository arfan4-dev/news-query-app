import logo from './logo.svg';
import './App.css';
import { QueryClientProvider,QueryClient } from 'react-query'
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Footer from './Page/common/footer/Footer'
import SinglePage from './Page/singlePage/SinglePage';
import Culture from './Page/culture/Culture'
import CategoryPage from './Page/singlePage/CategoryPage';
function App() {
  const client=new QueryClient()
  return (
    
    <div className="App">
      <Header/>
      {/* <QueryClientProvider client={client}> */}
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/singlepage/:id' element={<SinglePage/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route exact path='/culture' element={<Culture />}/>
   

      </Routes>
      {/* </QueryClientProvider> */}
     

     <Footer/> 

    </div>
  );
}

export default App;
