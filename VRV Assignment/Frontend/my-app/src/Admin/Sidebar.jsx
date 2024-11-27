import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmRight, HiUpload, HiUser, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../context/AuthProvider';

export const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h4 className='text-primary'>Dashboard</h4>
      <hr />
      
      {/* Movies Management Section */}
      <div className="list-group">
        <Link to="/uploadmovie" className='list-group-item list-group-item-action'>Upload Ladoos
          <HiUpload /> 
        </Link>
        <Link to="/deletemovies" className='list-group-item list-group-item-action'>Manage Ladoos
          <HiViewBoards /> 
        </Link>
      </div>
      <hr />

     

      {/* User Section */}
      <h4 className='text-primary'>Users</h4>
      <hr />
      <div className="list-group">
        <Link to="/register" className='list-group-item list-group-item-action'>
          {user ? user.email : <><HiUser /> Sign In</>}
        </Link>
        <Link to="/" className='list-group-item list-group-item-action'>
          <HiArrowSmRight /> Logout
        </Link>
      </div>
    </div>
  );
};
