// src/Sidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="d-flex" style={{boxShadow:'.25rem .25rem .25rem .25rem rgba(0, 0, 0, .251)' ,borderColor:'black'}}>
      <div class="sidebar">
    <a class="active" href="#home">Home</a>
    {/* <a href="#news">News</a> */}
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
      </div>
      
    // </div>
  );
};

export default Sidebar;
