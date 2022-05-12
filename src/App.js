import React from 'react';
import {BrowserRouter,  Routes ,Route} from 'react-router-dom'
import { BlogDetail } from './pages/BlogDetail';

import Home from './pages/Home'
function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/blog-detail' element={<BlogDetail />}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
