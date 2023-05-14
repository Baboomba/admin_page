import React from 'react';
import './HiddenModal.scss';

const HiddenModal = () => {

  return (
    <div className='hidden-window'>
        <ul className='hidden-list'>
          <li className='hidden-items'>Profile</li>
          <li className='hidden-items'>Account</li>
          <li className='hidden-items'>Favorite</li>
          <li className='hidden-items'>Report</li>
        </ul>
    </div>
  );
};

export default HiddenModal;