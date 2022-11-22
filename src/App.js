import React from 'react';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loginpage from './Initialpage/Loginpage';
import Forgotpassword from './Initialpage/Forgotpassword';
import Managedjobs from './Jobs/managejobs';
import ManagedResumes from './Jobs/manageresumes';
import JobsDashboard from './Jobs/jobs_dashboard';
import CandidateList from './Jobs/candidatelist';
import ShortlistCandidate from './Jobs/shortlistcandidates';
import DefaultLayout from './Initialpage/Sidebar/DefaultLayout';


const App = () => {

  return ( 
    <div className = "App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage/>} />
          <Route path='forgotpassword' element={<Forgotpassword/>} />
          <Route path='jobsdashboard' element={<JobsDashboard/>} />
          <Route path='managedjobs' element={<Managedjobs/>} />
          <Route path='managedresumes' element={<ManagedResumes/>} />
          <Route path='candidatelist' element={<CandidateList/>} />
          <Route path='shortlistcandidate' element={<ShortlistCandidate/>} />
        </Routes>
      </BrowserRouter> */}

      <DefaultLayout />


    </div>
   
  )

}

export default App;
