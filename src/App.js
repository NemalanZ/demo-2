import React from 'react';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

import Loginpage from './Initialpage/Loginpage';
import Forgotpassword from './Initialpage/Forgotpassword';
import Managedjobs from './Jobs/managejobs';
import ManagedResumes from './Jobs/manageresumes';
import JobsDashboard from './Jobs/jobs_dashboard';
import CandidateList from './Jobs/candidatelist';
import ShortlistCandidate from './Jobs/shortlistcandidates';





const App = () => {

  return ( 
    <div className = "App">
      {/* <Loginpage/> */}
      {/* <Forgotpassword/> */}
      {/* <Managedjobs/> */}
      {/* <ManagedResumes/> */}
      <JobsDashboard/>
      {/* <CandidateList/> */}
      {/* <ShortlistCandidate/> */}

        

      
      
      
      

    </div>
   
  )

}

export default App;
