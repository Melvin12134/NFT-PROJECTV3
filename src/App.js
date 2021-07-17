import { useEffect } from 'react';
import './App.css';
import { Sidebar } from './Sidebar/Sidebar';

import { Topbar } from './Topbar/topbar';
import { Route, BrowserRouter } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import { Login } from './Topbar/Login/Login';




function App() {




  return (
   


<div className="main">

     <BrowserRouter>
     <Topbar />

     <Sidebar />
     <Route exact path="/profile" component={Profile} />
     <Route exact path="/login" component={Login} />
      
      </BrowserRouter>
      </div>



     
    
      

  )
}

export default App;
