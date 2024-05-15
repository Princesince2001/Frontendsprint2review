import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import SearchBar from './Searchbar';
import Course from './Course';
import Relevantz from '../../assets/Images/Relevantz.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../Styles/Navbar.css'; // Adjust the path as needed

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)"><img src={Relevantz} alt="Relevantz Logo" /></a>
          <div><h5>Learning Management System</h5></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
          
          <SearchBar />
          </div>
          {/* <div className="collapse navbar-collapse" id="mynavbar">
          <form className="d-flex">
            <div className="input-group ms-5">
              <input className="form-control" type="text" placeholder="Search" />
              <button className="btn btn-light" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>

            <div>
              search results
            </div>
          </form> */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link icon" href="javascript:void(0)">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon" href="javascript:void(0)">Course</a>
            </li>

          </ul>
          <div className="user-profile">
            {/* <img src="https://www.example.com/profile.png" alt="Profile" /> */}

            {/* <Avatar src="Relevantz.png" alt="User Avatar" /> */}
            {/* <AccountCircleIcon/> */}
            <span>Priya</span>



          </div>



        </div>




      </nav>

    

   <Course/>

 

 </div>


  );
}

export default Navbar;