import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-5">
        <h1 className="display-4">Welcome to Surplus Food Management</h1>
        <p className="lead">
          Reduce food waste, alleviate hunger, and build a stronger community by connecting donors, beneficiaries, and volunteers.
          
        </p>
        <p style={{color:'blue' , fontWeight:'500'}}>"Hunger is not a problem. It is an obscenity. How wonderful it is that nobody need wait a single moment before starting to improve the world".</p><p style={{fontWeight:'800', marginLeft:'900px'}}> – Anne Frank
        </p><p>No Food Waste is an organisation which aims to redistribute excess food from weddings,parties, events to those who are hungry.</p>
        <hr className="my-4" />
      </div>
      
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm h-100">
            <div className="card-body">
              <h2 className="card-title">Donors</h2>
              <p className="card-text">Have surplus food? Help those in need by donating your excess food.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm h-100">
            <div className="card-body">
              <h2 className="card-title">Volunteers</h2>
              <p className="card-text">Want to make a difference? Join us as a volunteer and help deliver food to those in need.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm h-100">
            <div className="card-body">
              <h2 className="card-title">Beneficiaries</h2>
              <p className="card-text">In need of food assistance? Sign up to receive donations from our generous donors.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/register" className="btn btn-primary btn-lg mx-2">Register</Link>
        <Link to="/login" className="btn btn-secondary btn-lg mx-2">Login</Link>
      </div>
    </div>
  );
};

export default HomePage;
