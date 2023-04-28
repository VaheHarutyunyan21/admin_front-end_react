import React from 'react';
import { Link } from 'react-router-dom';
function AdminHome() {

  return(
    <div>
        




<Link to="/products">  Products  </Link>
<Link to="/categories">  Categories  </Link>
        
    </div>
  )
}

export default AdminHome;