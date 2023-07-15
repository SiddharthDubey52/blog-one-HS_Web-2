// import React from 'react';
import './Card.css';
import Laptop from '../assets/laptop.jpg';

const Card = () => {
  return (
    <>

      <div className='container'>
        <div className="top">
          {/* <img src="../assets/laptop.jpg" alt="this is " />
         */}
          <img src={Laptop} alt="img" />
          {/* <Laptop/> */}
        </div>
        <div className="down">
          <p className="date">July,20,2023</p>
          <h2>Best 17 Work From Home Content Writing Jobs and Vacancies</h2>

          <p>looking for a suitable work-from-domestic task that lets you unleash your creativity and earn consistent earnings? look no in addition</p>

        </div>
        <div className="bottom">
          <div className='first'>

            <p>
              <i className="fa-regular fa-comment"></i> 0
            </p>
            <p>
            <i className="fa-solid fa-chart-column"></i> 0
            </p>
            <p>
            <i className="fa-solid fa-heart"></i> 0
            </p>
          </div>
          <div className='second'>
            <p>
            <i className="fa-solid fa-share"></i> Share
          
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
