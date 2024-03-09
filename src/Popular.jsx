import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoCategory from './components/NoCategory';

export default function Popular({ onChildValue }) {
  const navigate = useNavigate();

  // route for no category
  const handleClick = () => {
    navigate("*");
  };

  return (
    <div className='popular'>
      <h1 className='favourite'>Favourite topic's</h1>

      <div className='list'>
        <ul className='list-items' onClick={handleClick}>
          <li>ENGINEERING DAYS</li>
          <li>BANGALORE STORIES</li>
          <li>GOA DIARIES</li>
          <li>NITK STUFFS</li>
          <li>IIM THINGS</li>
          <li>IIMB FACTS</li>
          <li>SHAYARI</li>
          <li>VIKAS MEENA</li>
        </ul>
      </div>
    </div>
  );
}
