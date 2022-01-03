import React from 'react';
import smartphone from '../../../images/smartphone.png';
import './homePage.css';
 

const HomePage = () => {
    return (
        <div className='container-fluid'>
            <div className='row heading'>
            <div className='  col-12 col-md-6 '>

             <h1 > Delhi Homes</h1>
             <h2>It feels like home.
             Finding you perfect home was never been this easy.</h2>
            </div>
            <img className='col-12 col-md-6 heading-img' src={smartphone}  />
            </div>

            <div className= "row features">
                <div className='col-6 col-md-4 col-lg-4' >

                </div>
            </div>
        </div>
    )
}

export default HomePage;
